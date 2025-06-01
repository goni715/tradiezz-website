"use client";

import { favouriteJobs } from "@/data/jobList.data";
import BlogPagination from "@/components/BlogList/BlogPagination";
import { useState } from "react";
import FavouriteJobCard from "./FavouriteJobCard";

const FavouriteJobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  const totalPages = 5;

  return (
    <>
      <div className="pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {favouriteJobs.map((job) => (
            <FavouriteJobCard key={job.id} job={job} />
          ))}
        </div>
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default FavouriteJobList;
