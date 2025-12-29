"use client";
import { getUserInfo } from "@/helper/SessionHelper";
import { SetIsProfileUpdated } from "@/redux/features/user/userSllice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IAuthUser } from "@/types/global.type";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserImg = () => {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState(getUserInfo() || null);
    const { isProfileUpdated } = useAppSelector((state) => state.user)

    useEffect(() => {
        if (isProfileUpdated) {
            setUser(getUserInfo() as IAuthUser);
            dispatch(SetIsProfileUpdated(false))
        }
    }, [isProfileUpdated, dispatch])

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
};

export default UserImg;
