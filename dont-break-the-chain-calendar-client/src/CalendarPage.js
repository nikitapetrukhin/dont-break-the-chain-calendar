import "./index.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Стили по умолчанию
import { useEffect, useState } from "react";

function CalendarPage() {
  const [selectedDates, setSelectedDates] = useState(() => {
    const savedDates = localStorage.getItem("selectedDates");
    return savedDates ? JSON.parse(savedDates) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
  }, [selectedDates]);

  const onSelectDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    setSelectedDates((currentSelectedDates) =>
      currentSelectedDates.includes(dateString)
        ? currentSelectedDates.filter((d) => d !== dateString)
        : [...currentSelectedDates, dateString]
    );
  };

  const year = new Date().getFullYear();
  const months = Array.from(
    { length: 12 },
    (_, index) => new Date(year, index)
  );

  return (
    <div className="calendar-container">
      {months.map((month, index) => (
        <Calendar
          key={index}
          activeStartDate={month}
          view="month"
          onClickDay={onSelectDate}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              let dateString = date.toISOString().split("T")[0];
              if (selectedDates.includes(dateString)) {
                return "selectedDay";
              }
            }
          }}
        />
      ))}
    </div>
  );
}

export default CalendarPage;