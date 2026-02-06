import { TChildren } from "@/types/global.type";
import React from "react";

const MessageLayout = ({ children }: TChildren) => {
  return (
    <>
      {/* <AuthContextprovider> */}
      {/* <ChatContextProvider> */}
      {children}
      {/* </ChatContextProvider> */}
      {/* </AuthContextprovider> */}
    </>
  );
};

export default MessageLayout;
