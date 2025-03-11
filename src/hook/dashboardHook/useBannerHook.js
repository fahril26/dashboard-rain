import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";

import { getBannerService } from "../../service/dashboardService/bannerService";

export const useBannerHook = () => {
  const [dataBanner, setDataBanner] = useState([]);
  const {
    refreshData,
    setRefreshData,
    accessToken,
    handleCloseModal,
    handleCloseSidebar,
    stateShowModal,
    stateShowSidebar,
    submitType,
    dataRow,
  } = useGlobalHook();
  console.log(refreshData);

  useEffect(() => {
    getBannerService(accessToken, { setDataBanner, setRefreshData });
  }, [refreshData]);

  return {
    dataBanner,
    dataRow,
    submitType,
    stateShowModal,
    stateShowSidebar,
    accessToken,
    setRefreshData,
    handleCloseSidebar,
    handleCloseModal,
  };
};
