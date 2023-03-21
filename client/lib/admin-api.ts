import { IUserAddForm, IUserEditForm } from "@/types/admin-type";
import { API } from "./config";

// ORDERS
export const getOrdersAPI = async (token: string | null) => {
  return await API.get("/admin/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const completeOrderAPI = async (
  token: string | null,
  orderId: string
) => {
  return await API.put(`/admin/orders/complete/${orderId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const cancelOrderAPI = async (token: string | null, orderId: string) => {
  return await API.put(`/admin/orders/cancel/${orderId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// USERS
export const getUsersAPI = async (token: string | null) => {
  return await API.get("/admin/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addUserAPI = async (token: string | null, data: IUserAddForm) => {
  return await API.post("/admin/users/add", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editUserAPI = async (
  token: string | null,
  data: IUserEditForm,
  userId: string
) => {
  return await API.put(`/admin/users/edit/${userId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
