"use client"

import JobCard from "./JobCard"
import { jobs } from "@/data/job.data"

const JobListings = () => {


  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default JobListings;
