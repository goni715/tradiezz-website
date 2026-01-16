"use client";
import ApplicationDetails from "@/components/applicationDetails/ApplicationDetails";
import AuthenticationCard from "@/components/card/AuthenticationCard";
import JobDetailsLoading from "@/components/loader/JobDetailsLoading";
import { useGetSingleApplicationQuery } from "@/redux/features/application/applicationApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";

const ApplicationDeatilsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetSingleApplicationQuery(
    params.id
  );
  const application = data?.data || {};
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

  if (!isLoading && !isError && !application?._id) {
    return <h1>Application Not Found</h1>;
  }

  if (!isLoading && !isError && application?._id) {
    return <ApplicationDetails application={application}/>;
  }
};

export default ApplicationDeatilsPage;
