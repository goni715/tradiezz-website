import React from "react";
import Image from "next/image";
import { IChat } from "@/types/chat.type";

type TProps = {
  conversation: IChat;
  selectedConversationId: string;
  setSelectedConversationId: React.Dispatch<React.SetStateAction<string>>;
  setOtherUserName: React.Dispatch<React.SetStateAction<string>>;
  setOtherUserAvatar: React.Dispatch<React.SetStateAction<string>>;
  setShowConversationList: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConversationItem = ({
  conversation,
  selectedConversationId,
  setSelectedConversationId,
  setOtherUserName,
  setOtherUserAvatar,
  setShowConversationList
}: TProps) => {
  return (
    <>
      <div
        onClick={() => {
          setSelectedConversationId(conversation._id);
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
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground truncate">
                {conversation.fullName}
              </p>
              {/* <span className="text-xs text-muted-foreground shrink-0">
                              {formatConversationTime(conversation.updatedAt)}
                            </span> */}
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
