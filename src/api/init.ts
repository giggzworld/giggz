import axios from "axios";
import { BASE_URL } from "@env";
import { StorageKeys, getDataFromStorage } from "../utils/storage";

export const ApiReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getDataFromStorage(StorageKeys.TOKEN)}`,
  },
});

ApiReq.interceptors.request.use(async (config) => {
  const token = await getDataFromStorage(StorageKeys.TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("config", config);
  }
  return config;
});
