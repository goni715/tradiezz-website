"use client";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { useApplyJobMutation } from "@/redux/features/application/applicationApi";
import useUserInfo from "@/hooks/useUserInfo";
import { WarningToast } from "@/helper/ValidationHelper";

type TProps = {
  jobId: string;
};
const ApplyJobModal = ({ jobId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [applyJob, { isLoading, isSuccess }] = useApplyJobMutation();
  const userInfo = useUserInfo();

  useEffect(() => {
    if (!isLoading) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const handleClick = () => {
    applyJob({
      jobId,
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          if (!userInfo) {
            WarningToast("Please login as job seeker to proceed");
            return;
          } else if (userInfo.role !== "candidate") {
            WarningToast("Please login as job seeker to proceed");
            return;
          } else {
            setModalOpen(true);
          }
        }}
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
        closable={false}
      >
        <div className="rounded-md">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold">
                Are you sure, you want to apply?
              </h3>
            </div>
          </div>
          <div>
            <div className="flex justify-end gap-x-2 pt-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                No
              </button>
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="bg-green-500 cursor-pointer hover:bg-green-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
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

export default ApplyJobModal;
