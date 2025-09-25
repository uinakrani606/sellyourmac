import axios from "axios";

const api = axios.create({
  baseURL: "https://api.sellyourmac.com.au/api", // Base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;