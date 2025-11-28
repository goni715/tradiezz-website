import { z } from "zod";
export const fullNameRegex = /^[A-Za-z\s'.-]+$/; //only contain letters, spaces, apostrophes, hyphens, and dots
export const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:1\d{8,9}|2\d{9}|3\d{9}|7\d{9}|8\d{9}|9\d{8}))$/


export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password is too long")
    .trim(),
});

export type TLoginFormValues = z.infer<typeof loginSchema>

export const forgotPasswordSendOtpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: "New Password is required" })
      .min(1, "New Password is required")
      .min(6, "New Password must be at least 6 characters long")
      .max(100, "New Password is too long")
      .trim(),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(1, "Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters long")
      .max(100, "Confirm Password is too long")
      .trim(),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string({ required_error: "Current Password is required" })
      .trim()
      .min(1, "Current Password is required")
      .min(6, "Current Password must be at least 6 characters long")
      .max(100, "Current Password is too long"),
    newPassword: z
      .string({ required_error: "New Password is required" })
      .trim()
      .min(1, "New Password is required")
      .min(6, "New Password must be at least 6 characters long")
      .max(100, "New Password is too long"),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .trim()
      .min(1, "Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters long")
      .max(100, "Confirm Password is too long"),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export const registerSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
        required_error: "Name is required",
      })
      .min(1, "Name is required")
      .trim()
      .regex(fullNameRegex, {
        message:
          "Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
      }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email address"),
    phone_number: z
      .string({
        invalid_type_error: "Phone Number must be string",
        required_error: "Phone number is required",
      })
      .min(1, "Phone number is required")
      .trim()
      .regex(ukPhoneRegex, {
        message: "Enter a valid UK phone number",
      }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters long")
      .max(100, "Password is too long"),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(1, "Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters long")
      .max(100, "Confirm Password is too long")
      .trim(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must check this box" }),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom,
      });
    }
  });