/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Send, ArrowLeft } from "lucide-react"
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";



const MessagesPage = () => {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("Swathi")
  const [showChatList, setShowChatList] = useState(true)
  const isMobile = useMobile()
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Swathi",
      avatar: "/placeholder.svg?height=50&width=50",
      phone: "+11 258 963 21",
      online: true,
      messages: [
        { text: "Hey There !", time: "Today, 2:01pm", sent: false },
        { text: "How are you doing?", time: "Today, 2:02pm", sent: false },
        { text: "Hello...", time: "Today, 2:10pm", sent: true },
        { text: "I am good and how about you?", time: "Today, 2:15pm", sent: true },
        { text: "I am doing well. Can we meet up tomorrow?", time: "Today, 2:19pm", sent: false },
        { text: "Sure!", time: "Today, 2:14pm", sent: true },
      ],
      lastMessage: "Sure!",
      time: "just now",
      unread: false,
    },
    {
      id: 2,
      name: "Jane Cooper",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Yeah sure, tell me asfor",
      time: "just now",
      unread: false,
    },
    {
      id: 3,
      name: "Jenny Wilson",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Thank you so much, sir",
      time: "2 d",
      unread: true,
    },
    {
      id: 4,
      name: "Marvin McKinney",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You're Welcome",
      time: "1 m",
      unread: true,
    },
    {
      id: 5,
      name: "Eleanor Pena",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Thank you so much, sir",
      time: "1 m",
      unread: false,
    },
    {
      id: 6,
      name: "Ronald Richards",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Sorry, I can't help you",
      time: "2 m",
      unread: false,
    },
    {
      id: 7,
      name: "Kathryn Murphy",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "new message",
      time: "2 m",
      unread: false,
    },
    {
      id: 8,
      name: "Jacob Jones",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Thank you so much, sir",
      time: "6 m",
      unread: false,
    },
    {
      id: 9,
      name: "Cameron Williamson",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "It's okay, no problem brother, i will fix everything",
      time: "6 m",
      unread: false,
    },
    {
      id: 10,
      name: "Arlene McCoy",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Thank you so much, sir",
      time: "9 m",
      unread: false,
    },
    {
      id: 11,
      name: "Dianne Russell",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You're Welcome",
      time: "9 m",
      unread: false,
    },
  ])

  const messageEndRef = useRef<HTMLDivElement>(null)
  const chatListRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (message.trim() === "") return

    const updatedChats = chats.map((chat) => {
      if (chat.name === activeChat) {
        return {
          ...chat,
          messages: [
            ...(chat.messages || []),
            {
              text: message,
              time: new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }),
              sent: true,
            },
          ],
          lastMessage: message,
          time: "just now",
        }
      }
      return chat
    })

    setChats(updatedChats as any)
    setMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chats])

  // Handle chat selection on mobile
  const handleChatSelect = (chatName: string) => {
    setActiveChat(chatName)
    if (isMobile) {
      setShowChatList(false)
    }
  }

  // Go back to chat list on mobile
  const handleBackToList = () => {
    setShowChatList(true)
  }

  const activeUser = chats.find((chat) => chat.name === activeChat)

  return (
    <div className="w-full flex overflow-hidden py-4">
      {/* Chat List */}
      <div
        className={`${
          isMobile ? (showChatList ? "w-full" : "hidden") : "w-full md:w-1/4 lg:w-1/4"
        } border-r border-gray-200 bg-white h-full flex flex-col`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Message</h2>
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        <div ref={chatListRef} className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 130px)" }}>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                activeChat === chat.name ? "bg-gray-100" : ""
              }`}
              onClick={() => handleChatSelect(chat.name)}
            >
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/user.jpg"
                  alt="go"
                  className="w-12 h-12 rounded-full object-cover"
                  width={500}
                  height={500}
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread && <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`${isMobile ? (showChatList ? "hidden" : "w-full") : "flex-1"} flex flex-col bg-white h-full`}>
        {activeUser ? (
          <>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                {isMobile && (
                  <button
                    onClick={handleBackToList}
                    className="mr-2 p-1 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none"
                    aria-label="Go back to chat list"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <div className="relative">
                  <Image
                  src="/images/user.jpg"
                  alt="go"
                  className="w-12 h-12 rounded-full object-cover"
                  width={500}
                  height={500}
                />
                  {activeUser.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">{activeUser.name}</h3>
                  {activeUser.phone && <p className="text-sm text-gray-500">{activeUser.phone}</p>}
                </div>
              </div>
              {/* <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none">
                <MoreVertical className="w-5 h-5" />
              </button> */}
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{ maxHeight: "calc(100vh - 140px)" }}>
              {activeUser.messages?.map((msg, index) => (
                <div key={index} className={`flex ${msg.sent ? "justify-end" : "justify-start"} mb-4`}>
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                      msg.sent ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sent ? "text-blue-200" : "text-gray-500"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 py-2 px-4 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 p-2 text-white cursor-pointer bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagesPage
