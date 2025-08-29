"use client";
import UploadCVModal from "@/components/modal/UploadCVModal";
import { useAppSelector } from "@/redux/hooks/hooks";
import {
  Eye,
} from "lucide-react";

const CVForm = () => {
  const { user } = useAppSelector((state) => state.user);

  
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = user?.resume as string;
    link.download = "document.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  
  return (
    <>
      <div className="bg-white rounded-lg p-6 shdow-md">
        <h1 className="text-lg font-semibold text-gray-900">Your CV/Resume</h1>

        <div className="p-4">
          {
            user?.resume && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Resume Item */}
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg relative">
              <div className="flex items-center justify-center">
                <div>
                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-opacity-50"
                  >
                    <Eye size={18} className="mr-2" />
                    View Resume
                  </button>
                </div>
              </div>        
            </div>
          </div>
            )
          }

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <UploadCVModal title={user?.resume ? "Update" : "Add"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVForm;
