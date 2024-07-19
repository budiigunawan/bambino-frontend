import { sanitizeQuery } from "@/lib/helpers";
import { ProductListResponseType, ProductResponseType } from "@/lib/types";
import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

type ProductQuery = {
  page: number;
  limit: number;
  q?: string;
};

export const getAllProduct = async (query: ProductQuery) => {
  try {
    const sanitized = sanitizeQuery(query);

    const response = await axios({
      method: "GET",
      url: `${baseUrl}/products`,
      params: sanitized,
    });

    return response.data as ProductListResponseType;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getProduct = async (slug: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/products/${slug}`,
    });

    return response.data as ProductResponseType;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
