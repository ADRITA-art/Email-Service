import { EmailRequest } from "../models/emailModel";
import { sendWithProviderA } from "./providerA";
import { sendWithProviderB } from "./providerB";
import { retry } from "./retryPolicy";
import { isRateLimited } from "./rateLimiter";
import { canAttempt, recordFailure, resetBreaker } from "./circuitBreaker";
import { enqueueEmail } from "./queue";

const sentEmailIds = new Set<string>();
const statusMap = new Map<string, string>();

export const sendEmail = async (email: EmailRequest): Promise<string> => {
  if (sentEmailIds.has(email.id)) return "Duplicate (Idempotent)";

  if (isRateLimited()) {
    enqueueEmail(email);
    return "Queued due to rate limiting";
  }

if (!canAttempt()) {
    console.log(" Circuit breaker open, blocking Provider A.");
    return "Circuit breaker open";
  }

  // Try Provider A
  try {
    const success = await retry(() => sendWithProviderA(email));
    if (success) {
      sentEmailIds.add(email.id);
      statusMap.set(email.id, "Sent by Provider A");
      resetBreaker();
      return "Sent by Provider A";
    } else {
      recordFailure();
    }
  } catch (err) {
    console.log(" Provider A failed after retries.");
    recordFailure(); 
  }

  // Fallback to Provider B
  try {
    const fallbackSuccess = await retry(() => sendWithProviderB(email));
    if (fallbackSuccess) {
      sentEmailIds.add(email.id);
      statusMap.set(email.id, "Sent by Provider B");
      return "Sent by Provider B";
    }
  } catch {
    console.log("Provider B also failed.");
    statusMap.set(email.id, "Failed after fallback");
    return "Failed after fallback";
  }

  return "Failed";
};

export const getEmailStatus = (id: string): string => {
  return statusMap.get(id) || "Not found";
};
