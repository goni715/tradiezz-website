import { ProfileData } from '@/types/profile.type';
import React from 'react';

interface CareerObjectiveProps {
  profileData: ProfileData;
}

const CareerObjective: React.FC<CareerObjectiveProps> = ({ profileData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 uppercase mb-4">Career Objective:</h2>
      <p className="text-gray-600 leading-relaxed">
        {profileData.careerObjective}
      </p>
    </div>
  );
};

export default CareerObjective;