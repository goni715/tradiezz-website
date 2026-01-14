"use client";
import { IApplication } from "@/types/application.type";
import ApplicationCard from "./ApplicationCard";


type TProps = {
  applications: IApplication[]
}

const ApplicationList = ({ applications }: TProps) => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {applications?.map((application, index) => (
          <ApplicationCard application={application} key={index} />
        ))}
      </div>
    </>
  );
};

export default ApplicationList;
