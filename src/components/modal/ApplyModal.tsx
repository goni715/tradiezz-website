"use client";
import { Modal } from "antd";
import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  File,
  Trash2,
  Upload,
} from "lucide-react";
import { Button } from "../ui/button";

const ApplyModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setUploadStatus("success");
    } else {
      setFile(null);
      setUploadStatus("error");
      setTimeout(() => setUploadStatus("idle"), 3000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      validateAndSetFile(droppedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploadStatus("idle");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const getFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="w-full md:w-auto cursor-pointer bg-primary hover:bg-[#152a61] text-white flex items-center gap-2"
      >
        Apply Now
        <span className="ml-1">→</span>
      </Button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        centered
      >
        <div className="p-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Apply Job</h2>

          <form>
            {/* CV Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload CV
              </label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />

              {!file ? (
                <div
                  onClick={triggerFileInput}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-6 transition-all duration-200 cursor-pointer group
                    ${
                      isDragging
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/50"
                    }
                    ${
                      uploadStatus === "error" ? "border-red-500 bg-red-50" : ""
                    }
                  `}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    {uploadStatus === "error" ? (
                      <>
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                          <AlertCircle className="h-6 w-6 text-red-500" />
                        </div>
                        <p className="text-sm font-medium text-red-600 mb-1">
                          Invalid file format
                        </p>
                        <p className="text-xs text-gray-500">
                          Please upload a PDF or Word document
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                          <Upload className="h-6 w-6 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                          Drag and drop your CV here
                        </p>
                        <p className="text-xs text-gray-500">
                          or{" "}
                          <span className="text-blue-600 font-medium">
                            browse files
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          PDF or Word documents only (max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <File className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {getFileSize(file.size)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col md:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 w-full bg-gray-100 border cursor-pointer border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 w-full py-2.5 bg-primary hover:bg-[#2b4773] cursor-pointer text-white font-medium rounded-md transition-colors flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ApplyModal;
