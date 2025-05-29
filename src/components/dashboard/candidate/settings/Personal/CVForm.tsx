"use client";
import {
  File,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const CVForm = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-white rounded-lg">
        <h1 className="text-lg font-medium text-gray-900">Your CV/Resume</h1>

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Resume Item */}
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded">
                    <File className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Product Designer
                    </p>
                    <p className="text-sm text-gray-500">4.7 MB</p>
                    <div className="h-1 w-1 bg-red-500 rounded-full mt-1"></div>
                  </div>
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-3 top-12 bg-white shadow-lg rounded-md border border-gray-200 w-40 z-10">
                  <div className="py-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Add Resume Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Plus className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium">Add CV/Resume</p>
                <p className="text-xs text-gray-500">
                  Browse file or drop here, only pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVForm;
