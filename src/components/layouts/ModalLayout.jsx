import { IoClose } from "react-icons/io5";
import { Button } from "../atom";

const ModalLayout = ({
  title,
  isModalOpen,
  submitType,
  children,
  handleShowModal,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60">
          <div className="flex justify-center items-center h-full">
            <div
              className={`${
                submitType !== "delete" ? "min-w-[600px]" : ""
              } bg-white rounded-sm p-5`}
            >
              {submitType !== "delete" && (
                <div className="mb-10 flex justify-between">
                  {submitType !== "delete" && (
                    <h3 className="text-xl font-semibold">{title}</h3>
                  )}
                  <Button onClick={handleShowModal}>
                    <IoClose />
                  </Button>
                </div>
              )}

              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
