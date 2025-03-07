import { HeaderContent } from "../../components/molecules";
import {
  configTableCountry,
  inputAddCountry,
  inputEditCountry,
} from "../../pattern";
import { useCountryHook } from "../../hook";
import { Table } from "../../components/organism";

const Country = () => {
  const {
    datasCountry,
    isModalOpen,
    submitType,
    dataRow,
    handleOpenModal,
    handleCloseModal,
    handleAddCountry,
    handleEditCountry,
    handleDeleteCountry,
  } = useCountryHook();

  return (
    <>
      <HeaderContent title={"Country"} />

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
