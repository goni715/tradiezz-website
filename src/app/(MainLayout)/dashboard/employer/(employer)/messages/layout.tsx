import AuthContextprovider from "@/context/AuthContext";
import { TChildren } from "@/types/global.type";
import React from "react";

const MessageLayout = ({ children }: TChildren) => {
  return (
    <>
      <AuthContextprovider>{children}</AuthContextprovider>
    </>
  );
};

export default MessageLayout;
