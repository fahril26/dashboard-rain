import { handleSubmitData } from "../../pattern";
import {
  addBannerService,
  deleteBannerService,
  updateBannerService,
} from "../dashboardService/bannerService";

export const handleAddBanner = (extraOptions) => (datas) =>
  handleSubmitData(datas, addBannerService, extraOptions);

export const handleUpdateBanner = (extraOptions, dataRow) => {
  return (datas, extraOptionsCalendar) =>
    handleSubmitData({ ...datas, id: dataRow.id }, updateBannerService, {
      ...extraOptions,
      ...extraOptionsCalendar,
    });
};

export const handleServiceWithOnClick = (extraOptions) => {
  return (datas, extraOptionsCalendar) => {
    const { type } = extraOptionsCalendar;

    switch (type) {
      case "delete":
        deleteBannerService(datas.id, extraOptions);
        break;

      case "updateSchedule":
        updateBannerService(datas, {
          ...extraOptions,
          setUpdatedEvents: extraOptionsCalendar.setUpdatedEvents,
        });
        break;
    }
  };
};
