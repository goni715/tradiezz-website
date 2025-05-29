import React from 'react';
import { Download } from 'lucide-react';
import { ProfileData } from '@/types/profile.type';

interface ResumeDownloadProps {
  profileData: ProfileData;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ profileData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Download My Resume</h2>
      
      <div className="flex items-center gap-4 border border-gray-200 rounded-md p-3">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-100 rounded-md">
          <span className="text-red-600 font-semibold text-xs">PDF</span>
        </div>
        
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-700">{profileData.name}</p>
          <p className="text-xs text-gray-500">PDF</p>
        </div>
        
        <a 
          href={profileData.resumeUrl} 
          download
          className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Download resume"
        >
          <Download className="w-4 h-4 text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;