"use client";
import AuthenticationCard from "@/components/card/AuthenticationCard";
import JobDescription from "@/components/jobDetails/JobDescription";
import JobDetails from "@/components/jobDetails/jobDetails";
import JobDetailsLoading from "@/components/loader/JobDetailsLoading";
import { useGetSingleJobQuery } from "@/redux/features/job/jobApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetSingleJobQuery(params.id);
  const job = data?.data?.job || {};
  const fetchError = error as FetchBaseQueryError;

  if (isLoading) {
    return <JobDetailsLoading />;
  }

  if (!isLoading && isError && fetchError?.status === 401) {
    return <AuthenticationCard />;
  }

  if (!isLoading && isError) {
    return <h1>Something Went Wrong</h1>;
  }

  if (!isLoading && !isError && !job?._id) {
    return <h1>Job Not Found</h1>;
  }

  if (!isLoading && !isError && job?._id) {
    return (
      <main className="min-h-full bg-white p-4 rounded-md max-w-7xl mx-auto px-4 py-8">
        {/* <div className="pb-4 flex items-center gap-6">
                        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
                        <h1 className="text-xl font-medium text-gray-900">
                            Job Details
                        </h1>
                    </div> */}
        <JobDetails job={job} />
        <JobDescription description={job.description} />
      </main>
    );
  }
};

export default JobDetailPage;
