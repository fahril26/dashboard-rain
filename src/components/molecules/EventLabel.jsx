import Tooltip from "./Tooltip";

const colors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-red-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-indigo-300",
];

const getEventRoundedClass = (event, date, normalizeDate) => {
  const eventStart = normalizeDate(event.startDate);
  const eventEnd = normalizeDate(event.endDate);
  const currentDate = normalizeDate(date);

  const isStartDate = eventStart.getTime() === currentDate.getTime();
  const isEndDate = eventEnd.getTime() === currentDate.getTime();

  if (isStartDate && isEndDate) return "rounded-full";
  if (isStartDate) return "rounded-l-full";
  if (isEndDate) return "rounded-r-full";
  return "";
};

const EventLabel = ({
  events,
  isEventOnDate,
  date,
  handleDragStart,
  normalizeDate,
  handleShowSidebar,
}) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {events?.map((event, index) => {
        if (!isEventOnDate(event, date)) return null;

        return (
          <div key={index} className="relative group">
            <div
              draggable
              onDragStart={() => handleDragStart(index)}
              onClick={() => handleShowSidebar("edit", event)}
              className={`text-white text-xs text-center p-1 hover:shadow-xl
                ${colors[index % colors.length]} ${getEventRoundedClass(
                event,
                date,
                normalizeDate
              )}
              `}
            >
              {event.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventLabel;
