import React from 'react';
import { DAYS } from "../../Services/Constants";

const DayList: React.FC = () => {
    return (
      
        <div className="week">
          {DAYS.map((day, i) => (
            <div className="day" key={i}>
              <strong>
                {day}
              </strong>
            </div>
          ))}
        </div>
      
    );
  };
  
export default DayList;