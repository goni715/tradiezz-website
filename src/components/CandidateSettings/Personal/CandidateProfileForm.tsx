import { ChevronDown } from "lucide-react"

const CandidateProfileForm = () =>{
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nationality */}
          <div className="space-y-2">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
              Nationality
            </label>
            <div className="relative">
              <select
                id="nationality"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="date"
                id="dob"
                placeholder="dd/mm/yyyy"
                className="block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>


          {/* Education */}
          <div className="space-y-2">
            <label htmlFor="education" className="block text-sm font-medium text-gray-700">
              Education
            </label>
            <div className="relative">
              <select
                id="education"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="high-school">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor &lsquo; s Degree</option>
                <option value="master">Master &lsquo; s Degree</option>
                <option value="doctorate">Doctorate</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <div className="relative">
              <select
                id="experience"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="junior">Junior (2-5 years)</option>
                <option value="mid">Mid-Level (5-8 years)</option>
                <option value="senior">Senior (8+ years)</option>
                <option value="executive">Executive (10+ years)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="space-y-2">
          <label htmlFor="biography" className="block text-sm font-medium text-gray-700">
            Biography
          </label>
           <textarea
              id="biography"
              rows={6}
              className="block w-full border border-gray-300 rounded-md py-3 px-4 text-gray-500 focus:ring-0 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Write down your biography here. Let the employers know who you are..."
            ></textarea>
          {/* <div className="border border-gray-300 rounded-md overflow-hidden">
           
          </div> */}
        </div>

        {/* Save Button */}
        <div>
          <button
            type="submit"
            className="inline-flex  bg-primary hover:bg-[#2b4773] cursor-pointer justify-center rounded-md border border-transparent py-2 px-6 text-sm font-medium text-white shadow-sm focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default CandidateProfileForm;
