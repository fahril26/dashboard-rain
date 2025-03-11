import { HeaderContent } from "../../components/molecules";
import Calendar from "../../components/organism/Calendar";
import {
  handleSubmitData,
  inputAddBanner,
  inputEditBanner,
} from "../../pattern";
import { useBannerHook } from "../../hook";
import {
  addBannerService,
  updateBannerService,
  deleteBannerService,
} from "../../service";

const Banner = () => {
  const {
    dataBanner,
    dataRow,
    submitType,
    stateShowModal,
    stateShowSidebar,
    accessToken,
    setRefreshData,
    handleCloseSidebar,
    handleCloseModal,
  } = useBannerHook();
  const handleAddEBanner = (datas) =>
    handleSubmitData(datas, addBannerService, {
      accessToken,
      setRefreshData,
      handleCloseSidebar,
    });

  const handleDeleteBanner = (datas) => {
    handleSubmitData(datas.id, deleteBannerService, {
      accessToken,
      setRefreshData,
      handleCloseSidebar,
      handleCloseModal,
    });
  };

  const handleUpdateBanner = (datas, extraOption) =>
    handleSubmitData({ ...datas, id: dataRow.id }, updateBannerService, {
      accessToken,
      setRefreshData,
      handleCloseSidebar,
      ...extraOption,
    });

  const handleScheduleEventBanner = (datas, extraOption) => {
    handleSubmitData(datas, updateBannerService, {
      accessToken,
      setRefreshData,
      ...extraOption,
    });
  };

  const handleServiceWithOnClick = (datas, extraOption) => {
    const { type } = extraOption;
    switch (type) {
      case "delete":
        handleDeleteBanner(datas);
        break;

      case "updateSchedule":
        handleScheduleEventBanner(datas, extraOption);
        break;
    }
  };

  return (
    <>
      <HeaderContent
        title={"Banner"}
        handleOpen={stateShowSidebar.handleShow}
      />

      <Calendar
        dataEvents={dataBanner}
        dataEvent={dataRow}
        submitType={submitType}
        inputForm={
          submitType === "add" ? inputAddBanner : inputEditBanner(dataRow)
        }
        stateShowModal={stateShowModal}
        stateShowSidebar={stateShowSidebar}
        handleServiceWithOnClick={handleServiceWithOnClick}
        handleService={
          submitType === "add"
            ? handleAddEBanner
            : submitType === "edit"
            ? handleUpdateBanner
            : null
        }
      />
    </>
  );
};

export default Banner;
