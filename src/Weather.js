import React, {useState} from "react";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    function showWeather(response) {
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            high: response.data.main.temp_max,
            low: response.data.main.temp_min,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            sunrise: response.data.sys.sunrise,
            //formatHours((response.data.sys.sunrise + response.data.timezone) * 1000),
            sunset: response.data.sys.sunset,
            //formatHours((response.data.sys.sunset + response.data.timezone) * 1000),
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
       
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
    )

    return (
        <div className="WeatherDetails">
            <h2>
             <span role="img" aria-labelledby="Magnifying-glass">
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
                <span id="currentCity">{city}</span> <br />
                <span id="currentTemp">{Math.round(weather.temperature)}° C </span> <br />
                <span id="description">{weather.description}</span> <br />
                <span id="high">H:{Math.round(weather.high)}°C</span>  <span id="low">L:{Math.round(weather.low)}°C</span>
             </div> 
             <div className="WeatherDetails2" id="wD2" >
                <img src={weather.icon} id="current-weather-icon" alt="Weather icon" />
             </div>
             <div className="WeatherDetails3" id="wD3" >
                Sunrise at {" "} {weather.sunrise} <br />
                Sunset at {" "} {weather.sunset} <br />
                Pressure {" "} {weather.pressure} hPa
             </div> <br />
             <div className="WeatherDetails4" id="wD4" >
                Wind {" "} {Math.round(weather.wind)} {" "} km/hr <br />
                Humidity {" "} {weather.humidity} {" "} % <br />
                Feels like {" "} {Math.round(weather.feelsLike)} {" "} °C
             </div>
            </div>
        </div>
        
    );
}