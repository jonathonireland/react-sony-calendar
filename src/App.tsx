import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import DaysHeaderList from './Components/DaysHeaderList/DaysHeaderList';
import Calendar from './Components/Calendar/Calendar';

function App() {
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();

  const handlePreviousClick = () => {
    setDate(prevDate => {
      const previousMonthDate = new Date(prevDate);
      previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
      return previousMonthDate;
    });
  };

  const handleNextClick = () => {
    setDate(nextDate => {
      const nextMonthDate = new Date(nextDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  // useEffect to handle side effects
  useEffect(() => {
    // Update date-related side effects here if needed
    console.log('Date changed:', date);
  }, [date]); // Run this effect whenever date changes

  return (
    <div className="App" id="app">

      <Header date={date} previousClick={handlePreviousClick} nextClick={handleNextClick} />
      <div className="daysHeaderRow">
        <DaysHeaderList />
      </div>
      <Calendar date={date} previousClick={handlePreviousClick} nextClick={handleNextClick} />
    </div>
  );
}

export default App;
