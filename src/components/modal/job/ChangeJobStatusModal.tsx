import { Modal } from "antd";
import { useEffect, useState } from "react";
import DeleteButton from "../../form/DeleteButton";
import { TVisibility } from "@/types/global.type";
import { useUpdateJobMutation } from "@/redux/features/job/jobApi";
import { CheckCircle, Clock, XCircle } from "lucide-react";

type TProps ={
  jobId:string;
  status: TVisibility;
}

const ChangeJobStatusModal = ({ jobId, status }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ changeStatus, { isLoading, isSuccess }] = useUpdateJobMutation();

  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess]);


  const handleClick = () => {
    changeStatus({
      id: jobId,
      data: {
        status: status === "visible" ? "hidden" : "visible"
      }
    });
  };


  const getStatusIcon = (status: string) => {
    switch (status) {
      case "visible":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "hidden":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => setModalOpen(true)}>
        {getStatusIcon(status)}
      </div>
      <Modal
        title={`Are you sure, you want to ${status==="visible" ? "hide" : "make visible"}?`}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        closable={false}
      >
        <div className="flex justify-end px-4 gap-x-3">
          <button onClick={()=>setModalOpen(false)} className="bg-black text-white px-4 py-1 rounded-md cursor-pointer">No</button>
          <DeleteButton onClick={handleClick} isLoading={isLoading}/>
        </div>
      </Modal>
    </>
  );
};

export default ChangeJobStatusModal;
