import express from "express";
import { handleSendEmail, handleStatus } from "../controllers/emailController";

const router = express.Router();

router.post("/send", handleSendEmail);
router.get("/status/:id", handleStatus);

export default router;
