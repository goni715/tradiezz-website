/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import AddWorkExperienceModal from "@/components/modal/AddWorkExperienceModal"
import { useAppSelector } from "@/redux/hooks/hooks"
import WorkExperienceCard from "./WorkExperienceCard"


const WorkExperienceList = () =>{
  const { user } = useAppSelector((state) => state.user);
  
  return (
    <div className="space-y-6 py-4 bg-white p-4 md:p-6 mb-8 shadow-md rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg">Previous Work Experience</h2>
      </div>

      {/* List of experiences */}
      {user?.work_experience?.length > 0 && (
        <div className="space-y-4">
          {user?.work_experience?.map((experience:any, index:number) => (
            <WorkExperienceCard experience={experience} key={index} />
          ))}
        </div>
      )}

      <AddWorkExperienceModal />
    </div>
  );
}


export default WorkExperienceList;