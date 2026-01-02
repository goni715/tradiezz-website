"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Trash2} from "lucide-react";
import { useDeleteJobMutation } from "@/redux/features/job/jobApi";
import DeleteButton from "@/components/form/DeleteButton";

type TProps ={
  jobId:string;
}


const DeleteJobModal = ({ jobId } : TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteJob, { isLoading, isSuccess }] = useDeleteJobMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const handleDelete = () => {
    deleteJob(jobId);
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)} className="p-2 text-gray-400 hover:text-red-600 cursor-pointer hover:bg-red-50 rounded-lg transition-colors">
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

export default DeleteJobModal;
