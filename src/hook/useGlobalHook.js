import { useState } from "react";
import Cookies from "js-cookie";

export const useGlobalHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(true);
  const [submitType, setSubmitType] = useState(null);
  const [dataRow, setDataRow] = useState({});
  const accessToken = Cookies.get("accessToken");

  const handleOpenModal = (type, dataDefault) => {
    if (dataDefault) {
      setDataRow(dataDefault);
    }

    setSubmitType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    refreshData,
    setRefreshData,
    accessToken,
    handleOpenModal,
    handleCloseModal,
    submitType,
    setSubmitType,
    dataRow,
    setDataRow,
  };
};
