import axios from "axios";

export const URL = import.meta.env.VITE_BACKEND_URL;

export const httpClient = axios.create({
  baseURL : URL
});