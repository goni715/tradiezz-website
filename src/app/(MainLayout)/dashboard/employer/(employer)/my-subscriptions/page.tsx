"use client";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import CustomPagination from "@/components/common/CustomPagination";
import MyJobsLoading from "@/components/loader/MyJobsLoading";
import SubscriptionHeader from "@/components/subscription/SubscriptionHeader";
import SubscriptionList from "@/components/subscription/SubscriptionList";
import { useGetSubscriptionsQuery } from "@/redux/features/subscription/subscriptionApi";
import React, { useState } from "react";

const MySubscriptionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);
  const { data, isLoading, isFetching, isError } = useGetSubscriptionsQuery([
    { name: 'page', value: currentPage },
    { name: 'limit', value: 9 },
    { name: 'searchTerm', value: searchTerm },
    { name: 'status', value: status }
  ]);
  const subscriptions = data?.data || [];
  const meta = data?.meta || {};

  let content: React.ReactNode;




  if (isLoading || isFetching) {
    content = <MyJobsLoading />
  }

  if (!isLoading && !isFetching && !isError && subscriptions?.length === 0) {
    content = (
      <>
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No subscriptions found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </>
    )
  }

  if (!isLoading && !isFetching && !isError && subscriptions?.length > 0) {
    content = (
      <>
        <SubscriptionList subscriptions={subscriptions} />
        {meta?.totalPages > 1 && (
         <CustomPagination
           meta={meta}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           pageSize={pageSize}
           setPageSize={setPageSize}
         />
        )}
      </>
    )
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />
  }




  return (
    <>
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <SubscriptionHeader
          meta={meta}
          setCurrentPage={setCurrentPage}
          setSearchTerm={setSearchTerm}
          status={status}
          setStatus={setStatus}
        />
        {content}
      </div>
    </>
  );

};

export default MySubscriptionsPage;
