"use client";

import PlanList from "@/components/plan/PlanList";
//import { useCheckSubscriptionStatusQuery } from "@/redux/features/subscription/subscriptionApi";
import Image from "next/image";

const SubscriptionPlansPage = () => {
  //useCheckSubscriptionStatusQuery(undefined);
  return (
    <>
       <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Buy Premium Subscription to Post a Job</h1>
            </div>
            <div className="w-full md:w-auto">
              <Image
                src="/images/subscription.png"
                width={600}
                height={600}
                alt="Job posting illustration"
                className="max-w-xs mx-auto md:mx-0"
              />
            </div>
          </div>
    
          <PlanList/>
        </div>
      </div>
    </>
  )
}

export default SubscriptionPlansPage;
