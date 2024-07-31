import { CartResponse } from "@/lib/types";
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
