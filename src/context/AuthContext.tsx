"use client";
import React, { createContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import customAxios from "@/config/customAxios";
// import { BASE_URL } from "@/constant/global.constant";
import { SuccessToast } from "@/helper/ValidationHelper";


interface IAuthContext {
  token: string;
  //authUser: IUser | null;
  onlineUsers: string[];
  socket: Socket | null;
  //login: (state: string, credentials: ILogin) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: IAuthContext = {
  token: "",
  //authUser: null,
  onlineUsers: [],
  socket: null,
  //login: async () => {},
  logout: async () => {},
  loading: false,
  setLoading: () => {},
};

export const AuthContext = createContext(initialValue);


const AuthContextprovider = ({ children }: { children: React.ReactNode})=> {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  //const [authUser, setAuthUser] = useState<IUser | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [loading, setLoading] = useState(false);

  //check if user is authenticated and if so, set the user data and connect the socket
  /*const checkAuth = async () => {
    try {
      const { data } = await customAxios.get("/api/v1/auth/check");
      if (data?.success) {
        //setAuthUser(data?.data);
        connectSocket(data?.data);
      }
    } catch (err: any) {
      console.log(err);
      ErrorToast(err.message);
    }
  };*/

  //login function to handle user authentication and socket connection
  // const login = async (state: string, credentials: ILogin) => {
  //   try {
  //     setLoading(true);
  //     const { data } = await customAxios.post(
  //       `/api/v1/auth/${state}`,
  //       credentials
  //     );

  //     setLoading(false);

  //     if (data?.success) {
  //       setAuthUser(data?.user);
  //       connectSocket(data?.user);
  //       customAxios.defaults.headers.common["token"] = data?.token;
  //       setToken(data?.token);
  //       localStorage.setItem("token", data?.token);
  //       toast.success(data?.message);
  //     } else {
  //       toast.success(data?.message);
  //     }
  //   } catch (err: any) {
  //     toast.error(err.message);
  //     setLoading(false)
  //   }
  // };

  // Logout function to handle user logout and socket disconnection
  const logout = async () => {
    localStorage.removeItem("token");
    setToken("");
    //setAuthUser(null);
    setOnlineUsers([]);

    if (socket) {
      socket.disconnect();
      setSocket(null);
    }

    delete customAxios.defaults.headers.common["token"];
    SuccessToast("Logged out successfully");
  };

  //Connect socket function to handle socket connection and online user updates
 /* const connectSocket = (userData: any) => {
    // If user data is unavailable, no need to connect the socket
    if (!userData) return;

    // ✅ Socket already connected → skip reconnect
    if (socket && socket.connected) {
      console.log("Socket already connected:", socket.id);
      return;
    }

    const newSocket = io(BASE_URL, {
      query: {
        userId: userData._id, // optional: send logged in user ID
      },
    });

    //newSocket.connect(); //manully triggered
    setSocket(newSocket);

     newSocket.on("connect", () => {
       console.log("✅ Socket connected:", newSocket.id);
     });

     newSocket.on("disconnect", () => {
       console.log("❌ Socket disconnected!");
     });

     newSocket.on("connect_error", (err) => {
       console.log("⚠️ Socket connection error:", err.message);
     });

    newSocket.on("getOnlineUsers", (userIds: string[]) => {
      setOnlineUsers(userIds);
    });
  };
  */

  useEffect(() => {
    if (token) {
      customAxios.defaults.headers.common["token"] = token; //set token with all axios api request
      //checkAuth();
    }
  }, [token]);

  const value = {
    token,
    //authUser,
    onlineUsers,
    socket,
    //login,
    logout,
    loading,
    setLoading
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}


export default AuthContextprovider;