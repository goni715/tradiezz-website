export interface ApiError {
  status: number;
  data?: {
    message?: string;
  };
}

export type IAuthUser = {
  userId: string;
  iat: number;
  email: string;
  fullName: string;
  profileImg: string;
  role: "candidate" | "employer";
};

export interface IParam {
  name: string;
  value: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export type TOption = {
  value: string;
  label: string;
};

export type TProfile = {
  fullName: string;
  email: string;
  profileImg: string;
  userId: string;
};

export type TVisibility = "visible" | "hidden";

export type TChildren = {
  children: React.ReactNode;
};

export type IUser = {
  _id: string;
  email: string;
  fullName: string;
  profilePic: string;
  bio: string;
};

export interface TMessage {
  _id: string;
  senderId: string;
  receiverId: string;
  text: string;
  seen: boolean;
  image: string;
  createdAt: string; // or Date if you convert to Date type in code
}