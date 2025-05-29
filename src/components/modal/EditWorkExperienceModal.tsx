"use client";
import { Modal } from "antd";
import { useState } from "react";
import { Pencil, X } from "lucide-react";

const EditWorkExperienceModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const current = false;

  return (
    <>
      <button
        type="button"
        className="p-1 text-blue-500 hover:text-blue-600 rounded-full hover:bg-gray-100 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <Pencil className="h-4 w-4" />
        <span className="sr-only">Edit</span>
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        centered
        closable={false}
      >
        <div className="rounded-md">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Edit Work Experience</h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 text-gray-500 rounded-full bg-gray-200 cursor-pointer hover:bg-primary hover:text-white duration-200"
              >
                <X className="h-6 w-6 text-2xl" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
          <div>
            <div className="py-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="job_title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title
                  </label>
                  <input
                    id="job_title"
                    name="job_title"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g. Software Engineer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g. Tech Solutions Ltd."
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g. San Francisco, CA"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="from_date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    id="from_date"
                    name="from_date"
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="to_date"
                    className={`block text-sm font-medium ${
                      current ? "text-gray-400" : "text-gray-700"
                    }`}
                    // className={`block text-sm font-medium ${
                    //   currentExperience.current ? "text-gray-400" : "text-gray-700"
                    // }`}
                  >
                    End Date
                  </label>
                  <input
                    id="to_date"
                    name="to_date"
                    type="date"
                    // className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                    //   current
                    //     ? "bg-gray-100 text-gray-400"
                    //     : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    // }`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    // value={currentExperience.to_date}
                    // onChange={handleInputChange}
                    // disabled={currentExperience.current}
                    // required={!currentExperience.current}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="current"
                 // checked={current}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="current" className="text-sm text-gray-700">
                  I currently work here
                </label>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your responsibilities and achievements"
                  rows={4}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                 onClick={() => setModalOpen(false)}
                className="px-4 py-2 w-full cursor-pointer border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                 onClick={() => setModalOpen(false)}
                className="px-4 cursor-pointer py-2 w-full border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditWorkExperienceModal;
