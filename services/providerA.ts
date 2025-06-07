import { EmailRequest } from "../models/emailModel";

export const sendWithProviderA = async (email: EmailRequest): Promise<boolean> => {
  console.log("ProviderA sending...");
  if (Math.random() < 0) return true; 
  throw new Error("ProviderA failed");
};
