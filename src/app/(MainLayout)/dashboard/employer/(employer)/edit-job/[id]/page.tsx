"use client";

import AuthenticationCard from "@/components/card/AuthenticationCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import EditJobForm from "@/components/EditJobForm/EditJobForm";
import PostJobLoading from "@/components/loader/PostJobLoading";
import { useGetMySingleJobQuery } from "@/redux/features/job/jobApi";
import { useCheckSubscriptionStatusQuery } from "@/redux/features/subscription/subscriptionApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";


const EditJobPage = () => {
  useCheckSubscriptionStatusQuery(undefined);
  const params = useParams<{ id: string; }>()
  const { data, isLoading,isFetching, isError, error } = useGetMySingleJobQuery(params.id);
  const fetchError = error as FetchBaseQueryError;
  const job = data?.data || {};

  if(isLoading || isFetching){
    return <PostJobLoading/>
  }

  if (!isLoading && isError && fetchError?.status === 401) {
    return <AuthenticationCard />
  }

  if(!isLoading && isError){
    return <ServerErrorCard/>
  }

  if(!isLoading && !isError && job?._id){
    return <EditJobForm job={job}/>
  }
 
  if(!isLoading && !isError && !job._id){
    return <NotFoundCard title="Job Not Found"/>
  }

}

export default EditJobPage