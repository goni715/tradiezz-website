/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { jobs } from "@/data/job.data";
import { TJob } from "@/types/job.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

const JobListItem = ({job}: {job: TJob}) => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(6)
    const [bookmarkedJobs, setBookmarkedJobs] = useState(
      jobs.reduce((acc, job) => ({ ...acc, [job.id]: job.bookmarked }), {}),
    )
  
    const toggleBookmark = (jobId: number, e: React.MouseEvent) => {
      e.stopPropagation()
      // setBookmarkedJobs((prev) => ({
      //   ...prev,
      //   [jobId]: !prev[jobId],
      // }))
    }

  return (
    <>
       <div
          key={job.id}
          className={`flex items-center justify-between p-4 rounded-lg transition-all border border-gray-100 hover:border-b hover:border-gray-300 cursor-pointer duration-200`}
          onClick={() => setSelectedJob(job.id)}
        >
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold"
              style={{ backgroundColor: job.logo }}
            >
              {job.logoText}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{job.title}</h3>
                {/* <div className="flex space-x-1"> */}
                  {/* {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-0.5 rounded ${
                        tag === "Featured"
                          ? "bg-red-100 text-red-500"
                          : tag === "Remote"
                            ? "bg-blue-100 text-blue-500"
                            : tag === "Full Time"
                              ? "bg-blue-100 text-blue-500"
                              : tag === "Part Time"
                                ? "bg-purple-100 text-purple-500"
                                : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))} */}
                {/* </div> */}
              </div>

              <div className="flex items-center text-gray-500 text-sm mt-1 space-x-4">
                <div className="flex items-center">
                  <FiMapPin className="mr-1" size={14} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center">
                  <FiDollarSign className="mr-1" size={14} />
                  <span>{job.salary}</span>
                </div>

                <div className="flex items-center">
                  <FiClock className="mr-1" size={14} />
                  <span>{job.daysRemaining} Days Remaining</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={(e) => toggleBookmark(job.id, e)} className="text-gray-400 hover:text-gray-600">
              {/* <FiBookmark size={20} className={bookmarkedJobs[job.id] ? "fill-current text-gray-600" : ""} /> */}
            </button>

            <button onClick={()=>router.push(`/job-details/${job.id}`)} className="bg-blue-50 cursor-pointer hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-md flex items-center duration-200 transition-colors">
              View Details
            </button>
          </div>
        </div>
    </>
  )
}

export default JobListItem