import { HeaderContent } from "../../components/molecules";
import {
  configTableCountry,
  handleSubmitData,
  inputAddCountry,
  inputEditCountry,
} from "../../pattern";
import { useCountryHook } from "../../hook";
import { Table } from "../../components/organism";
import {
  addCountryService,
  deleteCountryService,
  updateCountryService,
} from "../../service";

const Country = () => {
  const {
    datasCountry,
    isModalOpen,
    submitType,
    dataRow,
    accessToken,
    setRefreshData,
    handleOpenModal,
    handleCloseModal,
  } = useCountryHook();

  const handleAddCountry = (datas) => {
    handleSubmitData(datas, addCountryService, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

  const handleEditCountry = (datas) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateCountryService, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

  const handleDeleteCountry = (datas) => {
    deleteCountryService(datas.id, {
      accessToken,
      setRefreshData,
      handleCloseModal,
    });
  };

  return (
    <>
      <HeaderContent title={"Country"} handleOpen={handleOpenModal} />

      <Table
        datasTable={datasCountry}
        dataRow={dataRow}
        configTable={configTableCountry}
        isModalOpen={isModalOpen}
        handleShowModal={isModalOpen ? handleCloseModal : handleOpenModal}
        inputForm={
          submitType === "add" ? inputAddCountry : inputEditCountry(dataRow)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddCountry
            : submitType === "edit"
            ? handleEditCountry
            : submitType === "delete"
            ? handleDeleteCountry
            : null
        }
      />
    </>
  );
};

export default Country;
