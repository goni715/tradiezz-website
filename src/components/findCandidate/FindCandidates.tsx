"use client";
import React, { useState } from "react";
import {
  EducationLevel,
  ExperienceRange,
  ViewMode,
} from "@/types/candidate.type";
import ViewControls from "@/components/ui/ViewControls";
import { ICategory } from "@/types/category.type";
import CandidateFilter from "./CandidateFilter";
import FindCandidateLoading from "../loader/FindCandidateLoading";
import { useGetFindCandidatesQuery } from "@/redux/features/candidate/candidateApi";
import ServerErrorCard from "../card/ServerErrorCard";
import CandidateNotFoundCard from "../card/CandidateNotFoundCard";
import CandidateList from "./CandidateList";
import CustomPagination from "../common/CustomPagination";

type TProps = {
  categories: ICategory[];
};

const FindCandidates = ({ categories }: TProps) => {
  const [locationRadius, setLocationRadius] = useState<number>(25);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceRange | null>("3-4");
  const [selectedEducation, setSelectedEducation] =
    useState<EducationLevel>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage,setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);

  const { data, isLoading, isError } = useGetFindCandidatesQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize }
  ]);

  const candidates = data?.data || [];
  const meta = data?.meta || {};

  // Handle page change
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // Toggle save/bookmark
  // const handleToggleSave = () => {
  //   // setNannies(prevNannies =>
  //   //   prevNannies.map(nanny =>
  //   //     nanny.id === id ? { ...nanny, isSaved: !nanny.isSaved } : nanny
  //   //   )
  //   // );
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Find Skilled Talent
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className="w-full md:w-64">
            <CandidateFilter
              locationRadius={locationRadius}
              setLocationRadius={setLocationRadius}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              selectedEducation={selectedEducation}
              setSelectedEducation={setSelectedEducation}
              categories={categories}
              setCurrentPage={setCurrentPage}
              setSearchTerm={setSearchTerm}
            />
          </div>

          {/* Main content with nanny listings */}
          <div className="flex-1">
            <ViewControls
              viewMode={viewMode}
              setViewMode={setViewMode}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
            {isLoading ? (
              <>
                <FindCandidateLoading />
              </>
            ) : (
              <>
                {!isLoading && isError ? (
                  <ServerErrorCard />
                ) : (
                  <>
                    {candidates?.length > 0 ? (
                      <>
                        <CandidateList
                          candidates={candidates}
                          viewMode={viewMode}
                        />
                        {meta?.totalPages > 1 && (
                          <CustomPagination
                            meta={meta}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageSize={pageSize}
                            setPageSize={setPageSize}
                          />
                        )}
                      </>
                    ) : (
                      <CandidateNotFoundCard />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindCandidates;
