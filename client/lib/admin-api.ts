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
