import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getCountryService } from "../../service";

export const useCountryHook = () => {
  const [datasCountry, setDatasCountry] = useState([]);
  const {
    accessToken,
    refreshData,
    searchQuery,
    setSearchQuery,
    setRefreshData,
    handleCloseModal,
    submitType,
    stateShowModal,
    dataRow,
  } = useGlobalHook();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    const fetchData = () => {
      getCountryService(accessToken, {
        searchQuery,
        setDatasCountry,
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
    datasCountry,
    setSearchQuery,
    submitType,
    dataRow,
    extraOptions,
    stateShowModal,
  };
};
