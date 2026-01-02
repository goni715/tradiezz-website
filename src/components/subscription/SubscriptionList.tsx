"use client";
import { ISubscription } from "@/types/subscription.type";
import SubscriptionCard from "./SubscriptionCard";


type TProps = {
  subscriptions: ISubscription[]
}

const SubscriptionList = ({ subscriptions }: TProps) => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {subscriptions?.map((subscription, index) => (
          <SubscriptionCard subscription={subscription} key={index} />
        ))}
      </div>
    </>
  );
};

export default SubscriptionList;
