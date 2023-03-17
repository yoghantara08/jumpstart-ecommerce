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
}

export interface ICategory {
  name: string;
  description: string;
}
