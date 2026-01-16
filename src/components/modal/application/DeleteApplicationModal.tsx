"use client";
import DeleteButton from "@/components/form/DeleteButton";
import { useDeleteApplicationMutation } from "@/redux/features/application/applicationApi";
import { Modal } from "antd";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type TProps = {
  applicationId: string;
};

const DeleteApplicationModal = ({ applicationId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteApplication, { isLoading, isSuccess }] = useDeleteApplicationMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const handleDelete = () => {
    deleteApplication(applicationId);
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center justify-center cursor-pointer p-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
        aria-label="Delete application"
      >
        <Trash2 className="w-4 h-4" />
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
              <DeleteButton onClick={handleDelete} isLoading={isLoading}/>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteApplicationModal;
