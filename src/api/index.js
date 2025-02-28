import axios from "axios";

export const POST = (endpoint, data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}${endpoint}`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const GET = (endpoint, accessToken) => {
  return axios.get(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `mktech ${accessToken}`,
    },
  });
};
