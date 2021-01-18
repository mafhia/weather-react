import React from "react";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

export default function WeatherDetails(props) {
  return (
    <div className="Weather row">
          <div className="WeatherDetails1 col" id="wD1">
            <span id="currentCity">{props.data.city}, </span>{" "} 
            <span id="country">{props.data.country}</span>
            <br />
            <WeatherTemp celsius={props.data.temperature} />
            {" "}
            <br />
            <span id="description">{props.data.description}</span> <br />
            <span id="high">H:{Math.round(props.data.high)}°C</span>{" "}
            <span id="low">L:{Math.round(props.data.low)}°C</span>
          </div>
          <div className="WeatherDetails2 col" id="wD2">
            <WeatherIcons code={props.data.icon} />
          </div>
          <div className="WeatherDetails3 col" id="wD3">
            Sunrise at {props.data.sunrise} <br />
            Sunset at {props.data.sunset} <br />
            Pressure {props.data.pressure} hPa
          </div>{" "}
          <br />
          <div className="WeatherDetails4 col" id="wD4">
            Wind {Math.round(props.data.wind)} km/hr <br />
            Humidity {props.data.humidity} % <br />
            Feels like {Math.round(props.data.feelsLike)} °C
          </div>
     </div>
  );
}