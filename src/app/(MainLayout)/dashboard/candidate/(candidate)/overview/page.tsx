"use client";

import CandidateOverview from "@/components/CandidateOverview/CandidateOverview";



const CandidateOverviewPage = () => {
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