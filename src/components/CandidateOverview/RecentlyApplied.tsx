"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import AppliedJobCard from "../AppliedJobs/AppliedJobCard";
import NotFoundCard from "../card/NotFoundCard";

const RecentlyApplied = () => {
  const { recentAppliedJobs } = useAppSelector((state) => state.job);



  return (
    <>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Recently Applied
          </h2>
        </div>

        {
          recentAppliedJobs?.length > 0 ? (
            <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6`}
          >
            {recentAppliedJobs?.map((job, index) => (
              <AppliedJobCard key={index} job={job} />
            ))}
          </div>
          ): (
            <NotFoundCard title="You haven't applied yet"/>
          )
        }
      </div>
    </>
  );
};

export default RecentlyApplied;
