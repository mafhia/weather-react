import React from "react";
import Weather from "./Weather";

export default function WeatherDetails(props) {
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
            <span id="currentCity">{props.weather.city}</span> <br />
            <span id="currentTemp">
              {Math.round(props.weather.temperature)}° C 
            </span>{" "}
            <br />
            <span id="description">{props.weather.description}</span> <br />
            <span id="high">H:{Math.round(props.weather.high)}°C</span>{" "}
            <span id="low">L:{Math.round(props.weather.low)}°C</span>
          </div>
          <div className="WeatherDetails2" id="wD2">
            <img
              src={props.weather.icon}
              id="current-weather-icon"
              alt="Weather icon"
            />
          </div>
          <div className="WeatherDetails3" id="wD3">
            Sunrise at {props.weather.sunrise} <br />
            Sunset at {props.weather.sunset} <br />
            Pressure {props.weather.pressure} hPa
          </div>{" "}
          <br />
          <div className="WeatherDetails4" id="wD4">
            Wind {Math.round(props.weather.wind)} km/hr <br />
            Humidity {props.weather.humidity} % <br />
            Feels like {Math.round(props.weather.feelsLike)} °C
          </div>
        </div>
      </div>
     </div>
}