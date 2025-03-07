import { DELETE, GET, POST, PUT } from "../../api";

export const getCountryService = async (accessToken, extraOptions) => {
  const { setDatasCountry, setRefreshData } = extraOptions;
  try {
    const response = await GET("/crud/country", accessToken);

    const parsing = response.data.payload.map((data) => ({
      id: data.id_country,
      name: data.country_name,
      code: data.country_code,
      username: data.created_country.user_name,
    }));

    setDatasCountry(parsing);
    setRefreshData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addCountryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": `mktech ${accessToken}`,
  };
  try {
    const response = await POST("crud/country", datas, headers);
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

export const updateCountryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": `mktech ${accessToken}`,
  };
  try {
    const response = await PUT("crud/country", datas, headers);
    console.log(response);
    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteCountryService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/country", accessToken, id);
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
