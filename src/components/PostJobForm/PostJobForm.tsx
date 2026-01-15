/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LocationMap from "@/components/Location/LocationMap";
import CustomInput from "@/components/form/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createJobSchema } from "@/schema/job.schema";
import CustomTextArea from "../form/CustomTextArea";
import CustomSelect from "../form/CustomSelect";
import {
  experienceOptions,
  rateOptions,
  typeOptions,
} from "@/data/job.options";
import CustomDatePicker from "../form/CustomDatePicker";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useGetCategoryDropDownQuery } from "@/redux/features/category/categoryApi";
import CustomQuilEditor from "@/components/form/CustomQuilEditor";
import { useCreateJobMutation } from "@/redux/features/job/jobApi";
import { useRouter } from "next/navigation";
import { WarningToast } from "@/helper/ValidationHelper";
import SubmitButton from "../form/SubmitButton";

type TFormValues = z.infer<typeof createJobSchema>;

const PostJobForm = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>([
    51.5072, 0.1276,
  ]);
  // const { subscription_status } = useAppSelector((state) => state.subscription);
  const [createJob, { isLoading, isSuccess }] = useCreateJobMutation();
  useGetCategoryDropDownQuery(undefined);
  const { categoryOptions } = useAppSelector((state) => state.category);
  const { isActive } = useAppSelector((state) => state.subscription);

  const { handleSubmit, control, setValue, watch } = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      latitude: "51.5072",
      longitude: "0.1276",
      address: "London, Greater London, England, United Kingdom",
      postalCode: "SW1A 2DX",
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
      router.push("/dashboard/employer/my-jobs");
    }
  }, [isLoading, isSuccess, router]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const { skills, ...rest } = data;
    const finalValues: any = {
      ...rest,
      skills: skills.split(",").map((s) => s.trim()),
    };

    createJob(finalValues);

    // if (subscription_status?.subscription_status === "None") {
    //   ErrorToast("You have no subscription");
    // } else {
    //createJob(finalValues);
    // }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto p-4 sm:p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post a job</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full px-4 py-6 rounded-md space-y-4"
        >
          <CustomInput
            label="Job Title"
            name="title"
            type="text"
            control={control}
            placeholder="e.g.Plumber – Domestic Installations"
          />
          <div className="test space-y-4">
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
            <div className="space-y-3">
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
                placeholder="Enter benefits"
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
                <SubmitButton isLoading={isLoading}>Post Job</SubmitButton>
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
                  Post Job
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
