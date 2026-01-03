"use client";

import { IFindJob } from "@/types/job.type";
import JobCard from "./JobCard";

type TProps = {
  jobs: IFindJob[];
};

const FindWorkList = ({ jobs }: TProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FindWorkList;
