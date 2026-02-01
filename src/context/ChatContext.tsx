"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import type { IUser, TChildren } from "../types/global.type";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import customAxios from "@/config/customAxios";
import { getToken } from "@/helper/SessionHelper";
import { IMessage } from "@/types/message.type";

type IChatContext = {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
  selectedUser: IUser | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  unseenMessages: Record<string, number>;
  setUnseenMessages: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  getMessages: (userId: string) => Promise<void>;
  sendMessage: (
    selectedUser: IUser,
    messageData: { text: string },
  ) => Promise<void>;
};

export const ChatContext = createContext<IChatContext | null>(null);

const ChatContextProvider = ({ children }: TChildren) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [unseenMessages, setUnseenMessages] = useState<Record<string, number>>(
    {},
  );
  const { socket } = useContext(AuthContext);

  // get messages for selected user
  const getMessages = async (conversationId: string) => {
    try {
      const { data } = await customAxios.get(
        `/message/get-messages/${conversationId}`,
        { headers: { Authorization: `${getToken() as string}` } },
      );

      if (data.success) {
        setMessages(data.data);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const sendMessage = async (
    selectedUser: IUser,
    messageData: { text: string },
  ) => {
    try {
      const { data } = await customAxios.post(
        `/api/v1/message/send-message/${selectedUser?._id}`,
        messageData,
      );
      if (data?.success) {
        setMessages((prev) => [...prev, data?.data]);
      } else {
        toast.success(data?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  //subscribe to messages for selected user
  // const subscribeToMessages = () => {
  //   if (!socket) return;

  //   socket.on("newMessage", async (newMessage: IMessage) => {
  //     if (selectedUser && newMessage.senderId === selectedUser._id) {
  //       //newMessage.seen = true;

  //       setMessages((prev) => [...prev, newMessage]);
  //       //update the seen message
  //       await customAxios.put(`/api/v1/message/mark/${newMessage?._id}`);
  //     } else {
  //       setUnseenMessages((prev) => ({
  //         ...prev,
  //         [newMessage.senderId]: prev[newMessage.senderId]
  //           ? prev[newMessage.senderId] + 1
  //           : 1,
  //       }));
  //     }
  //   });
  // };

  //function to unsubscribe from messages
  const unsubscribeFromMessages = () => {
    if (socket) socket.off("newMessage");
  };

  useEffect(() => {
    //subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [socket, selectedUser]);

  const value = {
    messages,
    setMessages,
    sendMessage,
    getMessages,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
