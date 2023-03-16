import axios from "axios";

export const GOOGLE_LOGIN_URL = "http://localhost:8080/api/auth/google";
export const DEV_URL = "http://localhost:8080/api";

let accessToken = null;
if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("accessToken");
}

export const API = axios.create({
  baseURL: DEV_URL,
  headers: {
    Accept: "application/json",
  },
});

export const API_TOKEN = axios.create({
  baseURL: DEV_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
