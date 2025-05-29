import Navbar from "@/components/shared/Navbar";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const layout = ({ children }: TProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
