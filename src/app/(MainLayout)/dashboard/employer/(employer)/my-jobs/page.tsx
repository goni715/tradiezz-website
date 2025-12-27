"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import JobsLoading from "@/components/loader/JobsLoading";
import MyJobsList from "@/components/MyJobs/MyJobsList";
import Pagination from "@/components/ui/Pagination";
import { useGetEmployerJobsQuery } from "@/redux/features/job/jobApi";
//import { useCheckSubscriptionStatusQuery } from "@/redux/features/subscription/subscriptionApi";
import React, { useState } from "react";

const MyJobsPage = () => {
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  useCheckSubscriptionStatusQuery(undefined);
  //const [ pageSize, setPageSize ] = useState<number>(5);
  const { data, isLoading, isError } = useGetEmployerJobsQuery(
    status === ""
      ? [
        { name: "page", value: currentPage },
        { name: "limit", value: 2 },
      ]
      : [
        { name: "page", value: currentPage },
        { name: "limit", value: 2 },
        { name: "status", value: status },
      ]
  );
  const jobs = data?.data?.result || [];
  const meta = data?.data?.meta || {};

  let content: React.ReactNode;


  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  if (isLoading) {
    return <JobsLoading />
  }

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <NotFoundCard title="There is no jobs available." />
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    content = (
      <>
        <MyJobsList jobs={jobs} />
        {meta?.total != 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={meta?.totalPage}
            onPageChange={handlePageChange}
          />
        )}
      </>
    )
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />
  }




  return (
    <>
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Jobs</h1>
              <p className="text-gray-600 mt-1">
                ({filteredJobs.length} of {mockJobs.length} jobs)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>
        </div>
        {content}
      </div>
    </>
  );

};

export default MyJobsPage;
