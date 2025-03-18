import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders } from "../generateHeaders";

export const getCityService = async (accessToken, extraOptions) => {
  const { setDatasCity, setRefreshData } = extraOptions;

  try {
    const response = await GET("crud/city", accessToken);

    const parsing = response.data.payload.map((data) => ({
      id: data.id_city,
      name: data.city_name,
      code: data.city_code,
      id_province: data.id_province,
      province_name: data.created_province_city?.province_name || "-",
      status: data.status,
      username: data.created_city.user_name,
    }));

    setDatasCity(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addCityService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await POST("crud/city", datas, headers);
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

export const updateCityService = async (datas, extraOptions) => {
  console.log(datas);

  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/city", datas, headers);

    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteCityService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/city", accessToken, id);
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
