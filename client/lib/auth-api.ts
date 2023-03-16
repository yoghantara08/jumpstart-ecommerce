import { ILoginForm } from "@/components/website/auth/login-form";
import { IRegisterAccount } from "@/types/user-type";
import { API } from "./config";

export const registerAPI = async (data: IRegisterAccount) => {
  return await API.post("/auth/register", data);
};

export const loginAPI = async (data: ILoginForm) => {
  return await API.post("/auth/login", data);
};
