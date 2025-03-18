import { formatDate } from "date-fns";
import { Button } from "../atom";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const TableBody = ({
  datasTable,
  configTable,
  tableType,
  handleShowModal,
  handleShowSidebar,
}) => {
  const pathname = useLocation().pathname;

  return (
    <tbody className="">
      {datasTable.length > 0 ? (
        datasTable?.map((data, index) => (
          <tr
            key={index}
            className="text-center bg-white border border-gray-300"
          >
            <td scope="row" className="px-6 py-4 font-medium text-gray-900">
              {index + 1}
            </td>
            {configTable?.map((col) => (
              <td
                key={col.key}
                scope="row"
                className={`${
                  col.key.includes("poster") ? "min-w-32" : ""
                } px-6 py-4 font-medium text-gray-900 text-nowrap`}
              >
                {col.key === "createdAt" || col.key === "updatedAt" ? (
                  formatDate(data[col.key])
                ) : col.key === "status" ? (
                  data[col.key] ? (
                    "Active"
                  ) : (
                    "Inactive"
                  )
                ) : col.key.includes("poster") ? (
                  <div className="w-full flex justify-center">
                    <img
                      className="w-20 h-28 object-cover"
                      src={`${import.meta.env.VITE_API_PUBLIC_IMG}films/${
                        data[col.key]
                      }`}
                    />
                  </div>
                ) : col.key === "trailer" ? (
                  <Link
                    to={data[col.key]}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {data[col.key]}
                  </Link>
                ) : (
                  data[col.key]
                )}
              </td>
            ))}
            <td>
              <div className="flex justify-center p-4 gap-3">
                {pathname === "/office" && (
                  <Button
                    className={"text-2xl text-violet-600"}
                    onClick={() => handleShowModal("location", data)}
                  >
                    <FaEye />
                  </Button>
                )}

                <Button
                  className={"text-2xl"}
                  onClick={() => {
                    if (tableType !== "films") {
                      handleShowModal("edit", data);
                    } else {
                      handleShowSidebar("edit", data);
                    }
                  }}
                >
                  <FaRegEdit className="text-blue-600" />
                </Button>
                <Button
                  className={"text-2xl"}
                  onClick={() => {
                    handleShowModal("delete", data);
                  }}
                >
                  <RiDeleteBin6Line className="text-red-600" />
                </Button>
              </div>
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
