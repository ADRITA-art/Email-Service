import { sendEmail } from "../services/emailService";

test("should not resend duplicate email", async () => {
  const email = { id: "123", to: "test@test.com", subject: "Hello", body: "World" };
  await sendEmail(email);
  const result = await sendEmail(email);
  expect(result).toBe("Duplicate (Idempotent)");
});
