"use client";
 
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrivateLoading from "../loader/PrivateLoading";
 type TProps = {
   children: React.ReactNode;
 };

const CandidateRoute = ({ children }: TProps) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const userInfo = useUserInfo();



 
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      setIsLoadingToken(false);
    }
  }, []);
 
  useEffect(() => {
    if (!isLoadingToken && token && userInfo?.userId && userInfo?.role==="employer") {
      router.replace("/dashboard/employer/overview");
    }
  }, [isLoadingToken, token, router, userInfo]);
 
  if (isLoadingToken) {
    return <PrivateLoading/>
  }
 
  if (token && userInfo?.userId && userInfo?.role==="candidate") {
    return <>{children}</>;
  }
  return null;
};
 
export default CandidateRoute;