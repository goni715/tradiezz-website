import { ProfileData } from '@/types/profile.type';
import React from 'react';

interface ExperienceProps {
  profileData: ProfileData;
}

const Experience: React.FC<ExperienceProps> = ({ profileData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 uppercase mb-4">Experience:</h2>
      <div className="space-y-4">
        {profileData.experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
            <h3 className="font-medium text-gray-800">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <ul className="mt-2 space-y-1">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-600 text-sm">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;