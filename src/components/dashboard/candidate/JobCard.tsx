"use client";
import { IJob } from "@/types/job.type";
import getTypeColor from "@/utils/getTypeColor";
import { BookmarkIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation";

const JobCard = ({ job }: { job: IJob }) =>{
  const router = useRouter();

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 flex flex-col md:flex-row md:items-center">
        {/* Company Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <div className={`w-10 h-10 rounded flex items-center justify-center ${job.logoBackground}`}>
            {job.logo && (
              <Image
                src={"/images/profile.png"}
                alt={`${job.company} logo`}
                width={24}
                height={24}
                className="object-contain"
              />
            )}
          </div>
        </div>

        {/* Job Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900">{job.title}</h3>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span className="inline-block w-1.5 h-1.5 bg-gray-300 rounded-full mr-1.5"></span>
              <span>{job.location}</span>
            </div>
          </div>

          <div className="col-span-1 flex items-center">
            <div className={`${getTypeColor(job.type)} text-xs px-2 py-1 rounded`}>{job.type}</div>
          </div>

          <div className="col-span-1 flex items-center text-sm">
            <span className="text-gray-900 font-medium">{job.salary}</span>
            {job.timeRemaining && (
              <div className="ml-4 flex items-center text-gray-500">
                <span className="inline-block w-1.5 h-1.5 bg-gray-300 rounded-full mr-1.5"></span>
                <span>{job.timeRemaining}</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 md:mt-0 md:ml-4 flex items-center space-x-2">
          <button className="p-1.5 text-gray-500 hover:text-gray-700">
            <BookmarkIcon className="h-5 w-5" />
          </button>

          <button
            onClick={()=> job.status !== "expired" && router.push(`/job-details/${job.title}`)}
            className={`px-4 py-2 rounded-md flex items-center text-sm ${
              job.status === "expired" ? "bg-gray-100 text-gray-500" : "bg-blue-50 text-primary hover:bg-blue-100 cursor-pointer"
            }`}
            disabled={job.status === "expired"}
          >
            {job.status === "expired" ? "Deadline Expired" : "View Details"}
            {/* {job.status !== "expired" && <ArrowRightIcon className="ml-1 h-4 w-4" />} */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard;
