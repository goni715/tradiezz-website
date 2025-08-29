"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useRemoveWorkExperienceMutation } from "@/redux/features/user/userApi";
import { CgSpinnerTwo } from "react-icons/cg";

type TProps = {
  experienceId: string;
};

const DeleteWorkExperienceModal = ({ experienceId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [removeWorkExperience, { isLoading, isSuccess }] =
    useRemoveWorkExperienceMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const handleDelete = () => {
    removeWorkExperience(experienceId);
  };

  return (
    <>
      <button
        type="button"
        className="p-1 text-red-500 hover:text-red-600 rounded-full hover:bg-gray-100 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete</span>
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
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                  </>
                ) : (
                  "Yes"
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteWorkExperienceModal;
