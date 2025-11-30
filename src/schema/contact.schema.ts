import { z } from "zod";
import { fullNameRegex } from "./auth.schema";

export const contactSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be string",
      required_error: "Name is required",
    }) 
    .trim()
     .min(1, "Name is required")
    .regex(fullNameRegex, {
      message:
        "Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string({
      invalid_type_error: "subject must be string",
      required_error: "Subject is required",
    })
    .min(1, "Subject is required")
    .trim(),
  message: z
    .string({
      invalid_type_error: "message must be string",
      required_error: "Write a message",
    })
    .min(1,  "Write a message")
    .trim(),
});