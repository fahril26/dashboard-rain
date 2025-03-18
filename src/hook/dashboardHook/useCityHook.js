import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getCityService, getProvinceService } from "../../service";
import { useDataSub } from "../useSubDatas";

export const useCityHook = () => {
  const {
    stateShowModal,
    refreshData,
    setRefreshData,
    accessToken,
    submitType,
    dataRow,
    handleCloseModal,
  } = useGlobalHook();
  const [datasCity, setDatasCity] = useState([]);
  const [datasProvince, setDatasProvince] = useState([]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  const optionsSelect = datasProvince.map((data) => ({
    value: data.id,
    label: data.name,
  }));

  useDataSub(getProvinceService, {
    accessToken,
    submitType,
    setDatasProvince,
  });

  useEffect(() => {
    getCityService(accessToken, {
      setRefreshData,
      setDatasCity,
    });
  }, [refreshData]);

  return {
    datasCity,
    extraOptions,
    optionsSelect,
    stateShowModal,
    submitType,
    dataRow,
    handleCloseModal,
  };
};
