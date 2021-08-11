import axios from "axios";

export const appInstance = axios.create({
  baseURL: process.env.REACT_APP_APP_URL,
  headers: { "Content-Type": "multipart/form-data" },
});
