import { API } from "./config";

export const getCartAPI = async (token: any, userId: string) => {
  return await API.get(`/user/cart/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addCartItemAPI = async (
  token: any,
  userId: string,
  productId: string,
  quantity: number
) => {
  return await API.post(
    `/user/cart/${userId}`,
    { productId, quantity },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const updateCartItemAPI = async (
  token: any,
  userId: string,
  productId: string,
  quantity: number
) => {
  return await API.put(
    `/user/cart/${userId}`,
    { productId, quantity },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteCartItemAPI = async (
  token: any,
  userId: string,
  productId: string
) => {
  return await API.delete(`/user/cart/${userId}`, {
    data: productId,
    headers: { Authorization: `Bearer ${token}` },
  });
};
