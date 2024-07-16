export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  stock: number;
  size: string | null;
  sku: string | null;
  overview: string | null;
  materials: string | null;
  categoryId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type Metadata = {
  totalData: number;
  totalPage: number;
};
