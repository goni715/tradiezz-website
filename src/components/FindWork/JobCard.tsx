import React from "react";
import { MapPin, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { IFindJob } from "@/types/job.type";
import useUserInfo from "@/hooks/useUserInfo";
import FavouriteCard from "./FavouriteCard";
import getDaysRemaining from "@/utils/getDaysRemaining";
import getCategoryColor from "@/utils/getCategoryColor";

type TProps = {
  job: IFindJob;
};

const JobCard: React.FC<TProps> = ({ job }) => {
  const router = useRouter();
  const userInfo = useUserInfo();
  const daysRemaining = getDaysRemaining(job?.deadline);

  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-3 gap-x-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {job?.title}
          </h2>
          {userInfo?.userId && userInfo.role === "candidate" && (
            <FavouriteCard jobId={job?._id} />
          )}
        </div>

        <div className="flex items-center text-gray-600 mt-1 mb-2">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span className="text-sm">{job?.address}</span>
        </div>

        <div className="text-gray-800 font-medium mt-1 mb-2">
          salary: £{job?.minRange}-£{job.maxRange} /{" "}
          <span className="capitalize">{job.rateType}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-1 text-gray-400" />
            <span>
              {daysRemaining > 0
                ? `${daysRemaining} days remaining`
                : "Deadline passed"}
            </span>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs text-center font-medium ${getCategoryColor(
              job.category
            )}`}
          >
            {job.category}
          </span>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <button
          onClick={() => router.push(`/jobs/job-details/${job?._id}`)}
          className="w-full py-2 px-4 bg-primary hover:bg-primary/90 cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
