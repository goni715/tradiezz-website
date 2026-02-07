import CandidateRoute from "@/components/PrivateRoute/CandidateRoute";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const CandidateRouteLayout = ({ children }: TProps) => {
  return (
    <>
      <PrivateRoute>
        <CandidateRoute>{children}</CandidateRoute>
      </PrivateRoute>
    </>
  );
};

export default CandidateRouteLayout;
