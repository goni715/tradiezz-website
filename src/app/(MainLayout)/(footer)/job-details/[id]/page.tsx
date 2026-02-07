"use client";
import AuthenticationCard from "@/components/card/AuthenticationCard";
import JobDescription from "@/components/jobDetails/JobDescription";
import JobDetails from "@/components/jobDetails/jobDetails";
import RelatedJobs from "@/components/jobDetails/RelatedJobs";
import JobDetailsLoading from "@/components/loader/JobDetailsLoading";
import { useGetSingleJobQuery } from "@/redux/features/job/jobApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetSingleJobQuery(params.id);
  const job = data?.data?.job || {};
  const relatedJobs = data?.data?.relatedJobs || [];
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
      <>
        <main className="min-h-full bg-white p-4 rounded-md max-w-7xl mx-auto px-4 py-8">
          <JobDetails job={job} />
          <JobDescription description={job.description} />
          {relatedJobs?.length > 0 && <RelatedJobs jobs={relatedJobs} />}
        </main>
      </>
    );
  }
};

export default JobDetailPage;
