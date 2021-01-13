import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./Forecast.css";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours= date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)

        return `${temperature} °C`;
    }
 
    // function days() {
       // let date = new Date(props.data.dt * 1000);
        //let days =[
         //   "Sunday",
         //   "Monday",
         //  "Tuesday",
        // "Wednesday",
        //  "Thursday",
          //  "Friday",
         //   "Saturday"
         //  ];  
        //let day = days[props.date.getDay()];
        //return `${day}`;
        //}

    return (
        <div className="ForecastPreview col">
          {hours()}
          <WeatherIcons code={props.data.weather[0].icon} />
          {temperature()}
       </div>
    );
}