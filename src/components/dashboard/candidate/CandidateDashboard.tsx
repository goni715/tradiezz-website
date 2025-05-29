"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { jobData } from "@/data/job.data"
import JobCard from "./JobCard"
import Sidebar from "./CandidateSidebar"

const CandidateDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  const jobsPerPage = 10

  const startIndex = (currentPage - 1) * jobsPerPage
  const currentJobs = jobData.slice(startIndex, startIndex + jobsPerPage)

  return (
    <div className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-64 lg:w-72 border-r border-gray-200 min-h-screen">
        <Sidebar />
      </div>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden p-4 border-b border-gray-200 bg-white">
        <button className="flex items-center space-x-2 text-gray-600">
          <span className="font-medium">Menu</span>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-gray-800">
              Favorite Jobs <span className="text-gray-500 text-sm">({jobData.length})</span>
            </h1>
          </div>

          <div className="space-y-4">
            {currentJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 items-center space-x-1">
            <button
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  currentPage === i + 1 ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-8">© 2024 MyJobs - Job Portal. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default CandidateDashboard;
