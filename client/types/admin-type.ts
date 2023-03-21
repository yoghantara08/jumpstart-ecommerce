export interface IOrderManagement {
  _id: string;
  userId: UserId;
  items: Item[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Item {
  product: Product;
  quantity: number;
  price: number;
  _id: string;
}

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: string;
  stock: number;
  description: string;
  weight: string;
  condition: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
}

interface UserId {
  _id: string;
  email: string;
  role: string;
  provider: string;
  isFirstLogin: boolean;
  profile: Profile;
  createdAt: string;
  updatedAt: string;
}

interface Profile {
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

export interface IUserAddForm {
  email: string;
  password: string;
  role: string;
  username: string;
}
