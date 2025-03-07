import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { handleSubmitData } from "../../pattern";
import {
  addCountryService,
  deleteCountryService,
  getCountryService,
  updateCountryService,
} from "../../service";

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

  const handleAddCountry = (datas) => {
    handleSubmitData(datas, addCountryService, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

  const handleEditCountry = (datas) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateCountryService, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

  const handleDeleteCountry = (datas) => {
    deleteCountryService(datas.id, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

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
    handleOpenModal,
    handleCloseModal,
    handleAddCountry,
    handleEditCountry,
    handleDeleteCountry,
  };
};
