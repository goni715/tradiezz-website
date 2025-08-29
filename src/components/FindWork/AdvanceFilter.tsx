"use client"

import { useState } from "react";

  export const typeOptions = [
    "Full-time",
    "Part-time",
    "Fixed-Term / Contract",
    "Temporary",
    "Apprenticeship",
    "Graduate / Entry-Level",
    "Remote / Hybrid",
  ];

const AdvancedFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSearch = () => {

  }


  return (
     <div className="w-full">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row md:flex-wrap gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Job Title */}
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by job title, skills, keywords"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Location */}
              <div className="w-full md:w-[200px]">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Postal Code */}
              <div className="w-full md:w-[160px]">
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Postal code"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Submit */}
              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  className="w-full h-12 px-6 cursor-pointer bg-brand-color text-white font-semibold rounded-md shadow-sm transition-colors"
                >
                  Find Job
                </button>
              </div>
            </form>
          </div>
  );
}

export default AdvancedFilter
