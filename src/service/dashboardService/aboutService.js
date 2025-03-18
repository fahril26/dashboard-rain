import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders } from "../generateHeaders";

export const getAboutService = async (accessToken, extraOptions) => {
  const { setDatasAbout, setRefreshData } = extraOptions;
  try {
    const response = await GET("crud/about", accessToken);

    setDatasAbout(response.data.payload);
    setRefreshData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addAboutService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
  });
  try {
    const response = await POST("crud/about", datas, headers);
    console.log(response);
    if (response.data.success) {
      alert(response.data.message);
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateAboutService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
  });
  try {
    const response = await PUT("crud/about", datas, headers);
    console.log(response);
    if (response.data.status) {
      alert(response.data.message);
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteAboutService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/about", accessToken, id);
    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};

export const UpdateAboutService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
  });
  try {
    const response = await PUT("crud/about", datas, headers);
    console.log(response);
    if (response.data.success) {
      alert(response.data.message);
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};
