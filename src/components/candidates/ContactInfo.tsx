import React from 'react';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';
import { ProfileData } from '@/types/profile.type';

interface ContactInfoProps {
  profileData: ProfileData;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ profileData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <p className="text-xs text-gray-500">WEBSITE</p>
            <a 
              href={`https://${profileData.website}`} 
              className="text-sm font-medium text-blue-600 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {profileData.website}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <p className="text-xs text-gray-500">LOCATION</p>
            <p className="text-sm font-medium text-gray-700">{profileData.location.city}, {profileData.location.state} {profileData.location.zipCode}</p>
            <p className="text-xs text-gray-500 mt-1">{profileData.location.address}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <p className="text-xs text-gray-500">PHONE</p>
            <a 
              href={`tel:${profileData.phone}`} 
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {profileData.phone}
            </a>
            
            {profileData.secondaryPhone && (
              <>
                <p className="text-xs text-gray-500 mt-2">SECONDARY PHONE</p>
                <a 
                  href={`tel:${profileData.secondaryPhone}`} 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {profileData.secondaryPhone}
                </a>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <p className="text-xs text-gray-500">EMAIL ADDRESS</p>
            <a 
              href={`mailto:${profileData.email}`} 
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              {profileData.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;