import { POST } from "../api";
import { setCookies } from "./handleCookies";

export const loginService = async (data, navigate) => {
  try {
    const response = await POST("/auth/login", data);
    if (response.data.status) {
      alert(response.data.message);
      setCookies(response);
      navigate("/");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    console.log(error);
  }
};
