"use client";

import CandidateDetails from "@/components/candidateDetails/CandidateDetails";
import AuthenticationCard from "@/components/card/AuthenticationCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import CandidateDetailsLoading from "@/components/loader/CandidateDetailsLoading";
import { useGetSingleCandidateQuery } from "@/redux/features/candidate/candidateApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";

const CandidateDetailsPage = () => {
 const params = useParams<{ id: string; }>()
  const { data, isLoading,isFetching, isError, error } = useGetSingleCandidateQuery(params.id);
  const fetchError = error as FetchBaseQueryError;
  const candidate = data?.data || {};

  if(isLoading || isFetching){
    return <CandidateDetailsLoading/>
  }

  if (!isLoading && isError && fetchError?.status === 401) {
    return <AuthenticationCard />
  }

  if(!isLoading && isError){
    return <ServerErrorCard/>
  }

  if(!isLoading && !isError && candidate?.userId){
    return <CandidateDetails candidateData={candidate}/>
  }
 
  if(!isLoading && !isError && !candidate.userId){
    return <NotFoundCard title="Job Not Found"/>
  }
};

export default CandidateDetailsPage;
