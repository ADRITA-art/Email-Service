import { EmailRequest } from "../models/emailModel";

const emailQueue: EmailRequest[] = [];

export const enqueueEmail = (email: EmailRequest) => {
  emailQueue.push(email);
};

export const dequeueEmail = (): EmailRequest | undefined => {
  return emailQueue.shift();
};
