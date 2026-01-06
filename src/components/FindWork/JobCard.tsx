"use client";

import React from "react";
import { MapPin, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { IFindJob } from "@/types/job.type";
import useUserInfo from "@/hooks/useUserInfo";
import FavouriteCard from "./FavouriteCard";
import getDaysRemaining from "@/utils/getDaysRemaining";
import getCategoryColor from "@/utils/getCategoryColor";
import AppliedBadge from "./AppliedBadge";

type TProps = {
  job: IFindJob;
};

const JobCard: React.FC<TProps> = ({ job }) => {
  const router = useRouter();
  const userInfo = useUserInfo();
  const daysRemaining = getDaysRemaining(job?.deadline);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex grow flex-col p-5">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="flex-1 truncate text-lg font-semibold text-gray-800">
            {job?.title}
          </h2>
          {userInfo?.userId && userInfo.role === "candidate" && (
            <div className="shrink-0">
              <FavouriteCard jobId={job?._id} />
            </div>
          )}
        </div>

        {/* Address */}
        <div className="mb-3 flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1 shrink-0 text-gray-400" />
          <span className="line-clamp-1 truncate">{job?.address}</span>
        </div>

        {/* Salary & applied badge */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="font-medium text-gray-800">
            Salary: £{job?.minRange} – £{job?.maxRange} /{" "}
            <span className="capitalize">{job?.rateType}</span>
          </div>
          {userInfo?.userId && userInfo.role === "candidate" && (
            <AppliedBadge jobId={job._id} />
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-1 shrink-0 text-gray-400" />
            <span>
              {daysRemaining > 0
                ? `${daysRemaining} days remaining`
                : "Deadline passed"}
            </span>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(
              job?.category
            )}`}
          >
            {job?.category}
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="border-t border-gray-100 bg-gray-50 p-4">
        <button
          onClick={() => router.push(`/job-details/${job?._id}`)}
          className="w-full cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary/90 focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
