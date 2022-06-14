import axios from "axios";
import { getToken } from "../service/localStorageService";
import { API_ENDPOINT_URL } from "./env";

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
