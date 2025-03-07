import { HeaderContent } from "../../components/molecules";
import Calendar from "../../components/organism/Calendar";
import { inputAddBanner, inputEditBanner } from "../../pattern";
import { useBannerHook } from "../../hook";

const Banner = () => {
  const {
    dataBanner,
    dataRow,
    submitType,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleAddEvent,
    handleDeleteEvent,
    handleUpdateEvent,
    handleScheduleEventUpdate,
  } = useBannerHook();

  return (
    <>
      <HeaderContent title={"Banner"} />

      <Calendar
        dataEvents={dataBanner}
        dataEvent={dataRow}
        submitType={submitType}
        isModalOpen={isModalOpen}
        handleShowModal={isModalOpen ? handleCloseModal : handleOpenModal}
        inputForm={
          submitType === "add" ? inputAddBanner : inputEditBanner(dataRow)
        }
        handleService={
          submitType === "add"
            ? handleAddEvent
            : submitType === "edit"
            ? handleUpdateEvent
            : submitType === "delete"
            ? handleDeleteEvent
            : handleScheduleEventUpdate
        }
      />
    </>
  );
};

export default Banner;
