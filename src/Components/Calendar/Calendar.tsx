import React, { useEffect, useState } from 'react';
import { getWeekCount, getFirstDayOfMonth, getLastDayOfMonth, getDaysInMonthCount } from "../../Services/DateFunctions";
import Month from "../Month/Month";

import "./Calendar.css";

interface CalendarProps {
  date: Date;
  previousClick: () => void;
  nextClick: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ date, previousClick, nextClick }) => {
  const [startEmptyDays, setStartEmptyDays] = useState<number>(0);
  const [endEmptyDays, setEndEmptyDays] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [fullDays, setFullDays] = useState<number>(0);

  useEffect(() => {
    const startEmpty = 7 - getFirstDayOfMonth(date.getMonth(), date.getFullYear());
    const endEmpty = 7 - getLastDayOfMonth(date.getMonth(), date.getFullYear());
    const daysInMonth = getDaysInMonthCount(date.getMonth(), date.getFullYear());

    setStartEmptyDays(startEmpty);
    setEndEmptyDays(endEmpty);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
    setFullDays(daysInMonth);
  }, [date]);

  return (
    <Month 
      startEmptyDays={startEmptyDays} 
      endEmptyDays={endEmptyDays} 
      year={year} 
      month={month} 
      fullDays={fullDays}
    />
  );
};

export default Calendar;
