"use client";

import ServerErrorCard from "@/components/card/ServerErrorCard";
import EmployerSettings from "@/components/EmployerSettings/EmployerSettings";
import CandidateOverviewLoading from "@/components/loader/CandidateOverviewLoading";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { SetIsProfileUpdated, SetUser } from "@/redux/features/user/userSllice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect } from "react";

const EmployerSettingsPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetMeQuery(undefined);
  const { isProfileUpdated } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isProfileUpdated) {
      dispatch(SetUser(data?.data));
      dispatch(SetIsProfileUpdated(false));
    }
  }, [isProfileUpdated, dispatch, data]);

  if (isLoading) {
    return <CandidateOverviewLoading />;
  }

  if (!isLoading && data.data) {
    return <EmployerSettings />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  return null;
};

export default EmployerSettingsPage;
