import { API_BASE_URL } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const request = {
  get: <T>(url: string, params?: object) =>
    axiosInstance
      .get<T>(url, {
        ...params,
      })
      .then((res) => res.data),
  post: <T>(url: string, params?: object) =>
    axiosInstance.post<T>(url, params).then((res) => res.data),
};
