"use client";

import { IFindJob } from "@/types/job.type";
import JobCard from "../FindWork/JobCard";

type TProps = {
  jobs: IFindJob[];
};

const RelatedJobs = ({ jobs }: TProps) => {
  return (
    <div className="py-8 px-2 bg-gray-50">
      <h1 className="pb-2 font-semibold text-3xl">Related Jobs</h1>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
