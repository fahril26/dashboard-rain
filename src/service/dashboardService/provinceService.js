import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders } from "../generateHeaders";

export const getProvinceService = async (accessToken, extraOptions) => {
  const { setDatasProvince, setRefreshData } = extraOptions;

  try {
    const response = await GET("crud/province", accessToken);

    const parsing = response.data.payload.map((data) => ({
      id: data.id_province,
      name: data.province_name,
      code: data.province_code,
      country_id: data.id_country,
      country_name: data.created_province_country?.country_name || "-",
      status: data.status,
      username: data.created_province.user_name,
    }));

    setDatasProvince(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addProvinceService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await POST("crud/province", datas, headers);
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

export const updateProvinceService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/province", datas, headers);

    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteProvinceService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/province", accessToken, id);
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
