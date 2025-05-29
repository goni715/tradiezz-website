"use client";

import { TJob } from "@/types/job.type";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const JobCard = ({ job }: { job: TJob }) => {
  const router = useRouter();

  
   

  return (
    <>
      <div onClick={()=>router.push(`/job-list/${job.category}`)} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center ${job.logoColor} text-white`}
            >
              <Image
                src={job.logo || "/placeholder.svg"}
                alt={job.title}
                className="w-6 h-6"
                width={600}
                height={600}
              />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-gray-900">{job.company}</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="truncate max-w-[150px]">{job.location}</span>
              </div>
            </div>
          </div>
          {/* {job.featured && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              Featured
            </span>
          )} */}
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {job.category}
        </h2>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{job.type}</span>
          <span className="font-medium">{job.salary}</span>
        </div>
      </div>
    </>
  );
};

export default JobCard;
