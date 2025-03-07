import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { handleSubmitData } from "../../pattern";
import { updateBannerService } from "../../service";
import {
  addBannerService,
  deleteBannerService,
  getBannerService,
  updateScheduleBannerService,
} from "../../service/dashboardService/bannerService";

export const useBannerHook = () => {
  const [dataBanner, setDataBanner] = useState([]);
  const {
    isModalOpen,
    refreshData,
    setRefreshData,
    accessToken,
    handleOpenModal,
    handleCloseModal,
    submitType,
    dataRow,
  } = useGlobalHook();

  const handleAddEvent = (datas) => {
    handleSubmitData(datas, addBannerService, {
      accessToken,
      handleCloseModal,
      setRefreshData,
    });
  };

  const handleUpdateEvent = (datas) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateBannerService, {
      accessToken,
      handleCloseModal,
      setRefreshData,
    });
  };

  const handleDeleteEvent = (data) => {
    deleteBannerService(data.id, {
      accessToken,
      handleCloseModal,
      setRefreshData,
    });
  };

  const handleScheduleEventUpdate = (datas, setUpdatedEvents) => {
    updateScheduleBannerService(datas, {
      accessToken,
      setUpdatedEvents,
      setRefreshData,
    });
  };

  useEffect(() => {
    getBannerService(accessToken, { setDataBanner, setRefreshData });
  }, [refreshData]);

  return {
    dataBanner,
    dataRow,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    submitType,
    handleAddEvent,
    handleDeleteEvent,
    handleUpdateEvent,
    handleScheduleEventUpdate,
  };
};
