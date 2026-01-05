"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import Error from "@/components/validation/FormError";
import CustomSelect from "@/components/form/CustomSelect";
import { educationOptions } from "@/data/job.options";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomTextArea from "@/components/form/CustomTextArea";
import { candidateProfessionalSchema } from "@/schema/candidate.schema";
import SubmitButton from "@/components/form/SubmitButton";
import { candidateExperienceOptions } from "@/data/candidate.options";
import { useEffect, useState } from "react";
import { useGetCategoryDropDownQuery } from "@/redux/features/category/categoryApi";
import { useGetSubCategoryDropDownByCategoryIdQuery } from "@/redux/features/subCategory/subCategoryApi";
import { ICategory } from "@/types/category.type";

type TFormValues = z.infer<typeof candidateProfessionalSchema>;

const ProfessionalForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const isLoading = false;
  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const { categoryOptions } = useAppSelector((state) => state.category);
  const [subCategoryOptions, setSubCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  useGetCategoryDropDownQuery(undefined);
  const initialAvailableDate = user?.availableDate?.split('T')[0] as string || "";

  // const [updateCandidateProfile, { isLoading }] =
  //   useUpdateCandidateProfileMutation();
  const { handleSubmit, control, watch, setValue } = useForm({
    resolver: zodResolver(candidateProfessionalSchema),
    defaultValues: {
      categoryId: user.categoryId,
      subCategoryId: user.subCategoryId,
      availableDate: initialAvailableDate
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
    console.log(data);
    //updateCandidateProfile(formData);
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
              {/* <CustomInput
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
              /> */}
              <CustomSelect
                label="Category"
                name="categoryId"
                control={control}
                options={categoryOptions}
                blankOption={false}
                disabled={categoryOptions.length === 0}
              />
              <CustomSelect
                label="Sub Category"
                name="subCategoryId"
                control={control}
                options={subCategoryOptions}
                blankOption={false}
                disabled={subCategoryOptions.length === 0}
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
                options={candidateExperienceOptions}
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
                name="availableDate"
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
