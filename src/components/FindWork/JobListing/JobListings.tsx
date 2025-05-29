"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Grid, List,  } from "lucide-react"
import JobCard from "./JobCard"
import { jobs } from "@/data/job.data"

const JobListings = () => {
  const [viewMode, setViewMode] = useState("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-6 gap-4">
        {/* <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Highest Salary</option>
          </select>
          <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 -rotate-90 w-4 h-4 text-gray-500" />
        </div> */}

        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500">
              <option>12 per page</option>
              <option>24 per page</option>
              <option>36 per page</option>
            </select>
            <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 -rotate-90 w-4 h-4 text-gray-500" />
          </div>

          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"} cursor-pointer`}
            >
              <Grid className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-gray-100" : "bg-white"} cursor-pointer`}
            >
              <List className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Job listings grid */}
      <div
        className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
      >
        {currentItems.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === index + 1 ? "bg-blue-900 text-white" : "border border-gray-300 text-gray-700"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default JobListings;
