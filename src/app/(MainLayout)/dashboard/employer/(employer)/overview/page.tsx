"use client";

import ServerErrorCard from "@/components/card/ServerErrorCard";
import EmployerOverview from "@/components/employerOverview/EmployerOverview";
import OverviewLoading from "@/components/loader/OverviewLoading";
import { useGetEmployerStatsQuery } from "@/redux/features/dashboard/dashboardApi";
import { useGetEmployerJobsQuery } from "@/redux/features/job/jobApi";


const EmployerOverviewPage = () => {
  const { isLoading, data: statsData,  isError} = useGetEmployerStatsQuery(undefined);
  const { data, isLoading:jobLoading, isError:jobError } = useGetEmployerJobsQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 6 },
  ]);
  
  const stats = statsData?.data;
  const jobs = data?.data || [];

  if (isLoading || jobLoading) {
    return <OverviewLoading/>
  }

  if (!isLoading && !jobLoading && statsData && data) {
    return <EmployerOverview jobs={jobs} stats={stats}/>
  }
  
   if(!isLoading &&!jobLoading && isError && jobError){
    return <ServerErrorCard/>
  }
}

export default EmployerOverviewPage;