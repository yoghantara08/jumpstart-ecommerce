import { API } from "./config";

export const getOrdersAPI = async (token: string | null) => {
  return await API.get("/admin/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
