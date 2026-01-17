import { Modal } from "antd";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { FiEdit } from "react-icons/fi";
import CustomSelect from "../../form/CustomSelect";
import SubmitButton from "../../form/SubmitButton";
import { useUpdateApplicationMutation } from "@/redux/features/application/applicationApi";
import { workStatusOptions } from "@/data/application.data";
import { workStatusSchema } from "@/schema/application.schema";
import { TApplicationStatus, TWorkStatus } from "@/types/application.type";
import { CheckCircle2, Clock, Loader, PauseCircle } from "lucide-react";

type TFormValues = z.infer<typeof workStatusSchema>;

export const workStatusColors: Record<
  "pending" | "running" | "stopped" | "completed",
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  pending: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  running: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  stopped: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  completed: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
};

const workStatusIcons = {
  pending: <Clock className="w-4 h-4 text-yellow-500" />,
  running: <Loader className="w-4 h-4 animate-spin text-blue-500" />,
  stopped: <PauseCircle className="w-4 h-4 text-red-500" />,
  completed: <CheckCircle2 className="w-4 h-4 text-green-500" />,
};

type TProps = {
  applicationId: string;
  workStatus: TWorkStatus;
  status: TApplicationStatus;
};

const UpdateWorkStatusModal = ({
  applicationId,
  workStatus,
  status,
}: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [changeStatus, { isLoading, isSuccess }] =
    useUpdateApplicationMutation();
  const { handleSubmit, control } = useForm<TFormValues>({
    resolver: zodResolver(workStatusSchema),
    defaultValues: {
      workStatus,
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
      <button
        onClick={() => setModalOpen(true)}
        disabled={status !== "accepted"}
        className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-full text-sm disabled:cursor-not-allowed font-medium border transition-all ${workStatusColors[workStatus].bg} ${workStatusColors[workStatus].text} ${workStatusColors[workStatus].border} hover:shadow-md`}
      >
        {workStatusIcons[workStatus]}
        <span className="capitalize">{workStatus}</span>
        {status === "accepted" && (
          <FiEdit className="w-4 h-4 opacity-60 hover:opacity-100" />
        )}
      </button>

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
                  name="workStatus"
                  control={control}
                  options={workStatusOptions}
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

export default UpdateWorkStatusModal;
