import { API } from "./config";

export const profileAPI = async (token: string | null) => {
  return await API.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
