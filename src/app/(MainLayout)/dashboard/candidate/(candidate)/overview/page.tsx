"use client";

import CandidateOverview from "@/components/CandidateOverview/CandidateOverview";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import CandidateOverviewLoading from "@/components/loader/CandidateOverviewLoading";
import { useGetCandidateStatsQuery } from "@/redux/features/dashboard/dashboardApi";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { SetIsProfileUpdated, SetUser } from "@/redux/features/user/userSllice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect } from "react";

const CandidateOverviewPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetMeQuery(undefined);
  const { data: statsData, isLoading: statsLoading, isError: statsError } = useGetCandidateStatsQuery(undefined);
  const { isProfileUpdated } = useAppSelector((state) => state.user);

  const stats = statsData?.data || {};

   useEffect(() => {
     if (isProfileUpdated) {
       dispatch(SetUser(data?.data));
       dispatch(SetIsProfileUpdated(false));
     }
   }, [isProfileUpdated, dispatch, data]);
  

  if (isLoading || statsLoading) {
    return <CandidateOverviewLoading />;
  }

  if (!isLoading && data.data && stats) {
    return <CandidateOverview stats={stats}/>;
  }

  if (!isLoading && isError && statsError) {
    return <ServerErrorCard />;
  }

  return null;
};

export default CandidateOverviewPage;
