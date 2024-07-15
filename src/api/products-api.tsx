import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

export const getAllProduct = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/products`,
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
