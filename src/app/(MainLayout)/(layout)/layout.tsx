import Footer from "@/components/shared/Footer";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const layout = ({ children }: TProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;
