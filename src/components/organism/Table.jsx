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
      <div className="float-end items-center p-4">
        <Button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleShowModal("add")}
        >
          Add
        </Button>
      </div>

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
        handleShowModal={handleShowModal}
        submitType={submitType}
        title={submitType === "add" ? "Add Country" : "Edit Country"}
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
