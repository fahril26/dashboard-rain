import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import {
  configTableOffice,
  inputAddOffice,
  inputEditOffice,
} from "../../pattern";
import { useOfficeHook } from "../../hook";
import {
  handleAddOffice,
  handleDeleteOffice,
  handleEditOffice,
} from "../../service";

const Office = () => {
  const {
    stateShowModal,
    dataRow,
    submitType,
    datasOffice,
    optionsSelect,
    extraOptions,
  } = useOfficeHook();

  return (
    <>
      <HeaderContent title={"Office"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={datasOffice}
        dataRow={dataRow}
        configTable={configTableOffice}
        stateShowModal={stateShowModal}
        inputForm={
          submitType === "add"
            ? inputAddOffice(optionsSelect)
            : inputEditOffice(dataRow, optionsSelect)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddOffice(extraOptions)
            : submitType === "edit"
            ? handleEditOffice(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteOffice(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Office;
