import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const PrivateLayout = ({ children }: TProps) => {
  return (
    <>
    <PrivateRoute>
      {children}
    </PrivateRoute>
    </>
  );
};

export default PrivateLayout;