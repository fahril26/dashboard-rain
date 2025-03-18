import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders } from "../generateHeaders";

export const getOfficeService = async (accessToken, extraOptions) => {
  const { setDatasOffice, setRefreshData } = extraOptions;

  try {
    const response = await GET("crud/office", accessToken);

    const parsing = response.data.payload.map((data) => ({
      id: data.id_office,
      name: data.office_name,
      id_city: data.id_city,
      city_name: data.created_city_office?.city_name || "-",
      status: data.status,
      ig: data.ig,
      fb: data.fb,
      x: data.x,
      yt: data.yt,
      address: data.address,
      longitude: data.longitude,
      latitude: data.latitude,
      username: data.created_office.user_name,
    }));

    setDatasOffice(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addOfficeService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/office", datas, headers);

    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateOfficeService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/office", datas, headers);

    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteOfficeService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/office", accessToken, id);
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
