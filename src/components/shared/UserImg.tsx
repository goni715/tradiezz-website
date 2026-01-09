"use client";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import Image from "next/image";

const UserImg = () => {
  const { data, isLoading } = useGetMeQuery(undefined);
  const user = data?.data;

  if (isLoading) {
    return <div className="h-full w-full bg-slate-200 rounded-full"></div>;
  }

  if (!isLoading && user) {
    return (
      <>
        <div className="h-8 w-8 rounded-full">
          <Image
            src={user?.profileImg || "/images/profile_placeholder.png"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/profile_placeholder.png";
            }}
            alt="user"
            width={500}
            height={600}
            className="h-full w-full rounded-full"
          />
        </div>
      </>
    );
  }
};

export default UserImg;
