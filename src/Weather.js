import React, { useState } from "react";
import axios from "axios";
import FormattedDT from "./FormattedDT";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";


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
      icon: response.data.weather[0].icon,
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
      country: response.data.sys.country
    });
    console.log(response.data);
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
    <div className="form-floating">
      <form className="Search" id="searchcity" onSubmit={handleSubmit}>
      <input
        type="search" 
        className="Textbox form-control" 
        id="floatingInput" 
        placeholder="Enter a city"
        onChange={updateCity}
        autoFocus="on"
      />
      <input type="submit" className="Button" value="Search" />
     </form>
    <WeatherDetails data={weather} />
    </div>
  );
  if (weather.ready) {
    return (
      <div>
        <FormattedDT date= {weather.date} />
        {form} 
        <Forecast city={weather.city}/>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}