import axios from "axios";

export const GOOGLE_LOGIN_URL = "http://localhost:8080/api/auth/google";
export const DEV_URL = "http://localhost:8080/api";
export const IMAGE_URL = "http://localhost:8080";

export const API = axios.create({
  baseURL: DEV_URL,
  headers: {
    Accept: "application/json",
  },
});
