import { Modal } from "antd";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { FiEdit } from "react-icons/fi";
import CustomSelect from "../../form/CustomSelect";
import SubmitButton from "../../form/SubmitButton";
import { useUpdateApplicationMutation } from "@/redux/features/application/applicationApi";
import { applicationStatusOptions } from "@/data/application.data";
import { applicationStatusSchema } from "@/schema/application.schema";
import { TApplicationStatus } from "@/types/application.type";

type TFormValues = z.infer<typeof applicationStatusSchema>;

type TProps = {
  applicationId: string;
  status: TApplicationStatus;
};

const statusColors = {
  applied: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  shortlisted: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
  },
  accepted: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  rejected: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  cancelled: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
  },
};

const UpdateApplicationStatusModal = ({ applicationId, status }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [changeStatus, { isLoading, isSuccess }] =
    useUpdateApplicationMutation();
  const { handleSubmit, control } = useForm<TFormValues>({
    resolver: zodResolver(applicationStatusSchema),
    defaultValues: {
      status,
    },
  });

  //if success
  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    changeStatus({
      id: applicationId,
      data,
    });
  };

  return (
    <>
      <div
        onClick={()=> setModalOpen(true)}
        className={`px-3 py-2 flex items-center gap-2 cursor-pointer rounded-full text-sm justify-center font-medium border ${statusColors[status].bg} ${statusColors[status].text} ${statusColors[status].border}`}
      >
        <span className="capitalize">{status}</span>
        <FiEdit className="w-4 h-4 opacity-60 hover:opacity-100" />
      </div>
      
      <Modal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
      >
        <div className="w-full mx-auto">
          <div className="bg-white rounded-xl overflow-hidden transition-all duration-300">
            <div className="p-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Update Order Status
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CustomSelect
                  label="Status"
                  name="status"
                  control={control}
                  options={applicationStatusOptions}
                  blankOption={false}
                />
                <SubmitButton isLoading={isLoading}>Save Change</SubmitButton>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateApplicationStatusModal;
