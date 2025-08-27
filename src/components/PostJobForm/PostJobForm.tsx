/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LocationMap from "@/components/Location/LocationMap";
import CustomInput from "@/components/form/CustomInput";
import CustomQuilEditor from "@/components/form/CustomQuilEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createJobSchema } from "@/schema/job.schema";
import { tradeOptions } from "@/data/options";
import CustomTextArea from "../form/CustomTextArea";
import FormButton from "../form/FormButton";
import CustomSelect from "../form/CustomSelect";
import { experienceOptions, rateOptions, typeOptions } from "@/data/job.options";
import CustomDatePicker from "../form/CustomDatePicker";
import SalaryRange from "./SalaryRange";

type TFormValues = z.infer<typeof createJobSchema>;

const PostJobForm = () => {
  //useGetCategoriesQuery(undefined);
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>([
    51.5072, 0.1276,
  ]);

  // const { subscription_status } = useAppSelector((state) => state.subscription);
  //const [createJob, { isLoading, isSuccess }] = useCreateJobMutation();
  const isLoading = false;
  const [trade, setTrade] = useState("");
  const [subTrade, setSubTrade] = useState("");
  //const [subOptions, setSuboptions] = useState([]);


  const {
    handleSubmit,
    control,
    setValue,
    watch,
    clearErrors,
    setError
  } = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      latitude: "51.5072",
      longitude: "0.1276",
      address: "London, Greater London, England, United Kingdom",
      postalCode: "SW1A 2DX"
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

  // useEffect(() => {
  //   if (!isLoading && isSuccess) {
  //     reset();
  //   }
  // }, [isLoading, isSuccess, reset]);

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
    //createJob(finalValues);
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
            placeholder="e.g.Plumber – Domestic Installations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Trade Type
              </label>
              <div className="relative">
                <select
                  value={trade}
                  onChange={(e) => setTrade(e.target.value)}
                  className={`w-full px-3 py-2 border text-gray-700 disabled:bg-gray-200 rounded-md appearance-none focus:outline-none ${"border-gray-300 focus:border-blue-500"}`}
                >
                  <option value="">Select</option>
                  {tradeOptions?.map((option, index) => (
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
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Sub Trade Type
              </label>
              <div className="relative">
                <select
                  value={subTrade}
                  onChange={(e) => setSubTrade(e.target.value)}
                  className={`w-full px-3 py-2 border text-gray-700 disabled:bg-gray-200 rounded-md appearance-none focus:outline-none ${"border-gray-300 focus:border-blue-500"}`}
                >
                  <option value="">Select</option>
                  {tradeOptions?.map((option, index) => (
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
            </div>
            <CustomSelect
              label="Type"
              name="types"
              control={control}
              options={typeOptions}
            />
            <CustomSelect
              label="Experience"
              name="experience"
              control={control}
              options={experienceOptions}
            />
            <CustomDatePicker
              label="Start Date"
              name="start_date"
              control={control}
              placeholder="DD/MM/YYYY"
            />
            <CustomDatePicker
              label="End Date (Optional)"
              name="end_date"
              control={control}
              placeholder="DD/MM/YYYY"
            />
            <div className="col-span-2 space-y-3">
              <CustomTextArea
                label="Skills (technical or soft skills, Comma Separated)"
                name="skill"
                control={control}
                placeholder="e.g. Pipefitting, Boiler Servicing"
              />
              <CustomInput
                label="Benefits (Optional)"
                name="benefits"
                type="text"
                control={control}
                placeholder="Enter benfits"
              />
            </div>
            {/* <CustomInput
              label="Remuneration"
              name="salary"
              type="text"
              control={control}
              placeholder="e.g. 20$ - 40$"
            /> */}
            <div className="col-span-2 space-y-3">
              <CustomSelect
                label="Rate Type"
                name="rate"
                control={control}
                options={rateOptions}
              />
              <SalaryRange />
            </div>
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
              height={500}
            />
          </div>
          <div className="mt-6">
            <FormButton isLoading={isLoading}>Post Job</FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
