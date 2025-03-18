import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getFilmService } from "../../service";

export const useFilmsHook = () => {
  const {
    accessToken,
    dataRow,
    submitType,
    refreshData,
    stateShowSidebar,
    stateShowModal,
    setRefreshData,
    searchQuery,
    setSearchQuery,
    handleCloseModal,
    handleCloseSidebar,
  } = useGlobalHook();
  const [datasFilms, setDatasFilms] = useState([]);

  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseSidebar,
    handleCloseModal,
  };

  useEffect(() => {
    const fetchData = () => {
      getFilmService(accessToken, {
        searchQuery,
        setDatasFilms,
        setRefreshData,
      });
    };

    if (Object.keys(searchQuery).length > 0) {
      const timeout = setTimeout(fetchData, 300);
      return () => clearTimeout(timeout);
    } else {
      fetchData();
    }
  }, [searchQuery, refreshData]);

  return {
    datasFilms,
    dataRow,
    setSearchQuery,
    submitType,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
  };
};
