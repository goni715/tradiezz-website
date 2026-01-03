"use client"
import AppliedJobList from "@/components/appliedJobs/AppliedJobList";

const AppliedJobsPage = () => {

  return (
    <>
      <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-gray-800">
              Applied Jobs
            </h1>
          </div>
          <AppliedJobList/>
        </div>
      </div>
    </>
  )
}

export default AppliedJobsPage;
