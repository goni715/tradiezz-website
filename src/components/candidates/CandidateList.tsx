"use client"
import React from 'react';
import { Nanny, ViewMode } from '@/types/candidate.type';
import CandidateCard from './CandidateCard';

interface CandidateListProps {
  nannies: Nanny[];
  viewMode: ViewMode;
  onToggleSave: (id: number) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ nannies, viewMode, onToggleSave }) => {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {nannies.map(nanny => (
          <CandidateCard 
            key={nanny.id} 
            nanny={nanny} 
            viewMode={viewMode}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {nannies.map(nanny => (
        <CandidateCard 
          key={nanny.id} 
          nanny={nanny} 
          viewMode={viewMode}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
};

export default CandidateList;