"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import type { TChildren } from "../types/global.type";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import customAxios from "@/config/customAxios";
import { getToken, getUserDetails } from "@/helper/SessionHelper";
import { IMessage } from "@/types/message.type";
import useDebounce from "@/hooks/useDebounce";
import { useGetChatsQuery } from "@/redux/features/chat/chatApi";
import { IChat } from "@/types/chat.type";

type IChatContext = {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedReceiverId: string;
  setSelectedReceiverId: React.Dispatch<React.SetStateAction<string>>;
  unseenMessages: Record<string, number>;
  setUnseenMessages: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  getMessages: (userId: string) => Promise<void>;
  conversations: IChat[];
  setConversations: React.Dispatch<React.SetStateAction<IChat[]>>;
  isLoading: boolean;
};

export const ChatContext = createContext<IChatContext | null>(null);

const ChatContextProvider = ({ children }: TChildren) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [conversations, setConversations] = useState<IChat[]>([]);
  const [selectedReceiverId, setSelectedReceiverId] = useState("");
  const [unseenMessages, setUnseenMessages] = useState<Record<string, number>>(
    {},
  );
  const user = getUserDetails();
  const currentUserId = user?.userId;
  /*=== Conversations fetching ===*/
  const [searchQuery, setSearchQuery] = useState("");
  const { searchTerm } = useDebounce(searchQuery); //debounce handled
  const { data, isLoading } = useGetChatsQuery([
    { name: "searchTerm", value: searchTerm },
    { refetchOnMountOrArgChange: true },
  ]);
  /*=== Conversations fetching ===*/
  const { socket } = useContext(AuthContext);

  //conversations set-up
  useEffect(() => {
    if (data?.data) {
      setConversations(data?.data);
    }
  }, [data]);

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

  //subscribe to messages for selected user
  const subscribeToMessages = () => {
    if (!socket) return;

    socket.on(
      "newMessage",
      async (newMessage: IMessage & { receiverId: string }) => {
        console.log("New Message Received", newMessage);

        if (currentUserId === newMessage.receiverId) {
          const currentConversation = conversations?.find(
            (cv) => cv._id === newMessage.chatId,
          );

          const withoutCurrentConversations = conversations?.filter(
            (cv) => cv._id !== newMessage.chatId,
          );

          console.log(currentConversation);
          console.log("without con", withoutCurrentConversations);

          if (currentConversation) {
            const newConversation = {
              ...currentConversation,
              lastMessage: newMessage.text,
              updatedAt: new Date().toISOString(),
            };
            setConversations([newConversation, ...withoutCurrentConversations]);
          }
        }

        if (selectedReceiverId && newMessage.senderId === selectedReceiverId) {
          //newMessage.seen = true;

          setMessages((prev) => [...prev, newMessage]);
          //update the seen message
          //await customAxios.put(`/api/v1/message/mark/${newMessage?._id}`);
        } else {
          setUnseenMessages((prev) => ({
            ...prev,
            [newMessage.senderId]: prev[newMessage.senderId]
              ? prev[newMessage.senderId] + 1
              : 1,
          }));
        }
      },
    );
  };

  //function to unsubscribe from messages
  const unsubscribeFromMessages = () => {
    if (socket) socket.off("newMessage");
  };

  useEffect(() => {
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [socket, selectedReceiverId]);

  const value = {
    messages,
    setMessages,
    getMessages,
    searchQuery,
    setSearchQuery,
    selectedReceiverId,
    setSelectedReceiverId,
    unseenMessages,
    setUnseenMessages,
    conversations,
    isLoading,
    setConversations,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
