import { Request, Response } from "express";
import { sendEmail, getEmailStatus } from "../services/emailService";

export const handleSendEmail = async (req: Request, res: Response) => {
  try {
    const result = await sendEmail(req.body);
    res.json({ status: result });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const handleStatus = (req: Request, res: Response) => {
  const status = getEmailStatus(req.params.id);
  res.json({ status });
};
