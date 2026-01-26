"use client";
import { useState } from "react";
import ChatBox from "@/components/chatBox/ChatBox";

const MessagesPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState("1");

  return (
    <div className="w-full">
      <ChatBox
        selectedConversationId={selectedConversationId}
        onConversationSelect={setSelectedConversationId}
        otherUserName="Creative Director"
        currentUserName="You"
      />
    </div>
  );
};

export default MessagesPage;
