import { Button } from "../atom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ConfirmDelete, EventLabel, Form, TableHead } from "../molecules";
import { addMonths, format, subMonths } from "date-fns";
import { useCalendar } from "../../hook/useCalendar";
import { ModalLayout } from "../layouts";
import { dayNames } from "../../pattern";

const Calendar = ({
  dataEvent,
  dataEvents,
  handleService,
  isModalOpen,
  handleShowModal,
  inputForm,
  submitType,
}) => {
  const {
    calendarData,
    events,
    currentDate,
    updatedEvents,
    setCurrentDate,
    isEventOnDate,
    isToday,
    normalizeDate,
    handleDrop,
    handleDragStart,
    handleSave,
    handleCancel,
  } = useCalendar(dataEvents, handleService);

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center border-t border-l border-r rounded-t-sm border-gray-400 p-4">
        <h2 className="text-lg font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>

        <div className="flex items-center gap-2">
          <Button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            <IoIosArrowBack />
          </Button>
          <Button
            className={"hover:underline"}
            onClick={() => setCurrentDate(new Date())}
          >
            Today
          </Button>
          <Button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <IoIosArrowForward />
          </Button>
          <Button
            onClick={() => handleShowModal("add")}
            className={"bg-blue-500 text-white px-3 py-1 rounded-sm"}
          >
            Add
          </Button>

          {updatedEvents.length > 0 && (
            <>
              <Button
                className={"px-3 py-1 bg-green-500 rounded-sm text-white"}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                className={"px-3 py-1 bg-gray-300 rounded-sm "}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <TableHead configTable={dayNames} />
        <tbody>
          {calendarData.map((week, i) => (
            <tr key={i}>
              {week.map((date, weekindex) => (
                <td
                  key={weekindex}
                  className={`border border-gray-400 text-center cursor-pointer h-40 w-40 align-top  ${
                    date.getMonth() !== currentDate.getMonth()
                      ? "text-gray-400"
                      : ""
                  }`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(date)}
                >
                  <div
                    className={`text-sm w-full flex justify-end font-bold p-1 `}
                  >
                    <span
                      className={`${
                        isToday(date) ? " bg-blue-600 text-white" : ""
                      } flex items-center justify-center w-8 h-8 rounded-full`}
                    >
                      {format(date, "d")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <EventLabel
                      events={events}
                      isEventOnDate={isEventOnDate}
                      handleShowModal={handleShowModal}
                      normalizeDate={normalizeDate}
                      date={date}
                      handleDragStart={handleDragStart}
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ModalLayout
        isModalOpen={isModalOpen}
        handleShowModal={handleShowModal}
        submitType={submitType}
        title={submitType === "add" ? "Add Banner" : "Edit Banner"}
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
            dataRow={dataEvent}
            onConfirm={handleService}
          />
        )}
      </ModalLayout>
    </div>
  );
};

export default Calendar;
