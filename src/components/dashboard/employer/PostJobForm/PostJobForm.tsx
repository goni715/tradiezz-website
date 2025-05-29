/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Map } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [selectedLocation, setSelectedLocation] = useState();


  const typeOptions = [
    "Short Term Job",
    "Contract Based",
    "Hourly"
  ];

  const educationOptions = [
    "GCSE or equivalent",
    "Apprenticeship",
    "HNC/HND",
    "Degree",
    "Other",
  ];

  const experienceOptions = [
    "Entry Level",
    "1-2 years",
    "2-4 years",
    "5-6 years",
    "10+ years",
  ];

  const patternOptions = [
    "Day Shift",
    "Evening Shift",
    "Days",
    "Hours",
    "Flexibility",
  ];

  const rateOptions = [
    "Per Hour",
    "Per Day",
    "Per Year"
  ];


    // Handle location selection from map
    const handleLocationSelect = (location: any) => {
      setSelectedLocation(location);
      // setValue('latitude', location[0].toFixed(6));
      // setValue('longitude', location[1].toFixed(6));
    };

  return (
    <>
      <div className="flex-1 overflow-auto">
        <div className="max-6xl mx-auto p-4 sm:p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post a job</h1>
          <form
            // onSubmit={handleSubmit}
            className="bg-white px-4 py-6 rounded-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="e.g. CNC Machinist, Maintenance Engineer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                    <option value="">Select type</option>
                    {typeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                    <option value="">Select Category</option>
                    {/* {categoryOptions?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))} */}
                    <option>Electrician</option>
                    <option value="">Plumber</option>
                    <option value="">Welder</option>
                    <option value="">Painter</option>
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
            </div>

            <div className="mt-8 mb-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Advance Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Education
                    </label>
                    <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select Category</option>
                        {educationOptions?.map((option) => (
                          <option key={option} value={option}>
                            {option}
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
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Exprience
                    </label>
                    <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select experience</option>
                        {experienceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
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
                </div>
                <div className="mb-4 col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills (technical or soft skills, Comma Separated)
                  </label>
                  <textarea
                    placeholder="e.g. CNC Programming, TIG Welding"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Salary(Optional)
                    </label>
                    <input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="e.g. 400"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rate
                    </label>
                    <div className="relative">
                      <select disabled={!salary} className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md disabled:bg-gray-400 appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select rate</option>
                        {rateOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
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
                 
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vacancies
                  </label>
                  <input
                    type="number"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="DD/MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Pattern
                    </label>
                    <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select pattern</option>
                        {patternOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
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
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="enter address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="order-1 lg:order-2 h-[350px] lg:h-[500px] mb-6">
              <MapComponent
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />
            </div> */}

            <div className="mb-6">
              <label
                htmlFor="company-details"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <div className="">
                <textarea
                  id="company-details"
                  rows={3}
                  placeholder="write a description about the job..."
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md cursor-pointer"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJobForm;
