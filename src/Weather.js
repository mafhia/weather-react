import React, { useState } from "react";
import axios from "axios";
import FormattedDT from "./FormattedDT";

export default function Weather() {
  const [city, setCity] = useState("La Chevrolière");
  const [weather, setWeather] = useState({ ready: false });
  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: formatHours((
        response.data.sys.sunrise + response.data.timezone )* 1000
      ),
      sunset: formatHours((
        response.data.sys.sunset + response.data.timezone ) * 1000
      ),
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
    });
  }
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      hours = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "a4bdb9d9d153eeae6046500ced913295";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" id="searchcity" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        className="Textbox"
        id="search-city-input"
        onChange={updateCity}
        autoFocus="on"
      />
      <input type="submit" className="Button" value="Go" />
    </form>
  );
  if (weather.ready) {
    return (
      <div className="WeatherDetails">
        <FormattedDT date= {weather.date} />
        <h2>
          <span role="img" aria-label="Magnifying-glass" id="search-icon">
            🔎
          </span>{" "}
        </h2>
        {form}
        <button id="currentlocation-button">
          <span role="img" aria-label="Pin">
            📍
          </span>
        </button>
        <div className="Details">
          <div className="WeatherDetails1" id="wD1">
            <span id="currentCity">{weather.city}</span> <br />
            <span id="currentTemp">
              {Math.round(weather.temperature)}° C 
            </span>{" "}
            <br />
            <span id="description">{weather.description}</span> <br />
            <span id="high">H:{Math.round(weather.high)}°C</span>{" "}
            <span id="low">L:{Math.round(weather.low)}°C</span>
          </div>
          <div className="WeatherDetails2" id="wD2">
            <img
              src={weather.icon}
              id="current-weather-icon"
              alt="Weather icon"
            />
          </div>
          <div className="WeatherDetails3" id="wD3">
            Sunrise at {weather.sunrise} <br />
            Sunset at {weather.sunset} <br />
            Pressure {weather.pressure} hPa
          </div>{" "}
          <br />
          <div className="WeatherDetails4" id="wD4">
            Wind {Math.round(weather.wind)} km/hr <br />
            Humidity {weather.humidity} % <br />
            Feels like {Math.round(weather.feelsLike)} °C
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}