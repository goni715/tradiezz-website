"use client";
import { useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import FavoriteJobLoading from "../loader/FavoriteJobLoading";
import AuthenticationCard from "../card/AuthenticationCard";
import { IFindJob } from "@/types/job.type";
import FavouriteJobCard from "./FavouriteJobCard";
import NotFoundCard from "../card/NotFoundCard";
import CustomPagination from "../common/CustomPagination";
import { useGetAppliedJobsQuery } from "@/redux/features/application/applicationApi";

const AppliedJobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const { data, isLoading, isError, error } = useGetAppliedJobsQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);

  const fetchError = error as FetchBaseQueryError;
  const jobs = data?.data || [];
  const meta = data?.meta || {};

  if (isLoading) {
    return <FavoriteJobLoading />;
  }
  if (!isLoading && isError && fetchError?.status === 401) {
    return <AuthenticationCard />;
  }

  if (!isLoading && isError) {
    return <h1 className="text-red-500">Something Went Wrong</h1>;
  }

  if (!isLoading && !isError && jobs.length > 0) {
    return (
      <>
        <div className="pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
            {jobs.map((job: IFindJob, index: number) => (
              <FavouriteJobCard key={index} job={job} />
            ))}
          </div>
          {meta?.totalPages > 1 && (
            <CustomPagination
              meta={meta}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
          )}
        </div>
      </>
    );
  }

  if (!isLoading && !isError && jobs?.length === 0) {
    return <NotFoundCard title="There are no favourite jobs" />;
  }
};

export default AppliedJobList;
