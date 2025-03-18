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
    searchQuery,
    setSearchQuery,
    submitType,
  } = useGlobalHook();
  const [datasOffice, setDatasOffice] = useState([]);
  const [datasCity, setDatasCity] = useState([]);

  const optionsSelect = datasCity.map((data) => ({
    value: data.id,
    label: data.city_name,
  }));
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    const fetchData = () => {
      getOfficeService(accessToken, {
        searchQuery,
        setDatasOffice,
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

  useDataSub(getCityService, {
    accessToken,
    searchQuery: {},
    submitType,
    setDatasCity,
  });

  return {
    accessToken,
    refreshData,
    setRefreshData,
    stateShowModal,
    setSearchQuery,
    dataRow,
    submitType,
    datasOffice,
    optionsSelect,
    extraOptions,
  };
};
