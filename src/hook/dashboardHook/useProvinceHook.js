import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getCountryService, getProvinceService } from "../../service";
import { useDataSub } from "../useSubDatas";

export const useProvinceHook = () => {
  const {
    refreshData,
    accessToken,
    setRefreshData,
    submitType,
    handleCloseModal,
    dataRow,
    stateShowModal,
  } = useGlobalHook();
  const [datasProvince, setDatasProvince] = useState([]);
  const [datasCountry, setDatasCountry] = useState([]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };
  const optionsSelect = datasCountry.map((data) => ({
    value: data.id,
    label: data.name,
  }));

  useDataSub(getCountryService, {
    accessToken,
    submitType,
    setDatasCountry,
  });

  useEffect(() => {
    getProvinceService(accessToken, {
      setDatasProvince,
      setRefreshData,
    });
  }, [refreshData, datasCountry]);

  return {
    datasProvince,
    optionsSelect,
    submitType,
    dataRow,
    stateShowModal,
    extraOptions,
    handleCloseModal,
  };
};
