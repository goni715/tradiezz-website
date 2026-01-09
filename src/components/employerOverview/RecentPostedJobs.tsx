"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { IMyJob } from "@/types/job.type";
import MyJobItem from "../myJobList/MyJobItem";
import NotFoundCard from "../card/NotFoundCard";

type TProps = {
  jobs: IMyJob[];
};

const RecentPostedJobs = ({ jobs }: TProps) => {
  return (
    <>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Recently Posted Jobs
          </h2>
          {jobs.length > 0 && (
            <Link
              href="/dashboard/employer/my-jobs"
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.map((job, index) => (
            <MyJobItem job={job} key={index} />
          ))}
        </div>
        {jobs.length === 0 && <NotFoundCard title="There are no posted jobs" />}
      </div>
    </>
  );
};

export default RecentPostedJobs;
