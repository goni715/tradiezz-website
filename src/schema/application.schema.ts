import { z } from "zod";

export const applicationStatusSchema = z.object({
  status: z
    .string({
      required_error: "Select Status"
    })
    .min(1, "Select status")
});

export const workStatusSchema = z.object({
  workStatus: z
    .string({
      required_error: "Select Status"
    })
    .min(1, "Select status")
});
