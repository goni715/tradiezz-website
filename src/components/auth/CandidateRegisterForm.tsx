"use client";
import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../form/CustomInput";
import CustomSelect from "../form/CustomSelect";
import CustomDatePicker from "../form/CustomDatePicker";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useGetCategoryDropDownQuery } from "@/redux/features/category/categoryApi";
import { useGetSubCategoryDropDownByCategoryIdQuery } from "@/redux/features/subCategory/subCategoryApi";
import { ICategory } from "@/types/category.type";

import {
  candidateExperienceOptions,
  employmentTypeOptions,
  workRateOptions,
  workTypeOptions,
} from "@/data/candidate.options";
import {
  candidateRegisterSchema,
  TCandidateFormValues,
} from "@/schema/candidate.schema";
import findLabel from "@/utils/findLabel";
import { useRegisterCandidateMutation } from "@/redux/features/auth/authApi";
import CustomButton from "../form/CustomButton";
import { TLocation } from "@/components/Location/MapSelector";
// Dynamically import the map component to avoid SSR issues
const MapSelector = dynamic(() => import("@/components/Location/MapSelector"), {
  ssr: false,
});

// Define the steps and the fields within each step for validation purposes
const stepFields: Record<number, (keyof TCandidateFormValues)[]> = {
  1: ["fullName", "email", "phone", "password", "confirmPassword"],
  2: [
    "title",
    "jobSeekingTitle",
    "categoryId",
    "subCategoryId",
    "workRate",
    "availableDate",
    "workType",
    "employmentType",
  ],
  3: ["location"],
  4: ["skills", "experience"],
  5: [], // Review step, no new fields to validate
};

const CandidateRegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [subCategoryOptions, setSubCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const { categoryOptions } = useAppSelector((state) => state.category);
  useGetCategoryDropDownQuery(undefined);
  const [registerCandidate, { isLoading, isSuccess }] =
    useRegisterCandidateMutation();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    trigger,
    getValues,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<TCandidateFormValues>({
    resolver: zodResolver(candidateRegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      title: "",
      jobSeekingTitle: "",
      categoryId: "",
      subCategoryId: "",
      workRate: "",
      availableDate: "",
      workType: "",
      employmentType: "",
      location: undefined,
      skills: [],
      experience: "",
    },
    mode: "onBlur",
  });


  // Watch necessary fields
  const categoryId = watch("categoryId");
  const watchedSkills = watch("skills");
  const watchedLocation = watch("location");
  const { data: subCategoryData } = useGetSubCategoryDropDownByCategoryIdQuery(
    categoryId,
    { skip: !categoryId }
  );

  useEffect(() => {
    if (!categoryId) {
      setSubCategoryOptions([]);
      return;
    }

    if (categoryId) {
      setValue("subCategoryId", "");
    }

    if (subCategoryData && subCategoryData.data) {
      setSubCategoryOptions(
        subCategoryData.data.map((c: ICategory) => ({
          value: c._id,
          label: c.name,
        }))
      );
    }
  }, [subCategoryData, categoryId, setValue]);

  const totalSteps = 5;

  const nextStep = useCallback(async () => {
    const fieldsToValidate = stepFields[currentStep];

    const isValid = await trigger(fieldsToValidate, {
      shouldFocus: true,
    });

    // 🔴 STOP HERE if normal validation fails
    if (!isValid) return;

    // 🔥 STEP 1 password check
    if (currentStep === 1) {
      const password = getValues("password");
      const confirmPassword = getValues("confirmPassword");

      if (password !== confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [currentStep, trigger, getValues, setError]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  //if success
  useEffect(() => {
    if (isSuccess) {
      router.push("/verify-account-otp");
    }
  }, [isSuccess, router]);

  const onSubmit: SubmitHandler<TCandidateFormValues> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { location, categoryId, title, jobSeekingTitle, ...rest } = data;
    const finalValues = {
      ...rest,
      longitude: location.lng,
      latitude: location.lat,
      address: location.address,
      title: title.split(",").map((t) => t.trim()),
      jobSeekingTitle: jobSeekingTitle.split(",").map((s) => s.trim()),
      city: location.city,
      postalCode: location.postalCode,
    };

    registerCandidate(finalValues);
  };

  const handleSubmitFinal = async () => {
    // Manually trigger validation for all fields on the final step/submit attempt
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    } else {
      // // Find the step with the first error and navigate to it
      // const allFields = Object.keys(stepFields) as (keyof TStepperFormValues)[]
      // for(let step = 1; step < totalSteps; step++) {
      //     const stepHasError = stepFields[step].some(field => errors[field])
      //     if(stepHasError) {
      //         setCurrentStep(step)
      //         break
      //     }
      // }
    }
  };

  const addSkill = (skill: string) => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !watchedSkills.includes(trimmedSkill)) {
      const newSkills = [...watchedSkills, trimmedSkill];
      setValue("skills", newSkills, { shouldValidate: true });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const newSkills = watchedSkills.filter((skill) => skill !== skillToRemove);
    setValue("skills", newSkills, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step < currentStep
                    ? "bg-accent text-accent-foreground"
                    : step === currentStep
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              {step < totalSteps && (
                <div
                  className={`w-full h-1 mx-2 transition-colors ${
                    step < currentStep ? "bg-accent" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        {/* Form Card */}
        <div className="bg-card rounded-lg shadow-sm p-4">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">
                Basic Information
              </h2>
              <CustomInput
                label="Full Name"
                name="fullName"
                type="text"
                control={control}
                placeholder="Enter your full name"
              />
              <CustomInput
                label="Email Address"
                name="email"
                type="text"
                control={control}
                placeholder="Enter your email address"
              />
              <CustomInput
                label="Phone Number(only UK)"
                name="phone"
                type="text"
                control={control}
                placeholder="e.g., +44 20 1234 5678 or 020 1234 5678"
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                control={control}
                placeholder="Create a password"
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                control={control}
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Step 2: Category Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <CustomInput
                label="Title(multiple, comma separated)"
                name="title"
                type="text"
                control={control}
                placeholder="e.g.Manufacturing Associate, Process Technician"
              />

              <CustomInput
                label="Job Seeking Title(multiple, comma separated)"
                name="jobSeekingTitle"
                type="text"
                control={control}
                placeholder="Enter title"
              />
              <CustomSelect
                label="Category"
                name="categoryId"
                control={control}
                options={categoryOptions}
                placeholder="Select Category"
                disabled={categoryOptions.length === 0}
              />

              <CustomSelect
                label="Sub Category"
                name="subCategoryId"
                control={control}
                options={subCategoryOptions}
                placeholder="Select sub-category"
                disabled={subCategoryOptions.length === 0}
              />

              <CustomSelect
                label="Rate"
                name="workRate"
                control={control}
                options={workRateOptions}
                placeholder="Select Rate"
              />
              <CustomDatePicker
                label="Available Date"
                name="availableDate"
                control={control}
              />

              <CustomSelect
                label="Work Type"
                name="workType"
                control={control}
                options={workTypeOptions}
                placeholder="Select Work Type"
              />

              <CustomSelect
                label="Employment Type"
                name="employmentType"
                control={control}
                options={employmentTypeOptions}
                placeholder="Select Employment Type"
              />
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">
                Location
              </h2>

              <p className="text-muted-foreground mb-4">
                Click on the map to select your location
              </p>

              <div className="h-96 border rounded-lg overflow-hidden">
                <MapSelector
                  onLocationSelect={(location: TLocation) => {
                    setValue("location", location, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                  selectedLocation={watchedLocation ?? null}
                />
              </div>

              {watchedLocation && (
                <div className="p-4 bg-muted rounded-lg space-y-1">
                  {watchedLocation.postalCode && (
                    <p className="text-sm text-muted-foreground">
                      Postcode: {watchedLocation.postalCode}
                    </p>
                  )}
                </div>
              )}

              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
          )}

          {/* Step 4: Skills & Experience */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">
                Skills & Experience
              </h2>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Skills
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Add a skill and press Enter"
                    id="skillInput"
                    className="flex-1 px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill(e.currentTarget.value);
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById(
                        "skillInput"
                      ) as HTMLInputElement;
                      addSkill(input.value);
                      input.value = "";
                    }}
                    className="px-6 py-3 bg-primary text-white cursor-pointer rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {watchedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:bg-accent-foreground/20 cursor-pointer rounded-full p-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {errors.skills && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.skills.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Experience Level
                </label>
                <CustomSelect
                  label=""
                  name="experience"
                  control={control}
                  options={candidateExperienceOptions}
                  placeholder="Select your experience level"
                />
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">
                Review Your Information
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-card-foreground mb-2">
                    Basic Information
                  </h3>
                  <p>
                    <strong>Name:</strong> {getValues("fullName")}
                  </p>
                  <p>
                    <strong>Email:</strong> {getValues("email")}
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-card-foreground mb-2">
                    Professional Details
                  </h3>
                  <p>
                    <strong>Category:</strong>{" "}
                    {findLabel(categoryOptions, getValues("categoryId"))}
                  </p>
                  <p>
                    <strong>Sub-Category:</strong>{" "}
                    {findLabel(subCategoryOptions, getValues("subCategoryId"))}
                  </p>
                  <p>
                    <strong>Rate:</strong>{" "}
                    {findLabel(workRateOptions, getValues("workRate"))}
                  </p>
                  <p>
                    <strong>Work Type:</strong>{" "}
                    {findLabel(workTypeOptions, getValues("workType"))}
                  </p>
                  <p>
                    <strong>Employment Type:</strong>{" "}
                    {findLabel(
                      employmentTypeOptions,
                      getValues("employmentType")
                    )}
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-black mb-2">Location</h3>
                  <p>{watchedLocation?.address}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-card-foreground mb-2">
                    Skills & Experience
                  </h3>
                  <p>
                    <strong>Skills:</strong> {watchedSkills.join(", ")}
                  </p>
                  <p>
                    <strong>Experience:</strong>{" "}
                    {findLabel(
                      candidateExperienceOptions,
                      getValues("experience")
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2 bg-brand-color text-secondary-foreground rounded-lg cursor-pointer hover:bg-brand-color/90 text-white disabled:opacity-90 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 transition-colors"
              >
                Next
              </button>
            ) : (
              <CustomButton
                onClick={handleSubmitFinal}
                isLoading={isLoading}
                className="w-auto"
              >
                Submit
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CandidateRegisterForm;
