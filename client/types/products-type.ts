export interface IProduct {
  name: string;
  slug: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  condition: string;
  weight: string;
  image: any;
  isFeatured?: boolean;
}

export interface ICategory {
  name: string;
  description: string;
}

export interface IProducts {
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

export interface IEditProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  weight: string;
  image?: any;
}

export interface IOrder {
  _id: string;
  userId: string;
  items: IOrderItem[];
  totalPrice: number;
  status: string;
  createdAt: string;
}

export interface IOrderItem {
  product: IProducts;
  quantity: number;
  price: number;
}
