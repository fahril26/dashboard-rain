import { GET } from "../../api";

export const getBannerService = async (accessToken, setData) => {
  try {
    const response = await GET("/crud/banner", accessToken);
    const parsing = response.data.payload.map((data) => ({
      ...data,
      startDate: data.start_date_banner,
      endDate: data.end_date_banner,
      title: data.banner_name,
    }));

    setData(parsing);
    console.log(response);
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    console.log(error);
  }
};
