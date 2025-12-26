"use client";
 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrivateLoading from "../loader/PrivateLoading";
 type TProps = {
   children: React.ReactNode;
 };

const PrivateRoute = ({ children }: TProps) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingToken, setIsLoadingToken] = useState(true);



 
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      setIsLoadingToken(false);
    }
  }, []);
 
  useEffect(() => {
    if (!isLoadingToken && !token) {
      router.replace("/login");
    }
  }, [isLoadingToken, token, router]);
 
  if (isLoadingToken) {
    return <PrivateLoading/>
  }
 
  if (token) {
    return <>{children}</>;
  }
  return null;
};
 
export default PrivateRoute;