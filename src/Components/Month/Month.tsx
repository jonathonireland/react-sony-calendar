import React, { useEffect, useState } from 'react';
import "./Month.css";
import Week from "../Week/Week";

const MonthProps = {
    startEmptyDays: Number,
    endEmptyDays: Number,
    year: Number,
    month: Number,
    fullDays: Number
}

const Month: React.FC<{ startEmptyDays: number; endEmptyDays: number; year: number; month: number; fullDays: number; }> = ({ startEmptyDays, endEmptyDays, year, month, fullDays }) => {
  const [weeks, setWeeks] = useState<Array<Array<number>>>([]);

  useEffect(() => {
    const calculateWeeks = () => {
      const weeksArray: Array<Array<number>> = [];
      let week: Array<number> = [];

      for (let day = 1; day <= fullDays; day++) {
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay(); // Get the day of the week (0-6, where 0 is Sunday)
        const isFirstWeek = day <= startEmptyDays + 7;
        week.push(day); // Add the day to the current week

        // If it's the last day of the week or the last day of the month, push the current week to weeks array
        if (dayOfWeek === 6 || day === fullDays) {
          weeksArray.push(week);
          week = []; // Reset the week array for the next week
        }
      }

      return weeksArray;
    };

    const newWeeks = calculateWeeks();
    setWeeks(newWeeks);
  }, [startEmptyDays, endEmptyDays, year, month, fullDays]);

  
  return (
    <div className="calendar">
      
      { weeks.map(
        (week, index) => (
            <div className="week">
              <Week
                isFirstWeek={index === 0}
                key={index}
                weekArray={weeks[index]} 
                startEmptyDays={startEmptyDays} 
                endEmptyDays={endEmptyDays}
                month={month}
                year={year} />
            </div>
          )
        )
      }
    </div>
  );
};

export default Month;