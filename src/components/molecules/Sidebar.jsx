import { useLocation } from "react-router-dom";
import { navLink } from "../../pattern";
import Navlink from "./Navlink";
import Form from "./Form";
import { ModalLayout } from "../layouts";
import ConfirmDelete from "./ConfirmDelete";

const Sidebar = ({
  type = "",
  inputForm,
  title,
  slide,
  position,
  submitType,
  handleService,
  handleShow,
  handleOpenModal,
  dataDefault,
  isShow = true,
}) => {
  const currentPath = useLocation().pathname;
  return (
    <>
      <div
        className={`${slide ? "fixed" : ""} flex ${
          isShow && slide ? "inset-0" : ""
        }`}
      >
        {isShow && slide && (
          <div
            className="flex-1 bg-black/60 h-screen absolute inset-0 "
            onClick={handleShow}
          ></div>
        )}

        <div
          className={`${
            slide ? "fixed w-96 z-40" : "static w-72"
          } inset-y-0 ${position} flex-1  ${
            type === "form" ? "bg-white px-6" : "bg-blue-600 text-white"
          }  p-4 transform transition-transform duration-300 shadow-xl ${
            isShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {type === "form" ? (
            <>
              <h3 className="text-gray-500 font-semibold mb-6">{title}</h3>
              <Form
                configInput={inputForm}
                handleSubmitData={handleService}
                forType={"sidebar"}
                dataDefault={dataDefault}
                type={submitType}
                handleOpenModal={handleOpenModal}
                handleShowSidebar={handleShow}
              />
            </>
          ) : (
            <Navlink links={navLink} currentPath={currentPath} />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
