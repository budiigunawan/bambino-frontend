import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

export const getAllProduct = async (page: number = 1, limit: number = 10) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/products?page=${page}&limit=${limit}`,
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
