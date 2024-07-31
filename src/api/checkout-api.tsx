import { AddToCart, CartItemResponse, CartResponse } from "@/lib/types";
import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

export const getCart = async (token: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/carts`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as CartResponse;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addCartItem = async (token: string, cartItemData: AddToCart) => {
  try {
    console.log("aci");

    const response = await axios({
      method: "POST",
      url: `${baseUrl}/carts/items`,
      data: cartItemData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as CartItemResponse;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
