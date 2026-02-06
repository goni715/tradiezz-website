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

  const user = getUserDetails();
  const currentUserId = user?.userId;
  /*=== Conversations fetching ===*/
  const [searchQuery, setSearchQuery] = useState("");
  const { searchTerm } = useDebounce(searchQuery); //debounce handled
  const { data, isLoading, refetch } = useGetChatsQuery([
    { name: "searchTerm", value: searchTerm },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    },
  ]);
  /*=== Conversations fetching ===*/
  const { socket } = useContext(AuthContext);

  //conversations set-up
  useEffect(() => {
    if (data?.data) {
      setConversations(data?.data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, []);

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
        if (currentUserId === newMessage.receiverId) {
          setConversations((prev) => {
            const currentConversation = prev.find(
              (cv) => cv._id === newMessage.chatId,
            );

            if (!currentConversation) return prev;

            const withoutCurrent = prev.filter(
              (cv) => cv._id !== newMessage.chatId,
            );

            return [
              {
                ...currentConversation,
                lastMessage: newMessage.text,
                updatedAt: new Date().toISOString(),
              },
              ...withoutCurrent,
            ];
          });
        }

        if (selectedReceiverId && newMessage.senderId === selectedReceiverId) {
          setMessages((prev) => [...prev, newMessage]);
        }
      },
    );

    socket.on(
      "newConversation",
      (newConversation: IChat & { currentUserId: string }) => {
        if (currentUserId === newConversation.currentUserId) {
          setConversations((prev) => {
            return [newConversation, ...prev];
          });
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
    conversations,
    isLoading,
    setConversations,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
