/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import Error from "@/components/validation/FormError";
import CustomSelect from "@/components/form/CustomSelect";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import { candidateProfessionalSchema } from "@/schema/candidate.schema";
import SubmitButton from "@/components/form/SubmitButton";
import {
  candidateExperienceOptions,
  workRateOptions,
  workTypeOptions,
} from "@/data/candidate.options";
import { useEffect, useState } from "react";
import { useGetCategoryDropDownQuery } from "@/redux/features/category/categoryApi";
import { useGetSubCategoryDropDownByCategoryIdQuery } from "@/redux/features/subCategory/subCategoryApi";
import { ICategory } from "@/types/category.type";
import checkEqualArray from "@/utils/checkEqualArray";
import { WarningToast } from "@/helper/ValidationHelper";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";

type TFormValues = z.infer<typeof candidateProfessionalSchema>;

const ProfessionalForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const { categoryOptions } = useAppSelector((state) => state.category);
  const [subCategoryOptions, setSubCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  useGetCategoryDropDownQuery(undefined);
  const initialAvailableDate =
    (user?.availableDate?.split("T")[0] as string) || "";
  const [updateProfile, { isLoading }] = useUpdateCandidateProfileMutation();
  const { handleSubmit, control, watch, setValue } = useForm({
    resolver: zodResolver(candidateProfessionalSchema),
    defaultValues: {
      categoryId: user.categoryId,
      subCategoryId: user.subCategoryId,
      availableDate: initialAvailableDate,
      workRate: user.workRate,
      workType: user.workType,
      experience: user.experience,
      title: user?.title?.length > 0 ? user?.title.join(", ") : "",
      jobSeekingTitle: user?.jobSeekingTitle?.length > 0 ? user?.jobSeekingTitle.join(", ") : "",
      skills: user?.skills?.length > 0 ? user?.skills.join(", ") : "",
    },
  });

  // Watch necessary fields
  const categoryId = watch("categoryId");
  const { data: subCategoryData } = useGetSubCategoryDropDownByCategoryIdQuery(
    categoryId,
    { skip: !categoryId }
  );

  useEffect(() => {
    if (!categoryId) {
      setSubCategoryOptions([]);
      return;
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

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));

    const finalValues: any = {};

    //check subCategoryId
    if (user.subCategoryId !== data.subCategoryId) {
      finalValues.subCategoryId = data.subCategoryId;
    }
    //check rate
    if (user.workRate !== data.workRate) {
      finalValues.workRate = data.workRate;
    }
    //check work type
    if (user.workType !== data.workType) {
      finalValues.workType = data.workType;
    }
    //check experience
    if (user.experience !== data.experience) {
      finalValues.experience = data.experience;
    }
    //check availabe date
    if (initialAvailableDate !== data.availableDate) {
      finalValues.availableDate = data.availableDate;
    }
    //check skills
    const currentSkills = data.skills?.split(",").map((s) => s.trim());
    if (!checkEqualArray(user.skills, currentSkills)) {
      finalValues.skills = currentSkills;
    }
    //check title
    const currentTitle = data.title?.split(",").map((s) => s.trim());
    if (!checkEqualArray(user.title, currentTitle)) {
      finalValues.title = currentTitle;
    }
    //check jobSeekingTitle
    const currentJobSeekingTitle = data.jobSeekingTitle?.split(",").map((s) => s.trim());
    if (!checkEqualArray(user.jobSeekingTitle, currentJobSeekingTitle)) {
      finalValues.jobSeekingTitle = currentJobSeekingTitle;
    }

    if (Object.keys(finalValues).length === 0) {
      WarningToast("No changes detected");
    } else {
      updateProfile(finalValues);
    }
  };

  return (
    <>
      <div className="mx-auto bg-white p-4 mb-8 mt-12 shadow-md rounded-md">
        <div className="">
          <p className="text-lg font-semibold mb-4">
            Update Professional Information
          </p>
          {ProfileError && <Error message={ProfileError} />}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg mt-4"
          >
            <div className="space-y-4">
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
              {/* <CustomSelect
                label="Category"
                name="categoryId"
                control={control}
                options={categoryOptions}
                blankOption={false}
                disabled={categoryOptions.length === 0}
              /> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>

                <Controller
                  control={control}
                  name="categoryId"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <div className="relative">
                        <select
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) => {
                            field.onChange(e); // ✅ update categoryId
                            setValue("subCategoryId", ""); // ✅ reset sub category
                          }}
                          className={`w-full px-3 py-2 border text-gray-700 rounded-md appearance-none focus:outline-none ${
                            error
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                        >
                          <option value="">Select category</option>
                          {categoryOptions?.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>

                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-600 text-sm mt-1">
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <CustomSelect
                label="Sub Category"
                name="subCategoryId"
                control={control}
                options={subCategoryOptions}
                disabled={subCategoryOptions.length === 0}
              />

              <CustomSelect
                label="Rate"
                name="workRate"
                control={control}
                options={workRateOptions}
                blankOption={false}
                placeholder="Select Rate"
              />
              <CustomSelect
                label="Experience"
                name="experience"
                control={control}
                blankOption={false}
                options={candidateExperienceOptions}
              />
              <CustomSelect
                label="Work Type"
                name="workType"
                control={control}
                options={workTypeOptions}
                blankOption={false}
                placeholder="Select Work Type"
              />
              <CustomInput
                label="Skills(multiple, comma separated)"
                name="skills"
                type="text"
                control={control}
                placeholder="Enter your skills"
              />
              <CustomDatePicker
                label="Available Date"
                name="availableDate"
                control={control}
                placeholder="DD/MM/YYYY"
              />
              <SubmitButton isLoading={isLoading}> Save Changes </SubmitButton>
            </div>
          </form>
        </div>
      </div>
      {/* <CVForm />
      <WorkExperienceList /> */}
    </>
  );
};

export default ProfessionalForm;
