import {
  handleAddProvince,
  handleEditProvince,
  handleDeleteProvince,
} from "../../service";
import { useProvinceHook } from "../../hook";
import { Table } from "../../components/organism";
import {
  configTableProvince,
  inputAddProvince,
  inputEditProvince,
} from "../../pattern";
import { HeaderContent } from "../../components/molecules";

const Province = () => {
  const {
    datasProvince,
    optionsSelect,
    submitType,
    extraOptions,
    dataRow,
    stateShowModal,
  } = useProvinceHook();

  return (
    <>
      <HeaderContent
        title={"Province"}
        handleOpen={stateShowModal?.handleShow}
      />
      <Table
        datasTable={datasProvince}
        dataRow={dataRow}
        configTable={configTableProvince}
        stateShowModal={stateShowModal}
        inputForm={
          submitType === "add"
            ? inputAddProvince(optionsSelect)
            : inputEditProvince(dataRow, optionsSelect)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddProvince(extraOptions)
            : submitType === "edit"
            ? handleEditProvince(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteProvince(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Province;
