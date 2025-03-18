import { ModalLayout } from "../layouts";
import {
  ConfirmDelete,
  Form,
  InputTable,
  Sidebar,
  TableBody,
  TableHead,
} from "../molecules";

const Table = ({
  configTable,
  datasTable,
  dataRow,
  stateShowSidebar,
  stateShowModal,
  handleSearch,
  inputForm,
  submitType,
  tableType,
  handleService,
}) => {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-4 lg:flex-row justify-between">
        <InputTable configTable={configTable} handleSearch={handleSearch} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full rounded-t-md overflow-hidden">
          <TableHead configTable={configTable} type={"table"} />
          <TableBody
            datasTable={datasTable}
            configTable={configTable}
            tableType={tableType}
            handleShowSidebar={stateShowSidebar?.handleShow}
            handleShowModal={stateShowModal?.handleShow}
          />
        </table>

        {tableType === "films" && (
          <Sidebar
            isShow={stateShowSidebar?.isShow}
            type="form"
            slide
            position={"right-0"}
            submitType={submitType}
            dataDefault={dataRow}
            title={submitType === "add" ? "Add Film" : "Update Film"}
            inputForm={inputForm}
            handleShow={stateShowSidebar?.handleShow}
            handleService={handleService}
          />
        )}

        <ModalLayout
          isModalOpen={stateShowModal?.isShow}
          handleCloseModal={stateShowModal?.handleShow}
          submitType={submitType}
          title={submitType === "add" ? "Create" : "Update"}
          closeButton={submitType !== "delete"}
        >
          {submitType !== "delete" ? (
            <Form
              configInput={inputForm}
              buttonText={"Submit"}
              handleSubmitData={handleService}
            />
          ) : (
            <ConfirmDelete
              handleCloseModal={stateShowModal?.handleShow}
              dataRow={{ ...dataRow, title: dataRow.name || dataRow.title }}
              onConfirm={handleService}
            />
          )}
        </ModalLayout>
      </div>
    </div>
  );
};

export default Table;
