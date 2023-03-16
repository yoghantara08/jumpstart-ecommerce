import { ILoginForm } from "@/components/website/auth/login-form";
import { IRegisterInformation } from "@/components/website/auth/register-information";
import { IRegisterAccount } from "@/types/user-type";
import { API } from "./config";

export const registerAPI = async (data: IRegisterAccount) => {
  return await API.post("/auth/register", data);
};

export const loginAPI = async (data: ILoginForm) => {
  return await API.post("/auth/login", data);
};

export const registerInformationAPI = async (
  token: string | null,
  data: IRegisterInformation
) => {
  return await API.put(`/auth/register-information`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
