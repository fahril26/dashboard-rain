import { DELETE, GET, POST, PUT } from "../../api";

export const getBannerService = async (accessToken, extraOptions) => {
  const { setDataBanner, setRefreshData } = extraOptions;
  try {
    const response = await GET("/crud/banner", accessToken);
    const parsing = response.data.payload.map((data) => ({
      id: data.id_banner,
      startDate: data.start_date_banner,
      endDate: data.end_date_banner,
      title: data.banner_name,
      img: data.banner_img,
      status: data.status,
    }));

    setDataBanner(parsing);
    setRefreshData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    console.log(error);
  }
};

export const updateScheduleBannerService = async (datas, extraOptions) => {
  const { accessToken, setUpdatedEvents, setRefreshData } = extraOptions;
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": `mktech ${accessToken}`,
  };

  try {
    const updatePromises = datas.map((event) => {
      return PUT(
        `crud/banner`,
        {
          ...event,
          start_date_banner: event.startDate,
          end_date_banner: event.endDate,
        },
        headers
      );
    });

    const responses = await Promise.all(updatePromises);
    if (responses.every((response) => response.data.status)) {
      alert("Update Success");
      setUpdatedEvents([]);
      setRefreshData(false);
    }
    console.log(responses);
  } catch (error) {
    console.error("Update Failed:", error);
    throw error;
  }
};

export const addBannerService = async (datas, extraOptions) => {
  const { accessToken, handleCloseModal, setRefreshData } = extraOptions;
  const headers = {
    "Content-Type": "multipart/form-data",
    "x-access-token": `mktech ${accessToken}`,
  };

  try {
    const response = await POST(
      "crud/banner",
      { ...datas, banner_img: datas.banner_img[0] },
      headers
    );

    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Update Failed:", error);
    throw error;
  }
};

export const updateBannerService = async (datas, extraOptions) => {
  const { accessToken, handleCloseModal, setRefreshData } = extraOptions;
  const headers = {
    "Content-Type": "multipart/form-data",
    "x-access-token": `mktech ${accessToken}`,
  };
  try {
    const response = await PUT(
      "crud/banner",
      {
        ...datas,
        banner_img:
          typeof datas.banner_img === "string"
            ? datas.banner_img
            : datas.banner_img[0],
      },
      headers
    );
    console.log(response);
    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error("Update Failed:", error);
    throw error;
  }
};

export const deleteBannerService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/banner", accessToken, id);
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
