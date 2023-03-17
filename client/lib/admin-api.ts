import { ICategory } from "@/types/products-type";
import { API } from "./config";

export const addCategoryAPI = async (data: ICategory) => {
  return await API.post("/admin/add-category", data);
};
