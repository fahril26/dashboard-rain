import { DELETE, GET, POST, PUT } from "../../api";

export const getAboutService = async () => {
  try {
    const response = await GET("crud/about/");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
