import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getAboutService } from "../../service";

export const useAboutHook = () => {
  const {
    accessToken,
    setRefreshData,
    handleOpenModal,
    isModalOpen,
    handleCloseModal,
    submitType,
    refreshData,
    searchQuery,
    setSearchQuery,
    dataRow,
  } = useGlobalHook();
  const [datasAbout, setDatasAbout] = useState([]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    getAboutService(accessToken, { setRefreshData, setDatasAbout });
  }, [refreshData]);

  return {
    datasAbout,
    isModalOpen,
    submitType,
    searchQuery,
    setSearchQuery,
    dataRow,
    extraOptions,
    handleOpenModal,
    handleCloseModal,
  };
};
