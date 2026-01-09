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
};

export type TVisibility = "visible" | "hidden";
