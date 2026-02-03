/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_BASE_URL } from "@/constant/global.constant";
import { getToken, getUserDetails } from "@/helper/SessionHelper";

interface IAuthContext {
  onlineUsers: string[];
  socket: Socket | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: IAuthContext = {
  onlineUsers: [],
  socket: null,
  loading: false,
  setLoading: () => {},
};

export const AuthContext = createContext(initialValue);

const AuthContextprovider = ({ children }: { children: React.ReactNode }) => {
  const token = getToken();
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const [loading, setLoading] = useState(false);
  const user = getUserDetails();
  const currentUserId = user?.userId || "";

  //Connect socket function to handle socket connection and online user updates
  const connectSocket = (userId: string) => {
    // If user data is unavailable, no need to connect the socket
    if (!userId) return;

    // ✅ Socket already connected → skip reconnect
    if (socketRef.current?.connected) {
      //console.log("Socket already connected:", socketRef.current.id);
      return;
    }

    const newSocket = io(SOCKET_BASE_URL, {
      query: {
        userId, // optional: send logged in user ID
      },
    });

    //newSocket.connect(); //manully triggered
    socketRef.current = newSocket;

    newSocket.on("connect", () => {
     // console.log("✅ Socket connected:", newSocket.id);
    });

    newSocket.on("disconnect", () => {
      //console.log("❌ Socket disconnected!");
    });

    // newSocket.on("connect_error", (err) => {
    //   console.log("⚠️ Socket connection error:", err.message);
    // });

    newSocket.on("getOnlineUsers", (userIds: string[]) => {
      setOnlineUsers(userIds);
    });
  };

  useEffect(() => {
    if (token && currentUserId) {
      connectSocket(currentUserId);
    }

    return () => {
      // ✅ cleanup on unmount
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  const value = {
    onlineUsers,
    socket: socketRef.current,
    loading,
    setLoading,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContextprovider;
