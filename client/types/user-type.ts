export interface IRegisterAccount {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  email: string;
  role: string;
  provider: string;
  isFirstLogin: boolean;
  profile: IProfile;
  createdAt: string;
  updatedAt: string;
}

interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  birthday: string;
  image: string;
  _id: string;
}
