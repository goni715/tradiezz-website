"use client";

import React, { useRef, useEffect, useState } from "react";
import { Send, ArrowLeft, Search } from "lucide-react";
import Image from "next/image";
import { useGetChatsQuery } from "@/redux/features/chat/chatApi";
import ChatLaoding from "../loader/ChatLoading";
import { IChat } from "@/types/chat.type";
import useDebounce from "@/hooks/useDebounce";
import { IMessage } from "@/types/message.type";
import useUserInfo from "@/hooks/useUserInfo";
import ConversationItem from "./ConversationItem";
import MessageItem from "./MessageItem";

const ChatBox = ( ) => {
  const userInfo = useUserInfo();
  const currentUserId = userInfo?.userId;
  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [otherUserName, setOtherUserName] = useState("Creative Director");
  const [otherUserAvatar, setOtherUserAvatar] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allMessages, setAllMessages] = useState<IMessage[]>([]);
  const [showConversationList, setShowConversationList] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { searchTerm } = useDebounce(searchQuery); //debounce handled
  const { data, isLoading } = useGetChatsQuery([
    { name: "searchTerm", value: searchTerm },
  ]);
  const conversations = data?.data || [];

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
      const newMessage: IMessage = {
        chatId: selectedConversationId,
        text: inputValue,
        senderId: currentUserId,
        createdAt: ""
        //timestamp: new Date(),
        //avatar: currentUserAvatar,
        //currentUserName,
      };
      setAllMessages([...allMessages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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

  if (isLoading) {
    return <ChatLaoding />;
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                {conversations.map((conversation: IChat, index: number) => (
                  <ConversationItem
                    key={index}
                    conversation={conversation}
                    selectedConversationId={selectedConversationId}
                    setSelectedConversationId={setSelectedConversationId}
                    setOtherUserName={setOtherUserName}
                    setOtherUserAvatar={setOtherUserAvatar}
                    setShowConversationList={setShowConversationList}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Header */}
        {selectedConversationId && (
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
                {/* <p className="text-xs text-muted-foreground">Active now</p> */}
              </div>
            </div>
          </div>
        )}

        {/* Messages Container */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 sm:px-6"
          ref={scrollRef}
        >
          {!selectedConversationId ? (
            <div className="flex h-full items-center justify-center text-center">
              <div className="max-w-xs">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Select a conversation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Choose a chat from the list to start messaging
                </p>
              </div>
            </div>
          ) : (
            <>
              {allMessages?.length === 0 ? (
                <>
                  <div className="flex h-full items-center justify-center text-center">
                    <div className="max-w-xs">
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        No messages yet
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Say hello 👋 and start the conversation
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    {allMessages.map((message, index) => (
                      <MessageItem key={index} message={message} otherUserName={otherUserAvatar} otherUserAvatar={otherUserAvatar}/>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-background px-4 py-4 sm:px-6">
          {!selectedConversationId ? (
            <div className="text-center text-sm text-muted-foreground">
              Select a conversation to start typing
            </div>
          ) : (
            <div className="flex items-end gap-2">
              {/* <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors">
                <Paperclip className="h-5 w-5" />
              </button> */}

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

              {/* <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors">
                <Smile className="h-5 w-5" />
              </button> */}

              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="h-10 w-10 rounded-full flex cursor-pointer items-center justify-center bg-prime text-prime-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
