import { IAuthUser, TProfile } from "@/types/global.type";
import { jwtDecode } from "jwt-decode";
import { SuccessToast } from "./ValidationHelper";

class SessionHelper {
  setToken(token: string) {
    if (!token || token.split(".").length !== 3) {
      return;
    }

    localStorage.setItem("token", token);
  }

  getToken() {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("token");
    }
    return "";
  }

  getUserInfo() {
    const token = getToken();
    if (token) {
      const decodedData = jwtDecode(token) as IAuthUser;
      return decodedData;
    }
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.clear();
      window.location.href = "/";
    }
  }

  isLoggedIn() {
    const token = getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  setUserDetails(user: TProfile) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserDetails() {
    if (typeof window !== "undefined" && window.localStorage) {
      const user = localStorage.getItem("user");
      return user && JSON.parse(user);
    }
    return null;
  }

  setEmail(email: string) {
    localStorage.setItem("email", email);
  }

  getEmail() {
    return localStorage.getItem("email");
  }

  setVerifyEmail(email: string) {
    localStorage.setItem("verifyEmail", email);
  }

  getVerifyEmail() {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("verifyEmail");
    }
  }

  setOtp(otp: string) {
    localStorage.setItem("otp", otp);
  }

  getOtp() {
    return localStorage.getItem("otp");
  }

  setAuthId(authId: string) {
    localStorage.setItem("authId", authId);
  }

  getAuthId() {
    return localStorage.getItem("authId");
  }

  logout() {
    localStorage.clear();
    SuccessToast("Logout Successfull");
    window.location.href = "/";
  }
}

export const {
  setToken,
  getToken,
  setEmail,
  getEmail,
  setVerifyEmail,
  getUserInfo,
  getVerifyEmail,
  setOtp,
  getOtp,
  logout,
  isLoggedIn,
  setAuthId,
  getAuthId,
  setUserDetails,
  getUserDetails,
} = new SessionHelper();
