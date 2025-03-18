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
    searchQuery,
    setSearchQuery,
    stateShowModal,
  } = useGlobalHook();
  const [datasProvince, setDatasProvince] = useState([]);
  const [datasCountry, setDatasCountry] = useState([]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };
  const optionsSelect = datasCountry.map((data) => ({
    value: data.id,
    label: data.country_name,
  }));

  useDataSub(getCountryService, {
    accessToken,
    searchQuery: {},
    submitType,
    setDatasCountry,
  });

  useEffect(() => {
    const fetchData = () => {
      getProvinceService(accessToken, {
        searchQuery,
        setDatasProvince,
        setRefreshData,
      });
    };

    if (Object.keys(searchQuery).length > 0) {
      const timeout = setTimeout(fetchData, 300);
      return () => clearTimeout(timeout);
    } else {
      fetchData();
    }
  }, [refreshData, datasCountry, searchQuery]);

  return {
    datasProvince,
    optionsSelect,
    setSearchQuery,
    submitType,
    dataRow,
    stateShowModal,
    extraOptions,
    handleCloseModal,
  };
};
