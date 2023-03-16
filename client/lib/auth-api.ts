import { ILoginForm } from "@/components/website/auth/login-form";
import { IRegisterAccount } from "@/types/user-type";
import { API } from "./config";

export const registerAPI = async (data: IRegisterAccount) => {
  return await API.post("/auth/register", data);
};

export const loginAPI = async (data: ILoginForm) => {
  return await API.post("/auth/login", data);
};

export const profileAPI = async (token: string | null) => {
  return await API.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
