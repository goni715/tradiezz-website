import Footer from "@/components/shared/Footer";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const layout = ({ children }: TProps) => {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] bg-gray-50">
         {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
