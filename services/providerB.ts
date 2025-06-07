import { EmailRequest } from "../models/emailModel";

export const sendWithProviderB = async (email: EmailRequest): Promise<boolean> => {
  console.log("ProviderB sending...");
  if (Math.random() < 0.8) return true; 
  throw new Error("ProviderB failed");
};
