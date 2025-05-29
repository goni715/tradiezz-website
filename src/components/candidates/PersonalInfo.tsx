import React from 'react';
import { Calendar, Flag } from 'lucide-react';
import { ProfileData } from '@/types/profile.type';

interface PersonalInfoProps {
  profileData: ProfileData;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ profileData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500">DATE OF BIRTH</p>
            <p className="text-sm font-medium text-gray-700">{profileData.dateOfBirth}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Flag className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500">NATIONALITY</p>
            <p className="text-sm font-medium text-gray-700">{profileData.nationality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;