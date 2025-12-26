import EmployerRoute from "@/components/PrivateRoute/EmployerRoute";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const EmployerRouteLayout = ({ children }: TProps) => {
  return (
    <>
      <PrivateRoute>
        <EmployerRoute>{children}</EmployerRoute>
      </PrivateRoute>
    </>
  );
};

export default EmployerRouteLayout;
