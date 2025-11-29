"use client";

import { jobs } from "@/data/jobList.data";
import BlogPagination from "@/components/BlogList/BlogPagination";
import { useState } from "react";
import JobCard from "../FindWork/JobListing/JobCard";

const JobsByCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  const totalPages = 5;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-primary font-semibold mt-1">
              12 jobs available
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-12">
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

export default JobsByCategory;
