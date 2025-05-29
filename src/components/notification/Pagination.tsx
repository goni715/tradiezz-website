"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  totalItems,
  itemsPerPage,
  onPageChange 
}: PaginationProps) {
  const [visiblePages, setVisiblePages] = useState<(number | "...")[]>([]);
  
  useEffect(() => {
    // Calculate visible page numbers
    const calculateVisiblePages = () => {
      let pages: (number | "...")[] = [];
      
      if (totalPages <= 7) {
        // If we have 7 or fewer pages, show all of them
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      } else {
        // Always include first and last page
        pages.push(1);
        
        // Calculate middle pages
        if (currentPage <= 3) {
          // Near the beginning
          pages.push(2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          // Near the end
          pages.push("...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          // In the middle
          pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
        }
      }
      
      return pages;
    };
    
    setVisiblePages(calculateVisiblePages());
  }, [currentPage, totalPages]);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="text-sm text-gray-700 mb-4 sm:mb-0">
        Showing <span className="font-medium">{startItem}</span>-
        <span className="font-medium">{endItem}</span> out of{' '}
        <span className="font-medium">{totalItems}</span>
      </div>
      
      <nav className="flex items-center space-x-1" aria-label="Pagination">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100'
          } transition-colors duration-150`}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        
        {visiblePages.map((page, idx) => (
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === page
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-150`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          } transition-colors duration-150`}
        >
          <span className="sr-only">Next</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}