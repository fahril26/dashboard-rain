import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addMonths,
  subMonths,
  differenceInDays,
} from "date-fns";
import { getBannerService } from "../../service";
import Cookies from "js-cookie";

const colors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-red-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-indigo-300",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => {
    try {
      const savedEvents = JSON.parse(localStorage.getItem("events"));
      return Array.isArray(savedEvents) ? savedEvents : [];
    } catch {
      return [];
    }
  });
  const accessToken = Cookies.get("accessToken");

  const [draggedEvent, setDraggedEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    getBannerService(accessToken, setEvents);
  }, []);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const handleAddEvent = (date) => {
    const title = prompt("Enter event name:");
    if (!title) return;

    const startDate = format(date, "yyyy-MM-dd");
    const endDate = prompt("Enter end date (YYYY-MM-DD):", startDate);
    if (!endDate || new Date(endDate) < new Date(startDate))
      return alert("Invalid date range!");

    setEvents([...events, { title, startDate, endDate }]);
  };

  const handleDragStart = (index) => {
    setDraggedEvent(events[index]);
  };

  const handleDrop = (date) => {
    if (!draggedEvent) return;

    const startDate = new Date(draggedEvent.startDate);
    const endDate = new Date(draggedEvent.endDate);
    const daysDiff = differenceInDays(endDate, startDate);
    const newStartDate = new Date(date);
    newStartDate.setHours(0, 0, 0, 0);
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newStartDate.getDate() + daysDiff);

    setEvents((prevEvents) =>
      prevEvents.map((ev) =>
        ev === draggedEvent
          ? {
              ...ev,
              startDate: format(newStartDate, "yyyy-MM-dd"),
              endDate: format(newEndDate, "yyyy-MM-dd"),
            }
          : ev
      )
    );
    setDraggedEvent(null);
  };

  const weeks = [];
  let week = Array(getDay(startOfMonth(currentDate))).fill(null);
  daysInMonth.forEach((date) => {
    week.push(date);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0)
    weeks.push([...week, ...Array(7 - week.length).fill(null)]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          →
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th key={day} className="border border-gray-400 p-2 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => {
                return (
                  <td
                    key={j}
                    className="border border-gray-400 text-center bg-white cursor-pointer h-40 w-40 align-top"
                    onClick={() => date && handleAddEvent(date)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => date && handleDrop(date)}
                  >
                    <div className="text-sm w-full text-end font-bold p-1">
                      {date ? format(date, "d") : ""}
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                      {date &&
                        events.map((event, idx) => {
                          const eventStart = new Date(event.startDate);
                          const eventEnd = new Date(event.endDate);
                          const currentDate = new Date(date);

                          eventStart.setHours(0, 0, 0, 0);
                          eventEnd.setHours(0, 0, 0, 0);
                          currentDate.setHours(0, 0, 0, 0);

                          if (
                            currentDate >= eventStart &&
                            currentDate <= eventEnd
                          ) {
                            return (
                              <div
                                key={idx}
                                draggable
                                onDragStart={() => handleDragStart(idx)}
                                className={`text-white text-xs text-center p-1 rounded ${
                                  colors[idx % colors.length]
                                }`}
                              >
                                {event.title}
                              </div>
                            );
                          }
                          return null;
                        })}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
