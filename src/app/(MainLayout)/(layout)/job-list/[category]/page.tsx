/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import JobListItem from "@/components/JobList/JobListItem"
import { jobs } from "@/data/job.data"
import type React from "react"

import { useState } from "react"


const JobListPage = () =>{
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
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {jobs.map((job, index) => (
         <JobListItem key={index} job={job}/>
      ))}
    </div>
  )
}

export default JobListPage;
