"use client";

import { ChevronDown } from "lucide-react";
// import { typeOptions } from "@/components/FindWork/AdvanceFilter";
// import LocationDropdown from "@/components/FindWork/LocationDropdown";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroForm = () => {
  const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(15);
  
    const options = [5, 10, 15, 25, 50, 100];
  
    const handleSelect = (value: number) => {
      setSelected(value);
      setIsOpen(false);
      console.log(value);
    };
  const handleSearch = () => {
    router.push("/find-work");
  };
  return (
    // <div className="md:flex-1 rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full max-w-4xl mx-auto">
    //    <input
    //     type="text"
    //     placeholder="search by title, location, postcode..."
    //     className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none"
    //   /> 

    //   <select className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none">
    //       <option value="">Select Category</option>
    //       <option>Fence Setup</option>
    //       <option>Plumbing</option>
    //       <option>Roofing</option>
    //       <option>Painting</option>
    //     </select> 
    //   <select className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none">
    //     <option>Select Type</option>
    //     {typeOptions.map((option) => (
    //       <option key={option} value={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select> 
    //   <div className="w-full ">
    //     <LocationDropdown/>
    //   </div> 

    //    Search Button 
    //   <button
    //     onClick={handleSearch}
    //     className="w-full md:w-auto px-6 py-3 cursor-pointer bg-primary text-white rounded-lg font-medium hover:bg-[#16324f] transition duration-200"
    //   >
    //     Search
    //   </button>
    // </div>
    <>
      <div className="w-full">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="search by job title, skills, keywords, city, postcode..."
            className="w-full pl-10 pr-4 py-2 border placeholder:text-gray-400 text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

      

        <div className="relative flex-1">
         <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 border border-gray-300 rounded bg-white"
      >
        <span className="text-gray-700">Location</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">{selected} miles</span>
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-sm z-40">
          {options.map((value) => (
            <li
              key={value}
              onClick={() => handleSelect(value)}
              className={`p-2 cursor-pointer text-gray-700 hover:bg-gray-50 ${
                selected === value ? 'bg-blue-50' : ''
              }`}
            >
              {value} miles
            </li>
          ))}
        </ul>
      )}
    </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button onClick={handleSearch} className="px-4 py-2 text-white bg-secondary cursor-pointer rounded-md focus:outline-none">
            Search
          </button>
        </div>
      </div>

    </div>

    </>

  );
};

export default HeroForm;
