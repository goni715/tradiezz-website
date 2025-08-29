"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroForm = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/find-work?searchTerm=${searchTerm}&location=${location}&postalCode=${postalCode}`
    );
  };

  return (
    <div className="w-full px-4">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row flex-wrap items-stretch gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
      >
        {/* Search by job title */}
        <div className="w-full sm:flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title, skills, keywords"
            required
            className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition-all"
          />
        </div>

        {/* Location */}
        <div className="w-full sm:w-[200px]">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            required
            className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition-all"
          />
        </div>

        {/* Postal code */}
        <div className="w-full sm:w-[160px]">
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postal code"
            required
            className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition-all"
          />
        </div>

        {/* Search button */}
        <div className="w-full sm:w-auto">
          <button
            type="submit"
            className="w-full sm:w-auto h-12 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-sm transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;