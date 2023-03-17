import { IUser } from "@/types/user-type";

export const defaultUser: IUser = {
  _id: "",
  email: "",
  isFirstLogin: false,
  role: "",
  provider: "",
  profile: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    birthday: "",
    image: "",
  },
  createdAt: "",
  updatedAt: "",
};
