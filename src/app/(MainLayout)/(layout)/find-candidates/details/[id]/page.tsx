"use client"
import React from 'react';
import { mockProfileData } from '@/types/profile.type';
import ResumeDownload from '@/components/candidates/ResumeDownload';
import SocialMedia from '@/components/candidates/SocialMedia';
import ContactInfo from '@/components/candidates/ContactInfo';
import EducationExperience from '@/components/candidates/EducationExperience';
import PersonalInfo from '@/components/candidates/PersonalInfo';
import Experience from '@/components/candidates/Experience';
import Skills from '@/components/candidates/Skills';
import CareerObjective from '@/components/candidates/CareerObjective';
import Header from '@/components/candidates/Header';

const CandidateDetailsPage = ()=> {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="space-y-6">
          {/* Header Section */}
          <Header profileData={mockProfileData} />
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <CareerObjective profileData={mockProfileData} />
              <Skills profileData={mockProfileData} />
              <Experience profileData={mockProfileData} />
              <SocialMedia profileData={mockProfileData} />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <PersonalInfo profileData={mockProfileData} />
              <EducationExperience profileData={mockProfileData} />
              <ResumeDownload profileData={mockProfileData} />
              <ContactInfo profileData={mockProfileData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetailsPage;