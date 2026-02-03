/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useRef, useEffect, useState, useContext } from "react";
import { Send, ArrowLeft, Search, Smile } from "lucide-react";
import Image from "next/image";
import ChatLaoding from "../loader/ChatLoading";
import { IChat } from "@/types/chat.type";
import { IMessage } from "@/types/message.type";
import useUserInfo from "@/hooks/useUserInfo";
import ConversationItem from "./ConversationItem";
import MessageItem from "./MessageItem";
import { ChatContext } from "@/context/ChatContext";
import { AuthContext } from "@/context/AuthContext";
import { Socket } from "socket.io-client";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const ChatBox = () => {
  const userInfo = useUserInfo();
  const currentUserId = userInfo?.userId;

  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [otherUserName, setOtherUserName] = useState("Creative Director");
  const [otherUserAvatar, setOtherUserAvatar] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showConversationList, setShowConversationList] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    getMessages,
    setMessages,
    selectedReceiverId,
    setSelectedReceiverId,
    searchQuery,
    setSearchQuery,
    conversations,
    setConversations,
    isLoading,
  } = useContext(ChatContext)!;

  const { socket, onlineUsers } = useContext(AuthContext);

  /* ========== Fetch Messages ========== */
  useEffect(() => {
    if (selectedConversationId) {
      getMessages(selectedConversationId);
    }
  }, [selectedConversationId]);

  /* ========== Auto Scroll ========== */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /* ========== Prevent Body Scroll on Mobile Drawer ========== */
  useEffect(() => {
    document.body.style.overflow = showConversationList ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showConversationList]);

  /* ========== Send Message ========== */
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: IMessage = {
      chatId: selectedConversationId,
      text: inputValue,
      senderId: currentUserId,
      createdAt: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);

    const newConversation = {
      _id: selectedConversationId,
      receiverId: selectedReceiverId,
      fullName: otherUserName,
      profileImg: otherUserAvatar,
      lastMessage: inputValue,
      updatedAt: new Date().toISOString(),
    };

    (socket as Socket).emit("sendMessage", {
      ...newMessage,
      receiverId: selectedReceiverId,
    });

    setConversations((prev) => [
      newConversation,
      ...prev.filter((c) => c._id !== selectedConversationId),
    ]);

    setInputValue("");
    setShowEmojiPicker(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setInputValue((prev) => prev + emojiData.emoji);
  };

  if (isLoading) return <ChatLaoding />;

  return (
    <div className="flex h-full bg-background relative overflow-hidden">
      {/* ================= Sidebar ================= */}
      <div
        className={`
          fixed inset-0 md:relative md:w-80
          bg-background border-r border-border
          z-50 md:z-0
          transition-transform duration-300
          ${showConversationList ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-4 h-full flex flex-col">
          <h1 className="text-xl font-bold mb-4">Chats</h1>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border"
            />
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground">
                No conversations yet
              </p>
            ) : (
              conversations.map((conversation: IChat) => (
                <ConversationItem
                  key={conversation._id}
                  conversation={conversation}
                  selectedConversationId={selectedConversationId}
                  setSelectedConversationId={(id) => {
                    setSelectedConversationId(id);
                    setShowConversationList(false);
                  }}
                  setSelectedReceiverId={setSelectedReceiverId}
                  setOtherUserName={setOtherUserName}
                  setOtherUserAvatar={setOtherUserAvatar}
                  setShowConversationList={setShowConversationList}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* ================= Chat Area ================= */}
      <div
        className={`
          flex-1 flex flex-col h-full
          ${showConversationList ? "hidden md:flex" : "flex"}
        `}
      >
        {/* Header */}
        {selectedConversationId && (
          <div className="border-b px-4 py-4 flex items-center gap-3">
            <button
              onClick={() => setShowConversationList(true)}
              className="md:hidden"
            >
              <ArrowLeft />
            </button>

            <Image
              src={otherUserAvatar || "/placeholder.svg"}
              alt={otherUserName}
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <p className="font-semibold">{otherUserName}</p>
              {onlineUsers.includes(selectedReceiverId) && (
                <p className="text-xs text-muted-foreground">Active now</p>
              )}
            </div>
          </div>
        )}

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
          {!selectedConversationId ? (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Select a conversation
            </div>
          ) : messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Say hello 👋
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <MessageItem
                  key={index}
                  message={message}
                  otherUserName={otherUserName}
                  otherUserAvatar={otherUserAvatar}
                />
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        {selectedConversationId && (
          <div className="border-t p-4 flex items-center gap-2 relative">
            <button onClick={() => setShowEmojiPicker((p) => !p)}>
              <Smile />
            </button>

            {showEmojiPicker && (
              <div className="absolute bottom-14 left-0 z-50">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}

            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Aa"
              className="flex-1 px-4 py-2 rounded-full bg-muted border"
            />

            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="h-10 w-10 rounded-full bg-prime text-white flex items-center justify-center disabled:opacity-50"
            >
              <Send />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
