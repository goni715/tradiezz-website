"use client";

import { jobs } from "@/data/jobList.data";
import JobCard from "./JobCard";
import BlogPagination from "@/components/BlogList/BlogPagination";
import { useState } from "react";

const JobListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  const totalPages = 5;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            {/* <h2 className="text-xl font-semibold text-gray-800">
              {selectedCategory === 'All' ? 'All Jobs' : `${selectedCategory} Jobs`}
            </h2> */}
            <p className="text-primary font-semibold mt-1">
              {/* {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} available */}
              12 jobs available
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:border-blue-500">
              <option>All</option>
              <option>Electrician</option>
              <option>Carpentar</option>
              <option value="">Plumber</option>
              <option value="">Painter</option>
              <option value="">Mason</option>
              <option value="">Welder</option>
              <option value="">Roofer</option>
              <option value="">Tile Setter</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default JobListings;
