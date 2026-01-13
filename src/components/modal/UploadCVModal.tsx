"use client";

import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, File, Plus, Trash2, Upload } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CgSpinnerTwo } from "react-icons/cg";
import { applyJobSchema } from "@/schema/job.schema";
import { useUploadCVMutation } from "@/redux/features/user/userApi";

type TFormValues = z.infer<typeof applyJobSchema>;

type TProps = {
  title: string;
};

const UploadCVModal = ({ title }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [uploadCV, { isLoading, isSuccess }] = useUploadCVMutation();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(applyJobSchema),
  });

  /* ===================== FILE HANDLERS ===================== */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const allowedTypes = ["application/pdf"];

    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setValue("icon", "pdf");
      clearErrors("icon");
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
    clearErrors("icon");
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
    setValue("icon", "");
    setError("icon", {
      type: "manual",
      message: "Please upload a PDF resume",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const getFileSize = (size: number) => {
    if (size < 1024) return `${size} bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  /* ===================== SUBMIT ===================== */

  const onSubmit: SubmitHandler<TFormValues> = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("cv", file);

    uploadCV(formData);
  };

  /* ===================== UI ===================== */

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-white border border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50"
      >
        <div className="text-center">
          <div className="mb-2 flex justify-center">
            <Plus className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-sm font-medium">{title} CV/Resume</p>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onCancel={() => {
          setFile(null);
          setValue("icon", "");
          clearErrors("icon");
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
        centered
      >
        <div className="p-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Upload CV (PDF only)
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf"
              />

              {!file ? (
                <div
                  onClick={triggerFileInput}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all
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
                  <div className="flex flex-col items-center text-center">
                    {uploadStatus === "error" ? (
                      <>
                        <AlertCircle className="h-6 w-6 text-red-500 mb-2" />
                        <p className="text-sm font-medium text-red-600">
                          Invalid file format
                        </p>
                        <p className="text-xs text-gray-500">
                          Please upload a PDF file
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload className="h-6 w-6 text-blue-600 mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          Drag and drop your CV here
                        </p>
                        <p className="text-xs text-gray-500">
                          or{" "}
                          <span className="text-blue-600 font-medium">
                            browse files
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          PDF files only (max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center">
                    <File className="h-5 w-5 text-blue-600 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {getFileSize(file.size)}
                      </p>
                    </div>
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {errors?.icon && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.icon.message}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full px-6 py-2.5 bg-gray-100 border border-gray-300 rounded-md"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-2.5 bg-primary text-white rounded-md flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UploadCVModal;
