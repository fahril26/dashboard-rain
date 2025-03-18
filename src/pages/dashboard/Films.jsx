import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useFilmsHook } from "../../hook";
import {
  handleAddFilms,
  handleDeleteFilms,
  handleEditFilms,
} from "../../service";
import {
  configTableFilms,
  handleSearch,
  inputAddFilms,
  inputEditFilms,
} from "../../pattern";

const Films = () => {
  const {
    datasFilms,
    dataRow,
    submitType,
    setSearchQuery,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
  } = useFilmsHook();

  return (
    <>
      <HeaderContent title={"Film"} handleOpen={stateShowSidebar.handleShow} />

      <Table
        datasTable={datasFilms}
        dataRow={dataRow}
        configTable={configTableFilms}
        stateShowSidebar={stateShowSidebar}
        stateShowModal={stateShowModal}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add" ? inputAddFilms : inputEditFilms(dataRow)
        }
        submitType={submitType}
        tableType={"films"}
        handleService={
          submitType === "add"
            ? handleAddFilms(extraOptions)
            : submitType === "edit"
            ? handleEditFilms(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteFilms(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Films;
