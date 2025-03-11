import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getCountryService } from "../../service";

export const useCountryHook = () => {
  const [datasCountry, setDatasCountry] = useState([]);
  const {
    accessToken,
    refreshData,
    setRefreshData,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    submitType,
    dataRow,
  } = useGlobalHook();

  useEffect(() => {
    getCountryService(accessToken, {
      setDatasCountry,
      setRefreshData,
      handleCloseModal,
    });
  }, [refreshData]);

  return {
    datasCountry,
    isModalOpen,
    submitType,
    dataRow,
    accessToken,
    setRefreshData,
    handleOpenModal,
    handleCloseModal,
  };
};
