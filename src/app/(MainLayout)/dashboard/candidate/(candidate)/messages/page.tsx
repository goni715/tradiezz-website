"use client";
import ChatBox from "@/components/chatBox/ChatBox";

const MessagesPage = () => {
 

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
      <ChatBox/>
    </div>
  );
};

export default MessagesPage;
