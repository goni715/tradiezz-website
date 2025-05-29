"use client"

import AdvancedFilter from "@/components/FindWork/AdvanceFilter"
import JobListings from "@/components/FindWork/JobListing/JobListings"

const FindWorkPage = () => {
  return (
    <>
      <div className="">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Find Work</h1>
          <div className="flex items-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span>Find job</span>
          </div>
        </div>

        <AdvancedFilter />
      </div>
    </div>
    <JobListings/>

    </>
  )
}

export default FindWorkPage