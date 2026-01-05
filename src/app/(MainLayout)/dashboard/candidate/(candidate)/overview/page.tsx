"use client";

import CandidateOverview from "@/components/CandidateOverview/CandidateOverview";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { SetUser } from "@/redux/features/user/userSllice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useEffect } from "react";



const CandidateOverviewPage = () => {
 const dispatch = useAppDispatch();
 const { data } = useGetMeQuery(undefined);
 useEffect(() => {
   if (data?.data) {
     const user = data?.data;
     dispatch(SetUser(user));
   }
 }, [data, dispatch]);
 
//  const { overview } = useAppSelector((state) => state.candidate);
//  const { isLoading, isError} = useGetCandidateOverviewQuery(undefined);
//  const { data, isLoading:jobLoading, isError:jobError } = useGetRecentAppliedJobsQuery([
//      { name: "page", value: 1 },
//      { name: "limit", value: 6 },
//  ]);

 return <CandidateOverview/>

  // if (isLoading) {
  //   return <CandidateOverviewLoading/>
  // }

  // if (!isLoading && overview && data) {
  //   return <CandidateOverview/>
  // }
  
  // if(!isLoading && !jobLoading && (isError || jobError)){
  //   return <ServerErrorCard/>
  // }
};

export default CandidateOverviewPage;