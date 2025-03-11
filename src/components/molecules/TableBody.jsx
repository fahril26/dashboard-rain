import { formatDate } from "date-fns";
import { Button } from "../atom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableBody = ({ datasTable, configTable, handleShowModal }) => {
  return (
    <tbody className="">
      {datasTable.length > 0 ? (
        datasTable?.map((data, index) => (
          <tr
            key={index}
            className="text-center bg-white border border-gray-300"
          >
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {index + 1}
            </td>
            {configTable?.map((col) => (
              <td
                key={col.key}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {col.key === "createdAt" || col.key === "updatedAt"
                  ? formatDate(data[col.key])
                  : data[col.key]}
              </td>
            ))}
            <td className="flex justify-center py-3 gap-3">
              <Button
                className={"text-2xl"}
                onClick={() => handleShowModal("edit", data)}
              >
                <FaRegEdit className="text-blue-600" />
              </Button>
              <Button
                className={"text-2xl"}
                onClick={() => handleShowModal("delete", data)}
              >
                <RiDeleteBin6Line className="text-red-600" />
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr className="text-center bg-white border border-gray-300 h-96">
          <td colSpan={configTable.length + 2}>No data found</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
