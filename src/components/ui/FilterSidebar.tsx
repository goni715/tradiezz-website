/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EducationLevel, ExperienceRange } from '@/types/candidate.type';
import { tradeOptions } from '@/data/options';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex w-full justify-between items-center text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface FilterSidebarProps {
  locationRadius: number;
  setLocationRadius: (radius: number) => void;
  selectedExperience: ExperienceRange | null;
  setSelectedExperience: (experience: ExperienceRange | null) => void;
  selectedEducation: EducationLevel;
  setSelectedEducation: (education: EducationLevel) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  locationRadius,
  setLocationRadius,
  selectedExperience,
  setSelectedExperience,
  selectedEducation,
  setSelectedEducation
}) => {

   const filterOptions: { label: string; value: string }[] = [
      { label: 'Both', value: 'both' },
      { label: 'Self-Employed', value: 'Self-Employed' },
      { label: 'Seeking Permanent Jobs', value: 'Seeking Permanent Jobs' },
    ];

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow p-5 h-fit">
        <div className="rounded-lg">
            <h2 className="font-medium mb-3">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="search here..."
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pl-8 text-sm"
                //value={searchQuery}
                //onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-2.5 top-2.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

      <FilterSection title="Category">
        {tradeOptions.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              id={`edu-${option.value}`}
              name="education"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              // checked={selectedEducation === option.value}
            />
            <label htmlFor={`edu-${option.value}`} className="ml-2 block text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </FilterSection>
      
      <FilterSection title="Filter By">
        {filterOptions.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`exp-${option.value}`}
              name="experience"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={`exp-${option.value}`} className="ml-2 block text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </FilterSection>
      
      
    </aside>
  );
};

export default FilterSidebar;