"use client"

import { useRouter } from "next/navigation";

const HeroForm = () => {
  const router = useRouter();
  const handleSearch = ()=> {
    router.push('/find-work')
  }
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full max-w-4xl mx-auto" >
        {/* Location Dropdown */}
        <input type="text" placeholder="Location..." className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none" />
         
  
        {/* Category Dropdown */}
        <select className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none">
          <option value="">Select Category</option>
          <option>Fence Setup</option>
          <option>Plumbing</option>
          <option>Roofing</option>
          <option>Painting</option>
        </select>
  
        {/* Search Button */}
        <button onClick={handleSearch} className="w-full md:w-auto px-6 py-3 cursor-pointer bg-primary text-white rounded-lg font-medium hover:bg-[#16324f] transition duration-200">
          Search
        </button>
      </div>
    );
  };
  
  export default HeroForm;
  