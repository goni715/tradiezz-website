"use client";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { MessageCircle, SendHorizonal } from "lucide-react";
import { AuthContext } from "@/context/AuthContext";
import { Socket } from "socket.io-client";
import { getUserDetails } from "@/helper/SessionHelper";
import { CgSpinnerTwo } from "react-icons/cg";
import { SuccessToast } from "@/helper/ValidationHelper";

type TProps = {
  partnerId: string;
};

const SendMessageModal = ({ partnerId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { socket } = useContext(AuthContext);
  const user = getUserDetails();
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      (socket as Socket).emit("createChat", {
        senderId: user?.userId,
        receiverId: partnerId,
        text: inputValue.trim(),
      });

      setIsLoading(true);

      setTimeout(() => {
        setModalOpen(false);
        setInputValue("");
        setIsLoading(true);
        SuccessToast("Message sent success");
        setIsLoading(false);
       // router.push(`/dashboard/employer/messages`);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md
                       bg-primary text-white hover:bg-[#152a61]
                       transition text-sm shrink-0"
      >
        <MessageCircle className="w-4 h-4" />
        Message
      </button>

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        centered
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            ✉️ Send a Message
          </h3>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="flex items-center gap-1 px-4 py-2.5 bg-blue-600 text-white cursor-pointer rounded-md shadow-sm hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                   <CgSpinnerTwo className="animate-spin" fontSize={16} />
                   Sending...
                </>
              ) : (
                <>
                  <SendHorizonal size={16} />
                  Send
                </>
              )}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SendMessageModal;
