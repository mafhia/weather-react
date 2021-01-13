import React from "react";

export default function WeatherIcon(props) {
    
  const codeMapping = {
      "01d": "/Images/sunny.gif",
      "01n": "/Images/moon.gif",
      "02d": "/Images/suncloud.gif",
      "02n": "/Images/mooncloud.gif",
      "03d": "/Images/cloudyday.gif",
      "03n": "/Images/cloudynight.gif",
      "04d": "/Images/brokenclouds.gif",
      "04n": "/Images/brokenclouds.gif",
      "09d": "/Images/rainy1.gif",
      "09n": "/Images/nightrain.gif",
      "10d": "/Images/dayrain.gif",
      "10n": "/Images/nightrain.gif",
      "11d": "/Images/thunderstorm1.gif",
      "11n": "/Images/thunderstorm1.gif",
      "13d": "/Images/snow.gif",
      "13n": "/Images/snow.gif",
      "50d": "/Images/mist1.gif",
      "50n": "/Images/mist1.gif",
  };
  return <img id="currentWeather" src={codeMapping[props.code]} />;
}