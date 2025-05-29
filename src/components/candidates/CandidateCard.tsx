"use client"
import React from 'react';
import { MapPin, Bookmark, BookmarkCheck } from 'lucide-react';
import { Nanny } from '@/types/candidate.type';
import Image from 'next/image';
import CandidateButton from '../ui/CandidateButton';
import { useRouter } from 'next/navigation';

interface NannyCardProps {
  nanny: Nanny;
  viewMode: 'list' | 'grid';
  onToggleSave: (id: number) => void;
}

const CandidateCard: React.FC<NannyCardProps> = ({ nanny, viewMode, onToggleSave }) => {

  const router = useRouter();

  
  if (viewMode === 'list') {
    return (
      <div className={`
        p-4 rounded-lg transition-all duration-300 border
        hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50
        flex items-center gap-4
      `}>
        <div className="flex-shrink-0">
          <Image
            src={nanny.imageUrl} 
            alt={nanny.name} 
            width={600}
            height={600}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{nanny.name}</h3>
              <p className="text-sm text-gray-500">{nanny.title}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin size={12} className="mr-1" />
                <span>{nanny.location}</span>
                <span className="mx-2">•</span>
                <span>{nanny.experience} Years experience</span>
              </div>
            </div>
            
            <button 
              onClick={() => onToggleSave(nanny.id)}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
            >
              {nanny.isSaved ? 
                <BookmarkCheck className="h-5 w-5 text-blue-500" /> : 
                <Bookmark className="h-5 w-5" />
              }
            </button>
          </div>
        </div>
        
        <CandidateButton
          variant="outline" 
          size="sm" 
          onClick={()=>router.push(`/find-candidates/details/${nanny.id}`)}
          className={`hover:bg-yellow-500 text-gray-900 cursor-pointer`}
        >
          View Profile
        </CandidateButton>
      </div>
    );
  }
  
  return (
    <div className="
      p-4 rounded-lg transition-all duration-300 border h-full flex flex-col
    hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50">
      <div className="relative">
        <Image
          src={nanny.imageUrl} 
          alt={nanny.name}
          width={600}
          height={600} 
          className="w-full h-48 rounded-lg object-cover mb-3"
        />
        <button 
          onClick={() => onToggleSave(nanny.id)}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-gray-600 hover:text-blue-500 transition-colors"
          aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
        >
          {nanny.isSaved ? 
            <BookmarkCheck className="h-5 w-5 text-blue-500" /> : 
            <Bookmark className="h-5 w-5" />
          }
        </button>
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-900">{nanny.name}</h3>
        <p className="text-sm text-gray-500">{nanny.title}</p>
        <div className="flex items-center text-xs text-gray-500 mt-1 mb-4">
          <MapPin size={12} className="mr-1" />
          <span>{nanny.location}</span>
          <span className="mx-2">•</span>
          <span>{nanny.experience} Years experience</span>
        </div>
      </div>
      
      <CandidateButton 
        variant="outline" 
        size="sm" 
        onClick={()=>router.push(`/find-candidates/details/${nanny.id}`)}
        className={`w-full mt-2 hover:bg-yellow-500 text-gray-900 cursor-pointer`}
      >
        View Profile
      </CandidateButton>
    </div>
  );
};

export default CandidateCard;