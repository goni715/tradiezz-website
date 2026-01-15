/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import LocationMap, { LatLngTuple } from "@/components/Location/LocationMap";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import CustomTextArea from "@/components/form/CustomTextArea";
import {
  experienceOptions,
  rateOptions,
  typeOptions,
} from "@/data/job.options";
import { useUpdateJobMutation } from "@/redux/features/job/jobApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import {
  IMyJob,
  TJobExperience,
  TJobRateType,
  TJobType,
} from "@/types/job.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomQuilEditor from "../form/CustomQuilEditor";
import { createJobSchema } from "@/schema/job.schema";
import { useGetCategoryDropDownQuery } from "@/redux/features/category/categoryApi";
import SubmitButton from "../form/SubmitButton";
import z from "zod";
import checkEqualArray from "@/utils/checkEqualArray";
import { WarningToast } from "@/helper/ValidationHelper";
import { useRouter } from "next/navigation";

type TProps = {
  job: IMyJob;
};

type TFormValues = z.infer<typeof createJobSchema>;

const EditJobForm = ({ job }: TProps) => {
  const coordinates = job?.coordinates ?? [0, 0];
  const initialLongitude = coordinates[0];
  const initialLatitude = coordinates[1];
  const initialSkills: string = job?.skills?.join(", ");
  const initialStartDate = job?.startDate?.split("T")[0] || "";
  const initialEndDate = job?.endDate ? job?.endDate?.split("T")[0] : "";
  const initialDeadline = job?.deadline?.split("T")[0] || "";

  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    initialLatitude,
    initialLongitude,
  ]);

  useGetCategoryDropDownQuery(undefined);
  const { categoryOptions } = useAppSelector((state) => state.category);
  const [updateJob, { isLoading, isSuccess }] = useUpdateJobMutation();
  const { isActive } = useAppSelector((state) => state.subscription);
  const router = useRouter();

  const { handleSubmit, control, setValue, watch, reset } = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: job?.title,
      categoryId: job?.categoryId,
      experience: job?.experience,
      skills: initialSkills,
      jobType: job?.jobType,
      rateType: job?.rateType,
      startDate: initialStartDate,
      endDate: initialEndDate,
      deadline: initialDeadline,
      address: job?.address,
      postalCode: job?.postalCode,
      description: job?.description,
      benefits: job?.benefits,
      latitude: initialLatitude.toString(),
      longitude: initialLongitude.toString(),
      minRange: String(job.minRange),
      maxRange: String(job.maxRange),
    },
  });

  const latitude = watch("latitude");
  const longitude = watch("longitude");

  useEffect(() => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  const handleLocationSelect = (
    location: [number, number],
    address?: string,
    postalCode?: string
  ) => {
    setSelectedLocation(location);
    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
    if (address) setValue("address", address);
    if (postalCode) setValue("postalCode", postalCode);
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      reset();
    }
  }, [isLoading, isSuccess, reset]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const finalValues: Partial<IMyJob> = {};

    //check title
    if (job.title !== data.title) {
      finalValues.title = data.title;
    }
    //check categoryId
    if (job.categoryId !== data.categoryId) {
      finalValues.categoryId = data.categoryId;
    }
    //check jobType
    if (job.jobType !== data.jobType) {
      finalValues.jobType = data.jobType as TJobType;
    }
    //check experience
    if (job.experience !== data.experience) {
      finalValues.experience = data.experience as TJobExperience;
    }
    //check startDate
    if (initialStartDate !== data.startDate) {
      finalValues.startDate = data.startDate;
    }
    //check endDate
    if (initialEndDate !== data.endDate) {
      finalValues.endDate = data.endDate;
    }
    //check deadline
    if (initialDeadline !== data.deadline) {
      finalValues.deadline = data.deadline;
    }
    //check skills
    const currentSkills = data.skills?.split(",").map((s) => s.trim());
    if (!checkEqualArray(job.skills, currentSkills)) {
      finalValues.skills = currentSkills;
    }
    //check benefits
    if (job.benefits !== data.benefits) {
      finalValues.benefits = data.benefits;
    }
    //check rateType
    if (job.rateType !== data.rateType) {
      finalValues.rateType = data.rateType as TJobRateType;
    }
    //check minRange
    if (job.minRange !== data.minRange) {
      finalValues.minRange = data.minRange;
    }
    //check maxRange
    if (job.maxRange !== data.maxRange) {
      finalValues.maxRange = data.maxRange;
    }
    //check address & postalCode
    if (job.address !== data.address && job.postalCode !== data.postalCode) {
      finalValues.address = data.address;
      finalValues.postalCode = data.postalCode;
      finalValues.longitude = data.longitude;
      finalValues.latitude = data.latitude;
    }
    if (job.description !== data.description) {
      finalValues.description = data.description;
    }

    if (Object.keys(finalValues).length === 0) {
      WarningToast(
        "No changes detected. Please update at least one field before saving."
      );
    } else {
      updateJob({
        id: job._id,
        data: finalValues,
      });
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-6xl mx-auto p-4 sm:p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit job</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-4 py-6 rounded-md space-y-4"
        >
          <CustomInput
            label="Job Title"
            name="title"
            type="text"
            control={control}
            placeholder="e.g.Plumber – Domestic Installations"
          />
          <div className="space-y-4">
            <div className="">
              <CustomSelect
                label="Category"
                name="categoryId"
                control={control}
                options={categoryOptions}
                disabled={categoryOptions.length === 0}
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <CustomSelect
                label="Job Type"
                name="jobType"
                control={control}
                options={typeOptions}
              />
              <CustomSelect
                label="Experience"
                name="experience"
                control={control}
                options={experienceOptions}
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <CustomDatePicker
                label="Start Date"
                name="startDate"
                control={control}
                placeholder="DD/MM/YYYY"
              />
              <CustomDatePicker
                label="End Date (Optional)"
                name="endDate"
                control={control}
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="col-span-2 space-y-3">
              <CustomTextArea
                label="Skills (technical or soft skills, Comma Separated)"
                name="skills"
                control={control}
                placeholder="e.g. Pipefitting, Boiler Servicing"
              />
              <CustomInput
                label="Benefits (Optional)"
                name="benefits"
                type="text"
                control={control}
                placeholder="Enter benifits"
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <CustomDatePicker
                label="Deadline"
                name="deadline"
                control={control}
                placeholder="DD/MM/YYYY"
              />
              <CustomSelect
                label="Rate Type"
                name="rateType"
                control={control}
                options={rateOptions}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <h1 className="font-semibold">Salary Range</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  label="Min Range(£)"
                  name="minRange"
                  type="text"
                  control={control}
                  placeholder="enter value"
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                <CustomInput
                  label="Max Range(£)"
                  name="maxRange"
                  type="text"
                  control={control}
                  placeholder="enter value"
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <CustomInput
                label="Address"
                name="address"
                type="text"
                control={control}
                placeholder="Enter address"
                disabled
              />
              <CustomInput
                label="Postal Code"
                name="postalCode"
                type="text"
                control={control}
                placeholder="Enter postal code"
                disabled
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
            <LocationMap
              onLocationSelect={handleLocationSelect}
              selectedLocation={selectedLocation}
            />
          </div>

          <div className="mb-6">
            <CustomQuilEditor
              label="Description"
              name="description"
              control={control}
              height={500}
            />
          </div>
          <div className="mt-6">
            {isActive ? (
              <>
                <SubmitButton isLoading={isLoading}>Save Changes</SubmitButton>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    WarningToast("You have no subscription");
                    router.push("/dashboard/employer/subscription-plans");
                  }}
                  className="w-full flex items-center cursor-pointer justify-center gap-2 bg-primary text-white py-2 rounded-md hover:bg-dis transition disabled:bg-gray-800 disabled:cursor-not-allowed"
                >
                  Save Changes
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobForm;
