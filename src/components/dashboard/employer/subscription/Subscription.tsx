"use client";
import { subscriptionData } from "@/data/job.data"
import Image from "next/image"
import PriceCard from "./PriceCard";

const Subscription = () => {
  
      return (
        <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Buy Premium Subscription to Post a Job</h1>
              <p className="text-gray-600 max-w-xl">
                Donec eu dui ut dolor commodo ornare. Sed arcu libero, malesuada quis justo sit amet, varius tempus
                neque. Quisque ultrices mi sed lorem condimentum, vel tempus lectus ultricies.
              </p>
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
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {
              subscriptionData?.map((item, index)=> (
                <PriceCard
                key={index}
                tier={item.tier}
                price={item.price}
                description={item.description}
                features={item.features}
                recommended={item.recommended}
              />
              ))
            }
           
          </div>
        </div>
      </div>
      )
}

export default Subscription