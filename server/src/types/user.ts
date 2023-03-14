import { EProvider } from "./EProvider";
import { ERoles } from "./ERoles";

export interface IUser {
  username: string;
  email: string;
  password: string;
  role: ERoles;
  provider: EProvider;
  isFirstLogin: boolean;
  profile: IProfile;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  birthday: Date;
  image: string;
}
