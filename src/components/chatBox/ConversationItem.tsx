import React, { useContext } from "react";
import Image from "next/image";
import { IChat } from "@/types/chat.type";
import { format } from "timeago.js";
import { AuthContext } from "@/context/AuthContext";

type TProps = {
  conversation: IChat;
  selectedConversationId: string;
  setSelectedConversationId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedReceiverId: React.Dispatch<React.SetStateAction<string>>;
  setOtherUserName: React.Dispatch<React.SetStateAction<string>>;
  setOtherUserAvatar: React.Dispatch<React.SetStateAction<string>>;
  setShowConversationList: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConversationItem = ({
  conversation,
  selectedConversationId,
  setSelectedConversationId,
  setSelectedReceiverId,
  setOtherUserName,
  setOtherUserAvatar,
  setShowConversationList,
}: TProps) => {
  const { onlineUsers } = useContext(AuthContext);
  const isOnline = onlineUsers?.includes(conversation.receiverId);

  return (
    <>
      <div
        onClick={() => {
          setSelectedConversationId(conversation._id);
          setSelectedReceiverId(conversation.receiverId);
          setOtherUserName(conversation.fullName);
          setOtherUserAvatar(
            conversation.profileImg || "/images/profile_placeholder.png",
          );
          setShowConversationList(false);
        }}
        className={`p-3 rounded-lg cursor-pointer transition-colors ${
          selectedConversationId === conversation._id
            ? "bg-primary/10 hover:bg-primary/15"
            : "hover:bg-muted"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="relative">
            <Image
              src={conversation.profileImg || "/images/profile_placeholder.png"}
              alt={"chat_img"}
              className="h-12 w-12 rounded-full shrink-0 object-cover"
              height={600}
              width={600}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/profile_placeholder.png";
              }}
            />
            {isOnline && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground truncate">
                {conversation.fullName}
              </p>
              <span className="text-xs text-muted-foreground shrink-0">
                {format(conversation.updatedAt)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground truncate mt-1">
              {conversation.lastMessage}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationItem;
