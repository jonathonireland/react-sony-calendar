import React, { useEffect, useState } from 'react';
import Day from '../Day/Day';
import "./Week.css";

interface WeekProps {
  isFirstWeek: boolean;
  weekArray: number[]; // Adjust the type of weekArray
  startEmptyDays: number;
  endEmptyDays: number;
  month: number;
  year: number;
}

const Week: React.FC<WeekProps> = ({ isFirstWeek, weekArray, startEmptyDays, month, year }) => {
  const [emptyStartDaysArray, setEmptyStartDaysArray] = useState<string[]>([]);

  useEffect(() => {
    // This effect runs whenever weekArray changes
    console.log('Week array changed:', weekArray);
  }, [weekArray]);
  
  useEffect(() => {
    const newEmptyStartDaysArray: string[] = [];
    if (startEmptyDays > 0 && isFirstWeek) {
      for (let i = 0; i <= startEmptyDays; i++) {
        newEmptyStartDaysArray.push(' ');
      }
    }
    setEmptyStartDaysArray(newEmptyStartDaysArray);
  }, [startEmptyDays, isFirstWeek]); // Dependencies include startEmptyDays and isFirstWeek

  

  return (
    <>
      {emptyStartDaysArray.map((ed, index) => (
          <div className="ed block" key={index}>
            {ed}
          </div>
        ))
      }
      {weekArray.map((day, index) => (
        <div className="day block text-right" key={index}>
          <Day 
            day={day}
            month={month}
            year={year}
          />
        </div>
      ))}
     
    </>
  );
};

export default Week;
