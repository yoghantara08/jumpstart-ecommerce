import { IRegisterAccount } from "@/types/user-type";
import { API } from "./config";

export const registerAPI = async (data: IRegisterAccount) => {
  return API.post("/auth/register", data);
};
