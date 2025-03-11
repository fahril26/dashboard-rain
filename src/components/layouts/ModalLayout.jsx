import { IoClose } from "react-icons/io5";
import { Button } from "../atom";

const ModalLayout = ({
  title,
  isModalOpen,
  closeButton,
  children,
  handleCloseModal,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div
            className="absolute inset-0 h-screen bg-black/60"
            onClick={handleCloseModal}
          ></div>
          <div className="flex justify-center items-center h-full">
            <div className={`bg-white rounded-sm p-5 w-[500px] z-10`}>
              {closeButton && (
                <div className="mb-10 flex justify-between">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <Button onClick={handleCloseModal}>
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
