import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { ViewMode } from '@/types/candidate.type';

interface ViewControlsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
}

const ViewControls: React.FC<ViewControlsProps> = ({
  viewMode,
  setViewMode,
  itemsPerPage,
  setItemsPerPage
}) => {
  return (
    <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-lg shadow-sm">
      <div className="flex space-x-2">
        <button
          onClick={() => setViewMode('list')}
          className={`p-1.5 rounded-md transition-colors cursor-pointer ${
            viewMode === 'list'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          aria-label="List view"
        >
          <List size={20} />
        </button>
        <button
          onClick={() => setViewMode('grid')}
          className={`p-1.5 rounded-md transition-colors cursor-pointer ${
            viewMode === 'grid'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          aria-label="Grid view"
        >
          <LayoutGrid size={20} />
        </button>
      </div>
      
      <div className="flex items-center space-x-3">
        <label htmlFor="itemsPerPage" className="text-sm text-gray-600 hidden sm:inline">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="text-sm border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
};

export default ViewControls;