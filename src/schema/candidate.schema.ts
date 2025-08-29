import { z } from "zod";
import { fullNameRegex, ukPhoneRegex } from "./auth.schema";
import { isEditorContentEmpty } from "./job.schema";

export const candidatePersonalSchema = z.object({
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
  address: z
    .string({
      invalid_type_error: "Address must be string",
      required_error: "Address is required",
    })
    .min(1, "Address is required")
    .trim(),
  details: z.preprocess(
    (val) => {
      if (typeof val === "string" && isEditorContentEmpty(val)) {
        return ""; // force fail if visually empty
      }
      return val;
    },
    z
      .string({
        invalid_type_error: "Description must be string",
        required_error: "Description is required",
      })
      .min(1, "Description is required")
  ),
});

export const candidateProfessionalSchema = z.object({
  job_title: z
    .string({
      invalid_type_error: "Job Title must be string",
      required_error: "At least one job title required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
    }),
  careerObjective: z
    .string({
      invalid_type_error: "Career Objective must be a string",
      required_error: "Career Objective is required",
    })
    .trim()
    .min(10, "Career Objective must be at least 10 characters"),
  job_seeking: z
    .string({
      invalid_type_error: "Job Seeking Title must be string",
      required_error: "At least one job seeking title required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
    }),
  education: z
    .string({
      invalid_type_error: "Education must be string",
      required_error: "Select education",
    })
    .trim()
    .min(1, "Select education"),
  experience: z
    .string({
      invalid_type_error: "Experience must be string",
      required_error: "Select experience",
    })
    .trim()
    .min(1, "Select experience"),
  availability: z
    .array(z.string(), {
      required_error: "Select at least one availibility",
    })
    .min(1, { message: "Select at least one availibility" }),
  skill: z
    .string({
      invalid_type_error: "Skill must be string",
      required_error: "Skills required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
    }),
  availabil_date: z
    .string({
      invalid_type_error: "Available date must be string",
      required_error: "Select available date",
    })
    .trim()
    .min(1, "Select available date"),
});

export const locationSchema = z.object({
  longitude: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val >= -180, {
      message: "Longitude must be >= -180",
    })
    .refine((val) => val <= 180, {
      message: "Longitude must be <= 180",
    }),
  latitude: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val >= -90, {
      message: "Latitude must be >= -90",
    })
    .refine((val) => val <= 90, {
      message: "Latitude must be <= 90",
    }),
});

const startDateSchema = z
  .string({
    required_error: "Please select Start Date",
  })
  .min(1, { message: "Please select Start Date" })
  .refine(
    (value) => {
      const dateRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return dateRegex.test(value);
    },
    {
      message: `Invalid Date format, expected 'yyyy-MM-dd' format`,
    }
  );

// const endDateSchema = z
//   .string({
//     required_error: "Please select End Date",
//   })
//   .min(1, { message: "Please select End Date" })
//   .refine(
//     (value) => {
//       const dateRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
//       return dateRegex.test(value)
//     },
//     {
//       message: `Invalid Date format, expected 'yyyy-MM-dd' format`,
//     },
//   )

export const workExperienceSchema = z
  .object({
    job_title: z
      .string({
        invalid_type_error: "Job Title must be string",
        required_error: "Job Title is required",
      })
      .trim()
      .min(1, "Job Title is required")
      .regex(fullNameRegex, {
        message:
          "Job Title can only contain letters, spaces, apostrophes, hyphens, and dots.",
      }),
    location: z
      .string({
        invalid_type_error: "Address must be string",
        required_error: "Address is required",
      })
      .min(1, "Address is required")
      .trim(),
    company_name: z
      .string({
        invalid_type_error: "Company Name must be string",
        required_error: "Company Name is required",
      })
      .trim()
      .min(1, "Company name is required"),
    start_date: startDateSchema,
    end_date: z.string().optional(),
    currently_work: z.boolean().default(false),
    details: z
      .string({
        invalid_type_error: "Description must be string",
        required_error: "Description is required",
      })
      .trim()
      .min(1, "Description is required"),
  })
  .superRefine((values, ctx) => {
    const { start_date, end_date, currently_work } = values;

    // If not currently working, end_date is required
    if (!currently_work) {
      if (!end_date || end_date.trim() === "") {
        ctx.addIssue({
          path: ["end_date"],
          message: "Please select End Date",
          code: z.ZodIssueCode.custom,
        });
        return;
      }

      // Validate end_date format if provided
      const dateRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      if (!dateRegex.test(end_date)) {
        ctx.addIssue({
          path: ["end_date"],
          message: "Invalid Date format, expected 'yyyy-MM-dd' format",
          code: z.ZodIssueCode.custom,
        });
        return;
      }

      // Compare dates only if both are valid
      const StartDate = new Date(start_date);
      const EndDate = new Date(end_date);

      if (StartDate >= EndDate) {
        ctx.addIssue({
          path: ["start_date"],
          message: "Start date must be less than End Date",
          code: z.ZodIssueCode.custom,
        });

        ctx.addIssue({
          path: ["end_date"],
          message: "End Date must be greater than Start Date",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });
