"use client";

import { getUserInfo } from "@/helper/SessionHelper";
import { SetIsProfileUpdated } from "@/redux/features/user/userSllice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IAuthUser } from "@/types/global.type";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserImg = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [user, setUser] = useState<IAuthUser | null>(null);
  const { isProfileUpdated } = useAppSelector((state) => state.user);

  useEffect(() => {
    const userInfo = getUserInfo();
    if (!userInfo) {
      router.push("/");
      return;
    }
    setUser(userInfo);
  }, [router]);

  useEffect(() => {
    if (isProfileUpdated) {
      const updatedUser = getUserInfo() as IAuthUser;
      setUser(updatedUser);
      dispatch(SetIsProfileUpdated(false));
    }
  }, [isProfileUpdated, dispatch]);

  if (!user) return null;

  return (
    <div className="h-8 w-8 rounded-full">
      <Image
        src={user.profileImg || "/images/profile_placeholder.png"}
        alt="user"
        width={40}
        height={40}
        className="h-full w-full rounded-full"
      />
    </div>
  );
};

export default UserImg;
