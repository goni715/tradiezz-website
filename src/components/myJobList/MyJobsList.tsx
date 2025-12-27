"use client";
import { IMyJob } from "@/types/job.type";
import MyJobItem from "./MyJobItem";


type TProps = {
  jobs: IMyJob[]
}

const MyJobsList = ({ jobs }: TProps) => {

  return (
    <>
      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job, index) => (
          <MyJobItem job={job} key={index} />
        ))}
      </div>
    </>
  );
};

export default MyJobsList;
