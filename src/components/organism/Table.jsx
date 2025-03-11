import { Button } from "../atom";
import { ModalLayout } from "../layouts";
import { ConfirmDelete, Form, TableBody, TableHead } from "../molecules";

const Table = ({
  handleShowModal,
  configTable,
  datasTable,
  dataRow,
  inputForm,
  submitType,
  isModalOpen,
  handleService,
}) => {
  return (
    <div>
      <table className="w-full rounded-t-md overflow-hidden">
        <TableHead configTable={configTable} type={"table"} />
        <TableBody
          datasTable={datasTable}
          configTable={configTable}
          handleShowModal={handleShowModal}
        />
      </table>
      <ModalLayout
        isModalOpen={isModalOpen}
        handleCloseModal={handleShowModal}
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
            handleCloseModal={handleShowModal}
            dataRow={{ ...dataRow, title: dataRow.name }}
            onConfirm={handleService}
          />
        )}
      </ModalLayout>
    </div>
  );
};

export default Table;
