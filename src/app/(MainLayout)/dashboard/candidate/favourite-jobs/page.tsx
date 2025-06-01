"use client"

import { useState } from "react"
import { jobData } from "@/data/job.data"
import FavouriteJobList from "@/components/favouriteJobs/FavouriteJobList"

const FavouriteJobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10;
  const jobsPerPage = 10

  const startIndex = (currentPage - 1) * jobsPerPage

  return (
    <>
      <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-gray-800">
              Favorite Jobs <span className="text-gray-500 text-sm">({jobData.length})</span>
            </h1>
          </div>

        
          <FavouriteJobList/>
        </div>
      </div>
    </>
  )
}

export default FavouriteJobsPage;
