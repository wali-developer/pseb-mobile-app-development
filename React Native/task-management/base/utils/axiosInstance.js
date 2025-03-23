import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-todorn.vercel.app/api",
});
