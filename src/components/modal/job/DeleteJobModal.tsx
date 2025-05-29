"use client";
import { Modal } from "antd";
import { useState } from "react";
import { Trash2} from "lucide-react";

const DeleteJobModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Trash2 onClick={() => setModalOpen(true)}className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-red-500 cursor-pointer" /> 
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
              <h3 className="text-lg sm:text-xl font-semibold">
                Are you sure, you want to delete?
              </h3>
            </div>
          </div>
          <div>
            <div className="flex justify-end space-x-2 pt-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                No
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 cursor-pointer py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteJobModal;
