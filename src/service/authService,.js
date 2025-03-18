import { POST } from "../api";
import { removeCookies, setCookies } from "./handleCookies";

export const loginService = async (data, extraOptions) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await POST("auth/login", data, headers);
    if (response.data.status) {
      alert(response.data.message);
      setCookies(response);
      extraOptions.navigate("/");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    console.log(error);
  }
};

export const logoutService = () => {
  removeCookies();
};
