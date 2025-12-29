import z from "zod";


export const isEditorContentEmpty = (html: string) => {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent?.trim() === "";
};

export const createJobSchema = z
  .object({
    title: z
      .string({
        invalid_type_error: "Title must be string",
        required_error: "Title is required",
      })
      .trim()
      .min(1, "Title is required"),
    categoryId: z
      .string({
        invalid_type_error: "Category must be string",
        required_error: "Select a category",
      })
      .trim()
      .min(1, "Select a category"),
    experience: z
      .string({
        invalid_type_error: "Experience must be string",
        required_error: "Select experience",
      })
      .trim()
      .min(1, "Select experience"),
    jobType: z
      .string({
        invalid_type_error: "type must be string",
        required_error: "Select job type",
      })
      .trim()
      .min(1, "Select job type"),
    skills: z
      .string({
        invalid_type_error: "Skill must be string",
        required_error: "Provide at least one skill",
      })
      .trim()
      .regex(/^([^,\n]+)(,\s*[^,\n]+)*$/, {
        message: "Please enter valid comma-separated skills",
      }),
    rateType: z
      .string({
        invalid_type_error: "rate must be string",
        required_error: "Select rate",
      })
      .trim()
      .min(1, { message: "Select rate" }),
    startDate: z
      .string({
        required_error: "Select start date",
      })
      .trim()
      .min(1, { message: "Select start date" })
      .superRefine((date, ctx) => {
        // 2️⃣ Parse date and check future
        const inputDate = new Date(date + "T00:00:00"); // consistent local date
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        inputDate.setHours(0, 0, 0, 0);

        if (inputDate < today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Start Date must be today or a future date",
          });
        }
      }),
    endDate: z
      .string({
        required_error: "endDate is required",
      })
      .trim()
      .superRefine((date, ctx) => {
        const formatRegex = /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

        // Parse date and check future
        if (formatRegex.test(date)) {
          const inputDate = new Date(date + "T00:00:00"); // consistent local date
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          inputDate.setHours(0, 0, 0, 0);

          if (inputDate < today) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "End Date must be today or a future date",
            });
          }
        }
      })
      .optional(),
    deadline: z
      .string({
        required_error: "Select deadline",
      })
      .trim()
      .min(1, "Select deadline")
      .superRefine((date, ctx) => {
        // Parse date and check future
        const inputDate = new Date(date + "T00:00:00"); // consistent local date
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        inputDate.setHours(0, 0, 0, 0);

        if (inputDate < today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Deadline must be today or a future date",
          });
        }
      }),
    address: z
      .string({
        invalid_type_error: "Address must be string",
        required_error: "Address is required",
      })
      .trim()
      .min(1, "Address is required"),
    benefits: z
      .string()
      .trim()
      .optional(),
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
    postalCode: z
      .string({
        invalid_type_error: "Postal code must be string",
        required_error: "Postal code is required",
      })
      .trim()
      .optional(),
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
    minRange: z
      .string({
        required_error: "Enter minimum range",
      })
      .min(1, "Enter minimum range")
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), { message: "Minimum Range must be a valid number" })
      .refine((val) => val > 0, { message: "Minimum range must be greater than 0" }),
    maxRange: z
      .string({
        required_error: "Enter maximum range",
      })
      .min(1, "Enter maximum range")
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), { message: "Maximum Range must be a valid number" })
      .refine((val) => val > 0, { message: "Maximum range must be greater than 0" }),
  })
   .superRefine((values, ctx) => {
        const { startDate, endDate, minRange, maxRange } = values;
        if (startDate && endDate) {
            // Compare dates only if both are valid
            const StartDate = new Date(startDate);
            const EndDate = new Date(endDate);

            if (StartDate > EndDate) {
                ctx.addIssue({
                    path: ["startDate"],
                    message: "Start date must be before end date",
                    code: z.ZodIssueCode.custom,
                });

                ctx.addIssue({
                    path: ["endDate"],
                    message: "End date must be after start date",
                    code: z.ZodIssueCode.custom,
                });
                return;
            }
        }

        if (minRange && maxRange) {
            if (minRange >= maxRange) {
                ctx.addIssue({
                    path: ["minRange"],
                    message: "Minimum range must be less than maximum range",
                    code: z.ZodIssueCode.custom,
                });

                ctx.addIssue({
                    path: ["maxRange"],
                    message: "Maximum range must be greater than minimum range",
                    code: z.ZodIssueCode.custom,
                });
            }
        }
    });


export const applyJobSchema = z.object({
  icon: z
    .string({
      invalid_type_error: "Resume must be File",
      required_error: "Please upload a resume",
    })
    .min(1, "Please upload a resume")
    .trim(),
});