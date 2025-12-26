"use client";
 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PublicLoading from "../loader/PublicLoading";
 type TProps = {
   children: React.ReactNode;
 };

const PublicRoute = ({ children }: TProps) => {
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
    if (!isLoadingToken && token) {
      router.replace("/");
    }
  }, [isLoadingToken, token, router]);
 
  if (isLoadingToken) {
     return <PublicLoading/>
  }
 
  if (!token) {
    return <>{children}</>;
  }
  return null;
};
 
export default PublicRoute;