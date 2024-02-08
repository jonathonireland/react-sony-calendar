import React from 'react';
import { getDay } from "date-fns/getDay";


import "./Day.css";

interface DayProps {
  day: number;
  month: number;
  year: number;
}

const Day: React.FC<DayProps> = ({ day, month, year }) => {
  // You can add any additional logic here to customize the display of the day
  const dayOfWeek = getDay(new Date(year, month, day)); // Get the day of the week (0-6, where 0 is Sunday)
  const dateToCheck = new Date(year, month, day);
  
  return (
    <a href="#" className="dateLink">
      <span className="day-number">{day}</span>
    </a>
  );
};

export default Day;