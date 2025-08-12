/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LocationMap from "@/components/Location/LocationMap";
import CustomDatePicker from "@/components/form/CustomDatePicker";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import CustomTextArea from "@/components/form/CustomTextArea";
import CustomQuilEditor from "@/components/form/CustomQuilEditor";
import {
  educationOptions,
  experienceOptions,
  patternOptions,
  rateOptions,
  typeOptions,
} from "@/data/job.options";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useCreateJobMutation } from "@/redux/features/job/jobApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { createJobSchema } from "@/schemas/job.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { z } from "zod";
// import { ErrorToast } from "@/helper/ValidationHelper";

type TFormValues = z.infer<typeof createJobSchema>;

const PostJobForm = () => {
  useGetCategoriesQuery(undefined);
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>([
    51.5072, 0.1276,
  ]);

  const { categoryOptions } = useAppSelector((state) => state.category);
  // const { subscription_status } = useAppSelector((state) => state.subscription);
  const [createJob, { isLoading, isSuccess }] = useCreateJobMutation();

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      latitude: "51.5072",
      longitude: "0.1276",
    },
  });

  const salary = watch("salary");
  const rate = watch("rate");

  useEffect(() => {
    if (salary && !rate) {
      setError("rate", {
        type: "manual",
        message: "Rate is required when salary is provided",
      });
    } else {
      clearErrors("rate");
    }
  }, [salary, rate, setError, clearErrors]);

  useEffect(() => {
    if (!salary || salary === "") {
      setValue("rate", "");
    }
  }, [salary, setValue]);

  const isRateDisabled = !salary || salary === "" || Boolean(errors?.salary);

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
    const { skill, salary, rate, longitude, latitude, ...rest } = data;
    const finalValues: any = {
      ...rest,
      skill: skill.split(",").map((s) => s.trim()),
      location: {
        longitude,
        latitude,
      },
    };

    if (salary && rate) {
      finalValues.salary = salary;
      finalValues.rate = rate;
    }

    // if (subscription_status?.subscription_status === "None") {
    //   ErrorToast("You have no subscription");
    // } else {
    createJob(finalValues);
    // }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-6xl mx-auto p-4 sm:p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post a job</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-4 py-6 rounded-md space-y-4"
        >
          <CustomInput
            label="Job Title"
            name="title"
            type="text"
            control={control}
            placeholder="e.g. CNC Machinist, Maintenance Engineer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelect
              label="Type"
              name="types"
              control={control}
              options={typeOptions}
            />
            <CustomSelect
              label="Category"
              name="category"
              control={control}
              options={categoryOptions}
            />
          </div>

          <div className="mt-8 mb-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Advance Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
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
              <div className="col-span-2">
                <CustomTextArea
                  label="Skills (technical or soft skills, Comma Separated)"
                  name="skill"
                  control={control}
                  placeholder="e.g. CNC Programming, TIG Welding"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomInput
                label="Salary(Optional)"
                name="salary"
                type="text"
                control={control}
                placeholder="e.g. 400"
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              <CustomSelect
                label="Rate"
                name="rate"
                control={control}
                options={rateOptions}
                disabled={isRateDisabled}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <CustomInput
                label="Vacancy"
                name="vacancies"
                type="text"
                control={control}
                placeholder="Enter vacancy"
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              <CustomDatePicker
                label="Expiration Date"
                name="application_dateline"
                control={control}
                placeholder="DD/MM/YYYY"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <CustomSelect
                label="Job Pattern"
                name="job_pattern"
                control={control}
                options={patternOptions}
              />
              <CustomInput
                label="Address"
                name="address"
                type="text"
                control={control}
                placeholder="Enter address"
              />
              <CustomInput
                label="Postal Code"
                name="postalCode"
                type="text"
                control={control}
                placeholder="Enter postal code"
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
              name="descriptions"
              control={control}
              height={300}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center cursor-pointer justify-center gap-2 bg-primary text-white py-2 rounded-md hover:bg-dis transition disabled:bg-gray-800 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinnerTwo className="animate-spin" fontSize={16} />
                  Processing...
                </>
              ) : (
                "Post Job"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
