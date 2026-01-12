import { z } from "zod";
import { fullNameRegex, ukPhoneRegex } from "./auth.schema";
import { isEditorContentEmpty } from "./job.schema";

export const candidatePersonalSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Name must be string",
      required_error: "Full Name is required",
    })
    .trim()
    .min(1, "Full Name is required")
    .regex(fullNameRegex, {
      message:
        "Full Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .optional(),
  phone: z
    .string({
      invalid_type_error: "Phone Number must be string",
      required_error: "Phone number is required",
    })
    .min(1, "Phone number is required")
    .trim()
    .regex(ukPhoneRegex, {
      message: "Enter a valid UK phone number",
    }),
  description: z.preprocess(
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
  title: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "At least one title required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated title",
    }),
  jobSeekingTitle: z
    .string({
      invalid_type_error: "Job Seeking Title must be string",
      required_error: "At least one job seeking title required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated job seeking title",
    }),
  categoryId: z
    .string({
      invalid_type_error: "subCategoryId must be a string",
      required_error: "Select category",
    })
    .trim()
    .min(1, "Select category"),
  subCategoryId: z
    .string({
      invalid_type_error: "subCategoryId must be a string",
      required_error: "Select sub category",
    })
    .trim()
    .min(1, "Select sub category"),
  workRate: z
    .string({
      invalid_type_error: "workRate must be a string",
      required_error: "Select work rate",
    })
    .trim()
    .min(1, "Select work rate"),
  experience: z
    .string({
      invalid_type_error: "experience must be a string",
      required_error: "Select experience",
    })
    .trim()
    .min(1, "Select experience"),
  workType: z
    .string({
      invalid_type_error: "workRate must be a string",
      required_error: "Select work type",
    })
    .trim()
    .min(1, "Select work type"),
  skills: z
    .string({
      invalid_type_error: "Skill must be string",
      required_error: "Skills required",
    })
    .trim()
    .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
      message: "Please enter valid comma-separated skills",
    }),
  // careerObjective: z
  //   .string({
  //     invalid_type_error: "Career Objective must be a string",
  //     required_error: "Career Objective is required",
  //   })
  //   .trim()
  //   .min(10, "Career Objective must be at least 10 characters"),
  // job_seeking: z
  //   .string({
  //     invalid_type_error: "Job Seeking Title must be string",
  //     required_error: "At least one job seeking title required",
  //   })
  //   .trim()
  //   .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
  //     message: "Please enter valid comma-separated skills",
  //   }),
  // education: z
  //   .string({
  //     invalid_type_error: "Education must be string",
  //     required_error: "Select education",
  //   })
  //   .trim()
  //   .min(1, "Select education"),
  // experience: z
  //   .string({
  //     invalid_type_error: "Experience must be string",
  //     required_error: "Select experience",
  //   })
  //   .trim()
  //   .min(1, "Select experience"),
  availableDate: z
    .string({
      required_error: "Select available date",
    })
    .trim()
    .min(1, { message: "Select available date" }),
  // skill: z
  //   .string({
  //     invalid_type_error: "Skill must be string",
  //     required_error: "Skills required",
  //   })
  //   .trim()
  //   .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
  //     message: "Please enter valid comma-separated skills",
  //   }),
  // availabil_date: z
  //   .string({
  //     invalid_type_error: "Available date must be string",
  //     required_error: "Select available date",
  //   })
  //   .trim()
  //   .min(1, "Select available date"),
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
  address: z
    .string({
      invalid_type_error: "Address must be string",
      required_error: "Address is required",
    })
    .optional(),
  city: z
    .string({
      invalid_type_error: "city must be string",
      required_error: "city is required",
    })
    .optional(),
  postalCode: z
    .string({
      invalid_type_error: "postalCode must be string",
      required_error: "postalCode is required",
    })
    .optional(),
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

const candidateLocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required").optional(),
  postalCode: z.string().min(1, "City is required").optional(),
});

export const candidateRegisterSchema = z
  .object({
    // Step 1: Basic Information
    fullName: z.string().min(1, "Name is required"),
    email: z.string().email("Email is invalid").min(1, "Email is required"),
    phone: z
      .string({
        invalid_type_error: "Phone Number must be string",
        required_error: "Phone number is required",
      })
      .min(1, "Phone number is required")
      .trim()
      .regex(ukPhoneRegex, {
        message: "Enter a valid UK phone number",
      }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),

    // Step 2: Category Selection
    title: z
      .string({
        invalid_type_error: "Title must be string",
        required_error: "At least one title required",
      })
      .trim()
      .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
        message: "Please enter valid comma-separated title",
      }),
    jobSeekingTitle: z
      .string({
        invalid_type_error: "Job Seeking Title must be string",
        required_error: "At least one job seeking title required",
      })
      .trim()
      .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
        message: "Please enter valid comma-separated job seeking title",
      }),
    categoryId: z.string().min(1, "Category is required"),
    subCategoryId: z.string().min(1, "Sub-category is required"),
    workRate: z.string().min(1, "Rate is required"),
    availableDate: z
      .string({
        required_error: "Please, select available date",
        invalid_type_error: "availableDate must be string value",
      })
      .trim()
      .min(1, { message: "Please, select available date" })
      .superRefine((date, ctx) => {
        const formatRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

        // 1️⃣ Validate format first
        if (!formatRegex.test(date)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid Date format, expected 'YYYY-MM-DD'",
          });
          return; // stop further checks
        }

        // 2️⃣ Parse date and check future
        const inputDate = new Date(date + "T00:00:00"); // consistent local date
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        inputDate.setHours(0, 0, 0, 0);

        if (inputDate < today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Available date must be today or a future date",
          });
        }
      }),
    workType: z.string().min(1, "Type is required"),
    employmentType: z.string().min(1, "Employment Type is required"),

    // Step 3: Location
    location: candidateLocationSchema.refine((val) => val !== null, {
      message: "Location is required",
    }),

    // Step 4: Skills & Experience
    skills: z.array(z.string()).min(1, "At least one skill is required"),
    experience: z.string().min(1, "Experience is required"),
    // dateOfBirth: z
    //   .string({
    //     required_error: "Select Date of Birth",
    //     invalid_type_error: "dateOfBirth must be string value",
    //   })
    //   .trim()
    //   .min(1, { message: "Select Date of Birth" })
    //   .superRefine((date, ctx) => {
    //     const formatRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    //     // 1️⃣ Validate format first
    //     if (!formatRegex.test(date)) {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "dateOfBirth must be 'YYYY-MM-DD' format",
    //       });
    //       return; // stop further checks
    //     }
    //     // 2️⃣ Parse date and check future
    //     const inputDate = new Date(date + "T00:00:00"); // consistent local date
    //     const today = new Date();
    //     today.setHours(0, 0, 0, 0);
    //     inputDate.setHours(0, 0, 0, 0);

    //     if (inputDate > today) {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "Date Of Birth must be old date",
    //       });
    //     }
    //   }),
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

export type TCandidateFormValues = z.infer<typeof candidateRegisterSchema>;
