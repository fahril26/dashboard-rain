import { useEffect, useState } from "react";

const generateCalendarData = (month, year) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const calendar = [];
  let currentDay = 1;

  // Menghitung minggu pertama
  let currentWeek = [];

  // Menambahkan hari kosong untuk minggu pertama jika diperlukan
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push({
      day: prevMonthDays - (firstDay - i - 1),
      date: new Date(year, month - 1, prevMonthDays - (firstDay - i - 1)), // Menyimpan objek Date untuk bulan sebelumnya
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Mengisi minggu pertama dengan tanggal bulan ini
  while (currentWeek.length < 7 && currentDay <= daysInMonth) {
    currentWeek.push({
      day: currentDay,
      date: new Date(year, month, currentDay), // Menyimpan objek Date untuk bulan ini
      isCurrentMonth: true,
      isToday:
        currentDay === todayDate && month === todayMonth && year === todayYear,
    });
    currentDay++;
  }

  calendar.push(currentWeek);

  // Mengisi minggu-minggu selanjutnya
  while (currentDay <= daysInMonth) {
    currentWeek = [];

    while (currentWeek.length < 7 && currentDay <= daysInMonth) {
      currentWeek.push({
        day: currentDay,
        date: new Date(year, month, currentDay), // Menyimpan objek Date untuk bulan ini
        isCurrentMonth: true,
        isToday:
          currentDay === todayDate &&
          month === todayMonth &&
          year === todayYear,
      });
      currentDay++;
    }

    calendar.push(currentWeek);
  }

  // Mengisi tanggal kosong di minggu terakhir dengan tanggal bulan berikutnya
  const lastWeek = calendar[calendar.length - 1];
  let lastDay = lastWeek[lastWeek.length - 1]?.day || 0;

  while (lastWeek.length < 7) {
    lastWeek.push({
      day: ++lastDay,
      date: new Date(year, month + 1, lastDay), // Menyimpan objek Date untuk bulan berikutnya
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return calendar;
};

export const useCalendar = () => {
  const date = (...params) => new Date(...params);
  const [month, setMonth] = useState(date().getMonth()); // Menyimpan bulan sekarang
  const [year, setYear] = useState(date().getFullYear()); // Menyimpan tahun sekarang
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    setCalendarData(generateCalendarData(month, year));
  }, [month, year]);

  const handleTodayClick = () => {
    setMonth(date().getMonth());
    setYear(date().getFullYear());
  };

  // Fungsi untuk mengubah bulan
  const changeMonth = (direction) => {
    if (direction === "next") {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else if (direction === "prev") {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  };

  return {
    month,
    year,
    date,
    calendarData,
    changeMonth,
    handleTodayClick,
  };
};
