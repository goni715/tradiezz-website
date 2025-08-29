"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "@/components/validation/Error";
import { candidateProfessionalSchema } from "@/schemas/candidate.schema";
import CustomSelect from "@/components/form/CustomSelect";
import {
  educationOptions,
  experienceOptions,
  typeOptions,
} from "@/data/job.options";
import CustomMultiSelect from "@/components/form/CustomMultiSelect";
import WorkExperienceList from "./WorkExperienceList";
import CVForm from "./CVForm";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomTextArea from "@/components/form/CustomTextArea";

type TFormValues = z.infer<typeof candidateProfessionalSchema>;

const ProfessionalForm = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateCandidateProfile, { isLoading }] =
    useUpdateCandidateProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(candidateProfessionalSchema),
    defaultValues: {
      job_title: user?.job_title?.length > 0 ? user?.job_title.join(", ") : "",
      job_seeking:
        user?.job_seeking?.length > 0 ? user?.job_seeking.join(", ") : "",
      education: user?.education === null ? "" : user?.education,
      experience: user?.experience === null ? "" : user?.experience,
      availability: user?.availability,
      skill: user?.skill?.length > 0 ? user?.skill.join(", ") : "",
      careerObjective: user?.careerObjective ? user?.careerObjective : "",
      availabil_date: user?.availabil_date
        ? user?.availabil_date.split("T")[0]
        : "",
    },
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));
    const formData = new FormData();
    const { job_title, job_seeking, skill, ...rest } = data;
    const finalValues = {
      ...rest,
      job_title: job_title.split(",").map((t) => t.trim()),
      job_seeking: job_seeking.split(",").map((s) => s.trim()),
      skill: skill.split(",").map((s) => s.trim()),
    };

    // Append to FormData
    Object.keys(finalValues).forEach((key) => {
      const value = finalValues[key as keyof typeof finalValues];

      // If value is array or object, stringify it
      if (Array.isArray(value) || typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    updateCandidateProfile(formData);
  };

  return (
    <>
      <div className="mx-auto bg-white p-4 mb-8 mt-12 shadow-md rounded-md">
        <div className="">
          <p className="text-lg font-semibold mb-4">Update Professional Information</p>
          {ProfileError && <Error message={ProfileError} />}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg mt-4"
          >
            <div className="space-y-4">
              <CustomInput
                label="Job Title(multiple, comma separated)"
                name="job_title"
                type="text"
                control={control}
                placeholder="e.g.Manufacturing Associate, Process Technician"
              />

              <CustomInput
                label="Job Seeking Title(multiple, comma separated)"
                name="job_seeking"
                type="text"
                control={control}
                placeholder="Enter title"
              />
              <CustomSelect
                label="Education"
                name="education"
                control={control}
                options={educationOptions}
              />
              <CustomSelect
                label="Experience"
                name="experience"
                control={control}
                options={experienceOptions}
              />

              <CustomMultiSelect
                name="availability"
                label="Availability"
                control={control}
                options={typeOptions}
              />

              <CustomInput
                label="Skills(multiple, comma separated)"
                name="skill"
                type="text"
                control={control}
                placeholder="Enter your skills"
              />
              <CustomDatePicker
                label="Available Date"
                name="availabil_date"
                control={control}
                placeholder="DD/MM/YYYY"
              />

              <CustomTextArea
                label="Career Objective"
                name="careerObjective"
                control={control}
                placeholder="write here..."
                rows={3}
              />

              <button
                type="submit"
                className="px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <CVForm />
      <WorkExperienceList />
    </>
  );
};

export default ProfessionalForm;
