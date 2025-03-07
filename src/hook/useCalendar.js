import { useEffect, useState } from "react";
import { useGlobalHook } from "./useGlobalHook";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  differenceInDays,
  startOfWeek,
  endOfWeek,
} from "date-fns";

const generateCalendar = (currentDate) => {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const daysInCalendar = eachDayOfInterval({ start: startDate, end: endDate });

  const weeks = [];
  let week = [];
  daysInCalendar.forEach((date) => {
    week.push(date);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  return weeks;
};

export const useCalendar = (dataEvents, handleService) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [updatedEvents, setUpdatedEvents] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [draggedEvent, setDraggedEvent] = useState(null);

  const moveEvent = (date) => {
    if (!draggedEvent) return null;

    const startDate = new Date(draggedEvent.startDate);
    const endDate = new Date(draggedEvent.endDate);
    const daysDiff = differenceInDays(endDate, startDate);

    const newStartDate = normalizeDate(date);
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newStartDate.getDate() + daysDiff);

    return {
      ...draggedEvent,
      startDate: format(newStartDate, "yyyy-MM-dd"),
      endDate: format(newEndDate, "yyyy-MM-dd"),
    };
  };

  const handleDragStart = (index) => {
    setDraggedEvent(events[index]);
  };

  const handleDrop = (date) => {
    if (!draggedEvent) return;

    const updatedEvent = moveEvent(date);

    setEvents((prevEvents) =>
      prevEvents.map((ev) => (ev.id === draggedEvent.id ? updatedEvent : ev))
    );

    setUpdatedEvents((prev) => {
      const exists = prev.some((ev) => ev.id === draggedEvent.id);
      return exists
        ? prev.map((ev) => (ev.id === draggedEvent.id ? updatedEvent : ev))
        : [...prev, updatedEvent];
    });

    setDraggedEvent(null);
  };

  const handleSave = () => {
    const isDeleted = confirm("Are you sure you want to save change?");

    if (isDeleted) {
      handleService(updatedEvents, setUpdatedEvents);
    }
  };
  const handleCancel = () => {
    setEvents(JSON.parse(JSON.stringify(originalEvents)));
    setUpdatedEvents([]);
  };

  const normalizeDate = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const isEventOnDate = (event, date) => {
    if (event.startDate === null || event.endDate === null) return false;

    const eventStart = normalizeDate(event.startDate);
    const eventEnd = normalizeDate(event.endDate);
    const currentDate = normalizeDate(date);

    return currentDate >= eventStart && currentDate <= eventEnd;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    setEvents(dataEvents);
    setOriginalEvents(JSON.parse(JSON.stringify(dataEvents)));
    setCalendarData(generateCalendar(currentDate));
  }, [dataEvents, currentDate]);

  return {
    calendarData,
    events,
    currentDate,
    updatedEvents,
    setCurrentDate,
    handleDrop,
    handleDragStart,
    handleSave,
    handleCancel,
    isEventOnDate,
    normalizeDate,
    isToday,
  };
};
