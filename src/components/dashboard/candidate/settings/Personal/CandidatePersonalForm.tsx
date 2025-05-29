"use client";
import { Upload } from "lucide-react";
import CVForm from "./CVForm";
import WorkExperienceForm from "./WorkExperience/WorkExperienceForm";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";

const CandidatePersonalForm = () => {
  //const [checked, setChecked] = useState(false);

  //const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //const { name,checked } = e.target;
  // setFormData(prev => ({ ...prev, [name]: checked }));
  //setChecked(!checked);
  //};

  return (
    <>
      <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="mb-4">
                  <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-900 text-center">
                  Browse photo or drop here
                </p>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  A photo larger than 400 pixels work best. Max photo size 5 MB.
                </p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full name
                </label>
                <input
                  id="fullname"
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Current Job Title
                </label>
                <input
                  id="title"
                  placeholder="Enter title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-blue-500 appearance-none">
                  <option disabled>Select...</option>
                  <option value="entry">Entry Level</option>
                  <option value="junior">Junior (1-3 years)</option>
                  <option value="mid">Mid-Level (3-5 years)</option>
                  <option value="senior">Senior (5+ years)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-blue-500 appearance-none">
                  <option disabled>Select...</option>
                  <option value="highschool">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor &apos s Degree</option>
                  <option value="master">Master&aposs Degree</option>
                  <option value="phd">PhD</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-gray-600 focus:ring-blue-500 appearance-none">
                  <option>Select Type</option>
                  <option>Part Time</option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                  <option>Temporary</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 mt-8">
            <SectionTitle
              title="Legal Information"
              subtitle="Please confirm the following"
            />

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    //checked={checked}
                    //onChange
                    required
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="right" className="font-medium text-gray-700">
                    I confirm that I have the Right to Work in the U{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                By submitting this form, you confirm that the information
                provided is true and complete. We will process your data in
                accordance with our privacy policy.
              </p>
            </div>
          </div>

          {/* <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Website url..."
                  />
                </div>
              </div> */}
          <WorkExperienceForm />

          <div className="mt-6">
            <button className="px-4 py-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white rounded-md shadow-sm focus:outline-none">
              Save Changes
            </button>
          </div>
        </section>

        <CVForm />
      </div>
    </>
  );
};

export default CandidatePersonalForm;
