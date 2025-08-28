import axios from "axios";

export const URL = "http://localhost:8080";

export const httpClient = axios.create({
  baseURL : URL
});