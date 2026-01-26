import useUserInfo from "@/hooks/useUserInfo";
import { IMessage } from "@/types/message.type";
import Image from "next/image";
import React from "react";

type TProps = {
  message: IMessage;
  otherUserName: string;
  otherUserAvatar: string;
};

const MessageItem = ({ message, otherUserName, otherUserAvatar }: TProps) => {
  const userInfo = useUserInfo();
  const currentUserId = userInfo?.userId;
  const currentUserAvatar = userInfo?.profileImg || "/images/profile_placeholder.png";

  // const formatTime = (date: Date) => {
  //   return date.toLocaleTimeString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //   });
  // };


  return (
    <>
      <div
        className={`flex gap-2 ${
          message.senderId === currentUserId ? "justify-end" : "justify-start"
        }`}
      >
        {message.senderId !== currentUserId && (
          <Image
            src={otherUserAvatar}
            alt="other_img"
            className="h-8 w-8 rounded-full shrink-0 mt-1 object-cover"
            height={600}
            width={600}
          />
        )}

        <div
          className={`flex flex-col gap-1 max-w-xs sm:max-w-sm ${
            message.senderId === currentUserId ? "items-end" : "items-start"
          }`}
        >
          {message.senderId !== currentUserId && (
            <p className="text-xs text-muted-foreground px-3">{otherUserName}</p>
          )}
          <div
            className={`rounded-2xl px-4 py-2.5 text-sm wrap-break-word ${
              message.senderId === currentUserId
                ? "bg-prime text-prime-foreground rounded-br-none"
                : "bg-second text-second-foreground rounded-bl-none"
            }`}
          >
            {message.text}
          </div>
          {/* <p className="text-xs text-muted-foreground px-3">
            {formatTime(message.timestamp)}
          </p> */}
        </div>

        {message.senderId === currentUserId && (
          <Image
            src={currentUserAvatar || "/placeholder.svg"}
            alt={"current_user_img"}
            className="h-8 w-8 rounded-full shrink-0 mt-1 object-cover"
            height={600}
            width={600}
          />
        )}
      </div>
    </>
  );
};

export default MessageItem;
