import React from "react";

function WeekdayRow() {
  const fullWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <thead>
      <tr>
        {fullWeekdays.map((dayName, index) => (
          <th key={index}>{dayName}</th>
        ))}
      </tr>
    </thead>
  );
}

export default WeekdayRow;
