"use client"


const AdvancedFilter = () => {
  //const [isOpen, setIsOpen] = useState(false)
  // const [filters, setFilters] = useState({
  //   experience: "4-6 Years",
  //   salary: "$6000 - $8000",
  //   jobType: ["Full Time"],
  //   education: ["Graduation"],
  //   category: ["Water Supply"],
  // })

  //const toggleFilter = () => setIsOpen(!isOpen)

  // const handleExperienceChange = (value: string) => {
  //   setFilters({ ...filters, experience: value })
  // }

  // const handleSalaryChange = (value: string) => {
  //   setFilters({ ...filters, salary: value })
  // }

  // const handleCheckboxChange = (category: "jobType" | "education" | "category", value: string) => {
  //   const currentValues = [...filters[category]]

  //   if (currentValues.includes(value)) {
  //     setFilters({
  //       ...filters,
  //       [category]: currentValues.filter((item) => item !== value),
  //     })
  //   } else {
  //     setFilters({
  //       ...filters,
  //       [category]: [...currentValues, value],
  //     })
  //   }
  // }

  return (
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
            placeholder="search by title, location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* <div className="relative flex-1">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div> */}

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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 appearance-none text-gray-600">
            <option>Select Category</option>
            <option>Production & Operations</option>
            <option>Quality Control & Assurance</option>
            <option>Maintenance & Repair</option>
            <option>Supply Chain & Logistics</option>
            <option>Health & Safety</option>
            <option>Packaging & Finishing</option>
            <option>Mechanical Engineering</option>
            <option>Electrical Engineering</option>
            <option>Civil & Structural Engineering</option>
            <option>Industrial & Manufacturing Engineering</option>
            <option>Automation & Robotics</option>
            <option>Project & Design Engineering</option>
          </select>
        </div>

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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 appearance-none text-gray-600">
            <option>Select Type</option>
            <option>Part Time</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Remote</option>
            <option>Temporary</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          {/* <button
            onClick={toggleFilter}
            className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
          >
            Advance Filter
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}

          <button className="px-4 py-2 text-white bg-secondary cursor-pointer rounded-md focus:outline-none">
            Find Job
          </button>
        </div>
      </div>

      {/* Advanced Filter Section */}
      {}

      {/*isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div>
              <h3 className="font-medium mb-3">Experience</h3>
              <div className="space-y-2">
                {[
                  "Freshers",
                  "1 - 2 Years",
                  "2 - 4 Years",
                  "4 - 6 Years",
                  "6 - 8 Years",
                  "8 - 10 Years",
                  "10 - 15 Years",
                  "15+ Years",
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      checked={filters.experience === option}
                      onChange={() => handleExperienceChange(option)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Salary</h3>
              <div className="space-y-2">
                {[
                  "$50 - $1000",
                  "$1000 - $2000",
                  "$3000 - $4000",
                  "$4000 - $6000",
                  "$6000 - $8000",
                  "$8000 - $10000",
                  "$10000 - $15000",
                  "$15000+",
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="salary"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      checked={filters.salary === option}
                      onChange={() => handleSalaryChange(option)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Job Type</h3>
              <div className="space-y-2">
                {["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary", "Contract Base"].map(
                  (option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        checked={filters.jobType.includes(option)}
                        onChange={() => handleCheckboxChange("jobType", option)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Education</h3>
              <div className="space-y-2">
                {["All", "High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree"].map(
                  (option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        checked={filters.education.includes(option)}
                        onChange={() => handleCheckboxChange("education", option)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                {Array(6)
                  .fill("Water Supply")
                  .map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        checked={filters.category.includes(option)}
                        onChange={() => handleCheckboxChange("category", option)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )*/}
    </div>
  );
}

export default AdvancedFilter
