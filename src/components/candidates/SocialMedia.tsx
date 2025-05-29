import React from 'react';
import { Facebook, Twitter, Linkedin, Compass, Instagram, Youtube } from 'lucide-react';
import { ProfileData } from '@/types/profile.type';

interface SocialMediaProps {
  profileData: ProfileData;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ profileData }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-4 h-4 text-white" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 text-white" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-white" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-white" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-white" />;
      default:
        return <Compass className="w-4 h-4 text-white" />;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'bg-[#1877F2]';
      case 'twitter':
        return 'bg-[#1DA1F2]';
      case 'linkedin':
        return 'bg-[#0A66C2]';
      case 'instagram':
        return 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]';
      case 'youtube':
        return 'bg-[#FF0000]';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Follow me Social Media</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.socialMedia.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${getSocialColor(
              social.platform
            )} w-10 h-10 rounded-md flex items-center justify-center hover:opacity-90 transition-opacity`}
            aria-label={`${social.platform} profile`}
          >
            {getSocialIcon(social.platform)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;