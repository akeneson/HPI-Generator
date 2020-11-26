import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Duration = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const date = new Date(startDate).toDateString();

  return (
    <React.Fragment>
    <h1> Duration React Page Testing </h1>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    <h1>Date: {date} </h1>
    </React.Fragment>
  );
};

export default Duration;