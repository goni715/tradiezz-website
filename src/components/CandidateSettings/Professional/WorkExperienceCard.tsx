"use client";

import EditWorkExperienceModal from "@/components/modal/EditWorkExperienceModal";
import DeleteWorkExperienceModal from "@/components/modal/DeleteWorkExperienceModal";
import { TWorkExperience } from "@/types/candidate.type";

const WorkExperienceCard = ({
  experience,
}: {
  experience: TWorkExperience;
}) => {
  return (
    <>
      <div
        key={experience._id}
        className="border rounded-md overflow-hidden border-gray-200"
      >
        <div className="bg-gray-50 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">{experience.job_title}</h3>
              <p className="text-sm text-gray-500">
                {experience.company_name} • {experience.location}
              </p>
            </div>
            <div className="flex space-x-2">
              <EditWorkExperienceModal experience={experience}/>
              <DeleteWorkExperienceModal experienceId={experience?._id}/>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(experience.start_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {experience.currently_work
              ? "Present"
              : experience.end_date
              ? new Date(experience.end_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              : "Present"}
          </div>
          <p className="text-sm">{experience.details}</p>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceCard;
