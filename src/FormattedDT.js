import React from "react";

export default function FormattedDT(props) {
  let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];  
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let date = props.date.getDate();
  if(date < 10) {
   date = `0${date}`;
  }
  let year = props.date.getUTCFullYear();
  let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  let month = months[props.date.getMonth()];

  return (
    <div className="TimeDate" id="timeDate">
     {date} {month} {year} <br /> {day} <br /> Last updated at {hours}:{minutes}
    </div>
  );
}