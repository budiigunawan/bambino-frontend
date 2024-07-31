import {
  LoginResponse,
  RegisterResponse,
  UserDataLogin,
  UserDataRegister,
} from "@/lib/types";
import axios, { AxiosError } from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASEURL;

export const register = async (userData: UserDataRegister) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/auth/register`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data as RegisterResponse;
  } catch (err) {
    console.error(err);
    const error = err as AxiosError;
    return error.response?.data;
  }
};

export const login = async (userData: UserDataLogin) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/auth/login`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data as LoginResponse;
  } catch (err) {
    console.error(err);
    const error = err as AxiosError;
    return error.response?.data;
  }
};
