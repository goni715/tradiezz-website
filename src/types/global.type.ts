

export interface ApiError {
  status: number;
  data?: {
    message?: string;
  };
}


export type IAuthUser = {
  authId: string;
  iat: number;
  email: string;
  role: "USER" | "EMPLOYER";
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
  