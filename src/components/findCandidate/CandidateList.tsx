"use client"
import React from 'react';
import { ICandidate, ViewMode } from '@/types/candidate.type';
import CandidateCard from './CandidateCard';

interface CandidateListProps {
  candidates: ICandidate[];
  viewMode: ViewMode;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {candidates?.map((candidate, index) => (
          <CandidateCard 
            key={index} 
            candidate={candidate} 
            viewMode={viewMode}
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {candidates?.map((candidate, index) => (
        <CandidateCard 
          key={index} 
          candidate={candidate} 
          viewMode={viewMode} 
        />
      ))}
    </div>
  );
};

export default CandidateList;