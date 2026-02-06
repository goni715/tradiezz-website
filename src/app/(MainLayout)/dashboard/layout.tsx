import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const PrivateLayout = ({ children }: TProps) => {
  return (
    <>
      <PrivateRoute>
        {/* <AuthContextprovider> */}
        {children}
        {/* </AuthContextprovider> */}
      </PrivateRoute>
    </>
  );
};

export default PrivateLayout;
