import React from "react";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

export default function WeatherDetails(props) {
  return (
    <div className="Weather">
      <div className="WeatherDetails">
        
        <h2>
          <span role="img" aria-label="Magnifying-glass" id="search-icon">
            🔎
          </span>{" "}
        </h2>
        <button id="currentlocation-button">
          <span role="img" aria-label="Pin">
            📍
          </span>
        </button>
        <div className="Details">
          <div className="WeatherDetails1" id="wD1">
            <span id="currentCity">{props.data.city}</span> <br />
            <WeatherTemp celsius={props.data.temperature} />
            {" "}
            <br />
            <span id="description">{props.data.description}</span> <br />
            <span id="high">H:{Math.round(props.data.high)}°C</span>{" "}
            <span id="low">L:{Math.round(props.data.low)}°C</span>
          </div>
          <div className="WeatherDetails2" id="wD2">
            <WeatherIcons code={props.data.icon} />
          </div>
          <div className="WeatherDetails3" id="wD3">
            Sunrise at {props.data.sunrise} <br />
            Sunset at {props.data.sunset} <br />
            Pressure {props.data.pressure} hPa
          </div>{" "}
          <br />
          <div className="WeatherDetails4" id="wD4">
            Wind {Math.round(props.data.wind)} km/hr <br />
            Humidity {props.data.humidity} % <br />
            Feels like {Math.round(props.data.feelsLike)} °C
          </div>
        </div>
      </div>
     </div>
  );
}