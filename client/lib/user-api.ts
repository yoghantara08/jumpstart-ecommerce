import { IFormInformation } from "@/components/website/user/settings-profile";
import { API } from "./config";

export const profileAPI = async (token: string | null) => {
  return await API.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editProfileAPI = async (
  token: string | null,
  data: IFormInformation
) => {
  return await API.put("/user/profile", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
