"use client";

import ServerErrorCard from "@/components/card/ServerErrorCard";
import EmployerOverview from "@/components/employerOverview/EmployerOverview";
import OverviewLoading from "@/components/loader/OverviewLoading";
import { useGetEmployerJobsQuery } from "@/redux/features/job/jobApi";
import { useAppSelector } from "@/redux/hooks/hooks";


const EmployerOverviewPage = () => {
  const { overview } = useAppSelector((state) => state.candidate);
  //const { isLoading, isError} = useGetEmployerOverviewQuery(undefined);
  const { data, isLoading:jobLoading, isError:jobError } = useGetEmployerJobsQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 6 },
  ]);

  const jobs = data?.data || [];

  if (jobLoading) {
    return <OverviewLoading/>
  }

  if (overview && data) {
    return <EmployerOverview jobs={jobs}/>
  }
  
   if(!jobLoading && jobError){
    return <ServerErrorCard/>
  }
}

export default EmployerOverviewPage;