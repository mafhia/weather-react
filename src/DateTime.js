import React from "react";

export default function TimeDate({ day, date, year, time }) {
    return (
      <div className="TimeDate" id="timeDate">
        <p>
          <span id="month">
            {date}
            <span id="year">{year}</span>
          </span>
          <br />
          <span id="day">{day}</span> <br />
          <span id="time">{time}</span>
        </p>
      </div>
    );
  }
  