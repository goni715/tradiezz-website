"use client";
import React, { useState } from 'react';
import { EducationLevel, ExperienceRange, ViewMode } from '@/types/candidate.type';
import CandidateList from '@/components/candidates/CandidateList';
import Pagination from '@/components/ui/Pagination';
import ViewControls from '@/components/ui/ViewControls';
import FilterSidebar from '@/components/ui/FilterSidebar';
import { nannies } from '@/data/candidate.data';

const FindCandidatePage = () =>{
  // Filters
  const [locationRadius, setLocationRadius] = useState<number>(25);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceRange | null>('3-4');
  const [selectedEducation, setSelectedEducation] = useState<EducationLevel>('all');
  
  // View controls
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // Nannies data
//  const [nannies, setNannies] = useState<Nanny[]>(nannyData);
  

  
  // Calculate total pages
  const totalPages = 3;
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Toggle save/bookmark
  const handleToggleSave = () => {
    // setNannies(prevNannies => 
    //   prevNannies.map(nanny => 
    //     nanny.id === id ? { ...nanny, isSaved: !nanny.isSaved } : nanny
    //   )
    // );
  };


  
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Skilled Talent</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className="w-full md:w-64">
            <FilterSidebar 
              locationRadius={locationRadius}
              setLocationRadius={setLocationRadius}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              selectedEducation={selectedEducation}
              setSelectedEducation={setSelectedEducation}
            />
          </div>
          
          {/* Main content with nanny listings */}
          <div className="flex-1">
            {/* <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-700">
                <span className="font-medium">{filteredNannies.length}</span> Candidates Found
              </p>
            </div> */}
            
            <ViewControls 
              viewMode={viewMode}
              setViewMode={setViewMode}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
            
            <CandidateList
              nannies={nannies} 
              viewMode={viewMode}
              onToggleSave={handleToggleSave}
            />
            
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindCandidatePage;