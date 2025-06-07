import express from "express";
import emailRoutes from "./routes/emailRoute";

const app = express();
app.use(express.json());
app.use("/email", emailRoutes);

export default app;

