"use client";
import { IFindJob } from "@/types/job.type";
import NotFoundCard from "../card/NotFoundCard";
import JobCard from "../FindWork/JobCard";

type TProps = {
  jobs: IFindJob[]
}

const JobsByCategory = ( { jobs } : TProps) => {

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {jobs?.map((job, index) => (
              <JobCard key={index} job={job} />
            ))
            }
          </div>
        )
          : (
            <NotFoundCard title="There are no jobs available by this category" />
          )}
      </div>
    </>
  );
};

export default JobsByCategory;
