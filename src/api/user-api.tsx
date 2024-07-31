import { ProfileResponse } from "@/lib/types";
import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

export const getProfile = async (token: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/auth/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as ProfileResponse;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
