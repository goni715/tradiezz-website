"use client";
import React from "react";
import PriceCard from "./PriceCard";
import SubscriptionLoading from "@/components/loader/SubscriptionLoading";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import { IPlan } from "@/types/plan.type";
import { useGetPlansQuery } from "@/redux/features/plan/planApi";

const PlanList = () => {
  const { data, isLoading, isError } = useGetPlansQuery(undefined);
  const plans = data?.data || [];

  if (isLoading) {
    return <SubscriptionLoading />;
  }

  if (!isLoading && !isError && plans?.length === 0) {
    return <NotFoundCard title="There is no subscription plan " />;
  }

  if (!isLoading && !isError && plans?.length > 0) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans?.map((plan: IPlan, index:number) => (
            <PriceCard
              key={index}
              plan={plan}
            />
          ))}
        </div>
      </>
    );
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }
};

export default PlanList;
