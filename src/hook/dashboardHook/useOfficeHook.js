import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getCityService, getOfficeService } from "../../service";
import { useDataSub } from "../useSubDatas";

export const useOfficeHook = () => {
  const {
    accessToken,
    refreshData,
    setRefreshData,
    stateShowModal,
    handleCloseModal,
    dataRow,
    submitType,
  } = useGlobalHook();
  const [datasOffice, setDatasOffice] = useState([]);
  const [datasCity, setDatasCity] = useState([]);

  const optionsSelect = datasCity.map((data) => ({
    value: data.id,
    label: data.name,
  }));
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    getOfficeService(accessToken, {
      setDatasOffice,
      setRefreshData,
      handleCloseModal,
    });
  }, [refreshData]);

  useDataSub(getCityService, {
    accessToken,
    submitType,
    setDatasCity,
  });

  return {
    accessToken,
    refreshData,
    setRefreshData,
    stateShowModal,
    dataRow,
    submitType,
    datasOffice,
    optionsSelect,
    extraOptions,
  };
};
