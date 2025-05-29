/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Eye,
  SquarePen,
} from "lucide-react"
import { useRouter } from "next/navigation"
import DeleteJobModal from "@/components/modal/job/DeleteJobModal"

const MyJobsList = () => {
  //const [activeMenu, setActiveMenu] = useState("my-jobs")
  const [activeDropdown, setActiveDropdown] = useState(4)
  const [activePage, setActivePage] = useState(1)
  const [filterValue, setFilterValue] = useState("All Jobs");
  const router = useRouter();

  const jobs = [
    {
      id: 1,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "27 days remaining",
      status: "Active",
      applications: 798,
    },
    {
      id: 2,
      title: "Water Supply",
      type: "Internship",
      timeLeft: "8 days remaining",
      status: "Active",
      applications: 185,
    },
    {
      id: 3,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "24 days remaining",
      status: "Active",
      applications: 583,
    },
    { id: 4, title: "Water Supply", type: "Full Time", timeLeft: "Dec 7, 2019", status: "Expire", applications: 740 },
    {
      id: 5,
      title: "Water Supply",
      type: "Part Time",
      timeLeft: "4 days remaining",
      status: "Active",
      applications: 556,
    },
    {
      id: 6,
      title: "Water Supply",
      type: "Contract Base",
      timeLeft: "Feb 2, 2019",
      status: "Expire",
      applications: 426,
    },
    {
      id: 7,
      title: "Water Supply",
      type: "Temporary",
      timeLeft: "9 days remaining",
      status: "Active",
      applications: 922,
    },
    {
      id: 8,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "7 days remaining",
      status: "Active",
      applications: 994,
    },
    { id: 9, title: "Water Supply", type: "Full Time", timeLeft: "Dec 4, 2019", status: "Expire", applications: 196 },
    {
      id: 10,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "4 days remaining",
      status: "Active",
      applications: 492,
    },
  ]


  const toggleDropdown = (id:number) => {
    // if (activeDropdown === id) {
    //   setActiveDropdown(null)
    // } else {
    //   setActiveDropdown(id)
    // }
  }

  return (
    <>
       {/* Main Content */}
        <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-0">
              My Jobs <span className="text-gray-500 font-normal">(589)</span>
            </h1>
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-600 mr-2">Job status</span>
              <div className="relative">
                <select
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-2 sm:pl-3 pr-8 sm:pr-10 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>All Jobs</option>
                  <option>Active Jobs</option>
                  <option>Expired Jobs</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-3 sm:h-4 w-3 sm:w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-gray-100 py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
              <div className="col-span-6 md:col-span-6">JOBS</div>
              <div className="col-span-3 md:col-span-2 text-center">STATUS</div>
               {/* <div className="col-span-3 md:col-span-2 text-center">View Details</div> */}
              <div className="col-span-3 md:col-span-2 text-center hidden sm:block">APPLICATIONS</div>
              <div className="hidden md:block md:col-span-2 text-center">ACTIONS</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="grid grid-cols-12 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm hover:bg-blue-50 duration-200 rounded-md"
                >
                  <div className="col-span-6 md:col-span-6">
                    <div className="font-medium text-gray-800 truncate">{job.title}</div>
                    <div className="text-gray-500 flex flex-col sm:flex-row sm:items-center mt-1">
                      <span className="text-xs sm:text-sm">{job.type}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span onClick={()=>router.push(`/job-details/${job.id}`)} className="underline text-blue-400 cursor-pointer hover:text-blue-600">view details</span>
                      {/* <span className="flex items-center text-xs sm:text-sm mt-1 sm:mt-0">
                        {job.status === "Active" ? (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        )}
                        <span className="truncate">{job.timeLeft}</span>
                      </span> */}
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-center items-center">
                    {job.status === "Active" ? (
                      <div className="flex items-center text-green-600 text-xs sm:text-sm">
                        <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
                        <span className="hidden xs:inline">Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-500 text-xs sm:text-sm">
                        <XCircle className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
                        <span className="hidden xs:inline">Expire</span>
                      </div>
                    )}
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-center gap-1 items-center text-gray-600 text-xs sm:text-sm">
                    {/* <FileText className="h-3 sm:h-4 w-3 sm:w-4 mr-1" /> */}
                    <span className="hidden sm:inline">{job.applications}</span>
                      <Eye  onClick={() => router.push(`/dashboard/employer/applications/${job.id}`)} className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-blue-500 cursor-pointer" /> 
                    <span className="sm:hidden">{job.applications}</span>
                    <span className="sm:hidden text-xs text-blue-500 underline hover:text-blue-600">Applications</span>
                  </div>
                  <div className="hidden md:flex md:col-span-2 justify-center items-center gap-2">
                    {/* <button
                      onClick={() => router.push(`/dashboard/employer/applications/${job.id}`)}
                      className="rounded-md bg-gray-100 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 cursor-pointer duration-200 whitespace-nowrap"
                    >
                      View Applications                     
                    </button> */}
                     <SquarePen onClick={() => router.push(`/dashboard/employer/edit-job/${job.id}`)} className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer" /> 
                     <DeleteJobModal/>                     
                  </div>
                  {/* Mobile Actions - Only visible on small screens */}
                  <div className="col-span-12 mt-2 flex justify-end md:hidden">
                    {/* <button
                      onClick={() => router.push(`/dashboard/employer/applications/${job.id}`)}
                      className="rounded-md bg-gray-100 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-3 py-1 text-xs font-medium text-gray-700 cursor-pointer duration-200"
                    >
                      View Applications
                    </button> */}
                     <SquarePen onClick={() => router.push(`/dashboard/employer/edit-job/${job.id}`)} className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer" /> 
                     <DeleteJobModal/>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center py-3 sm:py-4 border-t border-gray-200">
              <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4 text-gray-500" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-6 h-6 sm:w-8 sm:h-8 mx-0.5 sm:mx-1 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                    activePage === page ? "bg-blue-800 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page.toString().padStart(2, "0")}
                </button>
              ))}
              <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyJobsList;
