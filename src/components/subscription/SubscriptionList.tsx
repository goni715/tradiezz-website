"use client";
import { ISubscription } from "@/types/job.type";
import SubscriptionCard from "./SubscriptionCard";


type TProps = {
  subscriptions: ISubscription[]
}

const SubscriptionList = ({ subscriptions }: TProps) => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions?.map((subscription, index) => (
          <SubscriptionCard job={job} key={index} />
        ))}
      </div>
    </>
  );
};

export default SubscriptionList;
