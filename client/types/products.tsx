export interface IProduct {
  name: string;
  slug: string;
  price: number;
  stock: number;
  description: string;
  isFeatured?: boolean;
  category: string;
  categoryId: string;
  addedBy: string;
  condition: string;
  weight: string;
  image: string;
}
