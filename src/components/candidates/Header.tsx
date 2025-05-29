import React from 'react';
import { UserCircle, Bookmark } from 'lucide-react';
import Image from 'next/image';
import { ProfileData } from '@/types/profile.type';

interface HeaderProps {
  profileData: ProfileData;
}

const Header: React.FC<HeaderProps> = ({ profileData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        {profileData.avatar ? (
          <Image
            src={profileData.avatar} 
            alt={profileData.name}
            width={600}
            height={600}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-100"
          />
        ) : (
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
          </div>
        )}
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{profileData.name}</h1>
          <p className="text-sm md:text-base text-gray-500">{profileData.title}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <button 
          className="flex items-center cursor-pointer justify-center gap-1 px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Save profile"
        >
          <Bookmark className="w-4 h-4" />
          <span className="hidden sm:inline">Save</span>
        </button>
        {/* <button 
          className="flex items-center justify-center gap-1 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Profile</span>
        </button> */}
      </div>
    </div>
  );
};

export default Header;