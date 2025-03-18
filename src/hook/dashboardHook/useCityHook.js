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
    searchQuery,
    setSearchQuery,
    dataRow,
    handleCloseModal,
  } = useGlobalHook();
  const [datasCity, setDatasCity] = useState([]);
  const [datasProvince, setDatasProvince] = useState([]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  const optionsSelect = datasProvince.map((data) => ({
    value: data.id,
    label: data.province_name,
  }));

  useDataSub(getProvinceService, {
    searchQuery: {},
    accessToken,
    submitType,
    setDatasProvince,
  });

  useEffect(() => {
    const fetchData = () => {
      getCityService(accessToken, {
        searchQuery,
        setDatasCity,
        setRefreshData,
        handleCloseModal,
      });
    };

    if (Object.keys(searchQuery).length > 0) {
      const timeout = setTimeout(fetchData, 300);
      return () => clearTimeout(timeout);
    } else {
      fetchData();
    }
  }, [refreshData, searchQuery]);

  return {
    datasCity,
    extraOptions,
    optionsSelect,
    stateShowModal,
    setSearchQuery,
    submitType,
    dataRow,
    handleCloseModal,
  };
};
