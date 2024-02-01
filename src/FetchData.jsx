import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse} from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import jsonSourceFile from "./events.json";
import axios from 'axios';
import { EVENTS_API_URL } from './Constants';
import { MainDataAlgorithm, ThumbnailImageLink} from './DataAlgorithm';
import './FetchData.css';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const locales = {
    "en-US": require("date-fns/locale/en-US")
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

  let events = MainDataAlgorithm(data);

  useEffect(() => {
    axios.get(EVENTS_API_URL)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure data is an array before attempting to map
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return null; // or handle it in some way
  }

  return (
    <div className='container'>
      <div className='calendar'>
        {data.map((item, index) => (
          <div className='day' key={index}>
            {item.launchDate}<br />
            {item.title}<br />
            <img src={ThumbnailImageLink(item.imageFilenameThumb)} alt="{item.title}" />
          </div>
        ))} 
      </div>
      <Calendar localizer={localizer} events={data} sfartAccessor="start" endAccessor="end" style={{height:800, margin: "50px"}} />  
    </div>
    
  );
}

export default FetchData;