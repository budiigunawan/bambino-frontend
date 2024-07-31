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

export type ProductListResponseType = {
  code: number;
  status: string;
  data: {
    totalData: number;
    totalPage: number;
    products: Product[];
  };
};

export type ProductListData = {
  products: Product[];
  metadata: Metadata;
};

export type ProductResponseType = {
  code: number;
  status: string;
  data: Product;
};

export type ProductDetailPageData = {
  productDetail: Product;
  productsRecommendation: Product[];
};

export type UserDataRegister = {
  username?: string;
  email?: string;
  password?: string;
};

export type UserDataLogin = {
  email?: string;
  password?: string;
};

export type User = {
  id: string;
  email: string;
  username: string;
  fullName: string | null;
  address: string | null;
  phone: string | null;
  passwordId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type RegisterResponse = {
  code: number;
  status: string;
  newUser: User;
};

export type LoginResponse = {
  code: number;
  status: string;
  token: User;
};

export type ProfileResponse = {
  code: number;
  status: string;
  user: User;
};
