import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';

const SearchForm = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Find Work</h2>

        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Job Title / Keyword Input */}
            <div className="relative w-full sm:w-1/5">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
              <input
                type="text"
                 className="w-full pl-10 pr-4 py-2 outline-none"
                placeholder="Job title, Keyword..."
              />
            </div>

            {/* Location Input */}
            <div className="relative w-full sm:w-1/5">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 outline-none"
                placeholder="Location..."
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full sm:w-1/5">
              <AiOutlineArrowDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
              <select className="w-full pl-10 pr-4 py-2 outline-none">
                <option>Category</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Healthcare</option>
              </select>
            </div>

            {/* Advanced Filter Dropdown */}
            <div className="relative w-full sm:w-1/5">
              <AiOutlineArrowDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
              <select className="w-full pl-10 pr-4 py-2 outline-none">
                <option>Advanced Filter</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            {/* Find Job Button */}
            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 px-6 rounded-lg transition">
                Find Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
