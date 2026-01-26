"use client";

import React, { useRef, useEffect, useState } from "react";
import { Send, Paperclip, Smile, ArrowLeft, Search } from "lucide-react";
import Image from "next/image";
import { useGetChatsQuery } from "@/redux/features/chat/chatApi";
import ChatLaoding from "../loader/ChatLoading";
import { IChat } from "@/types/chat.type";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
  avatar?: string;
  name?: string;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
}

interface ChatBoxProps {
  messages?: Message[];
  conversations?: Conversation[];
  onSendMessage?: (message: string) => void;
  onConversationSelect?: (conversationId: string) => void;
  title?: string;
  otherUserName?: string;
  currentUserName?: string;
  currentUserAvatar?: string;
  otherUserAvatar?: string;
  selectedConversationId?: string;
}

const ChatBox = ({
  messages = [
    {
      id: "1",
      text: "Hey! Are you here?",
      sender: "other",
      timestamp: new Date(Date.now() - 5 * 60000),
      name: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
    },
    {
      id: "2",
      text: "Yeah...",
      sender: "user",
      timestamp: new Date(Date.now() - 3 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    },
    {
      id: "3",
      text: "Great work on the slides! Love it! Just one more thing...",
      sender: "other",
      timestamp: new Date(Date.now() - 1 * 60000),
      name: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
    },
  ],
  // conversations = [
  //   {
  //     id: '1',
  //     name: 'Creative Director',
  //     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
  //     lastMessage: 'Great work on the slides!',
  //     timestamp: new Date(Date.now() - 1 * 60000),
  //   },
  //   {
  //     id: '2',
  //     name: 'Project Manager',
  //     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
  //     lastMessage: 'Meeting at 3 PM today',
  //     timestamp: new Date(Date.now() - 30 * 60000),
  //   },
  //   {
  //     id: '3',
  //     name: 'Designer',
  //     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
  //     lastMessage: 'Check the new mockups',
  //     timestamp: new Date(Date.now() - 2 * 3600000),
  //   },
  // ],
  onSendMessage = () => {},
  onConversationSelect = () => {},
  // title = 'Messenger',
  otherUserName = "Creative Director",
  currentUserName = "You",
  currentUserAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
  otherUserAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
  selectedConversationId = "1",
}: ChatBoxProps) => {
  const [inputValue, setInputValue] = useState("");
  const [allMessages, setAllMessages] = useState(messages);
  const [showConversationList, setShowConversationList] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetChatsQuery(undefined);
  const conversations = data?.data || [];
  // const conversations = [
  //   {
  //     _id: "695dff451638f97caa610eb4",
  //     otherUserId: "69492c2f0bc815ccd23c4447",
  //     fullName: "Goni Dev",
  //     profileImg: "",
  //     lastMessage: "Hello",
  //     updatedAt: "2026-01-07T09:41:14.850Z",
  //   },
  //   {
  //     _id: "695df99f08a89d333aeacd40",
  //     otherUserId: "694a31e115fe7fdb647db61f",
  //     fullName: "Bayo Dac",
  //     profileImg: "",
  //     lastMessage: "this is message",
  //     updatedAt: "2026-01-07T06:13:51.346Z",
  //   },
  // ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      const scrollArea = scrollRef.current;
      setTimeout(() => {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }, 0);
    }
  }, [allMessages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
        avatar: currentUserAvatar,
        name: currentUserName,
      };
      setAllMessages([...allMessages, newMessage]);
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // const formatConversationTime = (date: Date) => {
  //   const now = new Date();
  //   const diffMinutes = Math.floor(
  //     (now.getTime() - date.getTime()) / (1000 * 60),
  //   );

  //   if (diffMinutes < 60) return `${diffMinutes}m`;
  //   const diffHours = Math.floor(diffMinutes / 60);
  //   if (diffHours < 24) return `${diffHours}h`;
  //   const diffDays = Math.floor(diffHours / 24);
  //   if (diffDays < 7) return `${diffDays}d`;
  //   return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  // };

  if(isLoading){
    return <ChatLaoding/>
  }

  return (
    <div className="flex flex-col h-full bg-background md:flex-row">
      {/* Conversations Sidebar - Always visible on desktop, toggleable on mobile */}
      <div
        className={`absolute md:relative md:w-80 w-full h-full md:h-auto bg-background border-r border-border flex flex-col p-4 transition-all duration-300 z-50 md:z-0 ${
          showConversationList
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground mb-4">Chats</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto -mx-4 px-4">
          {conversations.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center">
              <p className="text-sm text-muted-foreground">
                No conversations yet
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-1">
                {conversations.map((conversation: IChat, index:number) => (
                  <div
                    key={index}
                    onClick={() => {
                      onConversationSelect(conversation._id);
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
                        src={
                          conversation.profileImg ||
                          "/images/profile_placeholder.png"
                        }
                        alt={"chat_img"}
                        className="h-12 w-12 rounded-full shrink-0 object-cover"
                        height={600}
                        width={600}
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
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Header */}
        <div className="border-b border-border px-4 py-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => setShowConversationList(!showConversationList)}
              className="md:hidden h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <Image
              src={otherUserAvatar || "/placeholder.svg"}
              alt={otherUserName}
              className="h-12 w-12 rounded-full object-cover"
              height={600}
              width={600}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-foreground truncate">
                {otherUserName}
              </h2>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 sm:px-6"
          ref={scrollRef}
        >
          <div className="flex flex-col gap-4">
            {allMessages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "other" && (
                  <Image
                    src={message.avatar || "/placeholder.svg"}
                    alt={"other_img"}
                    className="h-8 w-8 rounded-full shrink-0 mt-1 object-cover"
                    height={600}
                    width={600}
                  />
                )}

                <div
                  className={`flex flex-col gap-1 max-w-xs sm:max-w-sm ${
                    message.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {message.sender === "other" && (
                    <p className="text-xs text-muted-foreground px-3">
                      {message.name}
                    </p>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm wrap-break-word ${
                      message.sender === "user"
                        ? "bg-prime text-prime-foreground rounded-br-none"
                        : "bg-second text-second-foreground rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                  <p className="text-xs text-muted-foreground px-3">
                    {formatTime(message.timestamp)}
                  </p>
                </div>

                {message.sender === "user" && (
                  <Image
                    src={message.avatar || "/placeholder.svg"}
                    alt={currentUserName}
                    className="h-8 w-8 rounded-full shrink-0 mt-1 object-cover"
                    height={600}
                    width={600}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-background px-4 py-4 sm:px-6">
          <div className="flex items-end gap-2">
            <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Aa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-2.5 rounded-full border border-border bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:bg-card focus:ring-2 focus:ring-accent transition-colors"
              />
            </div>

            <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors">
              <Smile className="h-5 w-5" />
            </button>

            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-prime text-prime-foreground hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
