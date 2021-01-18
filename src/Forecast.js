import React, { useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

import "./Forecast.css";



export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
     <div className="WeatherForecast row">
       <ForecastPreview data={forecast.list[0]}/>
       <ForecastPreview data={forecast.list[1]}/>
       <ForecastPreview data={forecast.list[2]}/>
       <ForecastPreview data={forecast.list[3]}/>
       <ForecastPreview data={forecast.list[4]}/>
       <ForecastPreview data={forecast.list[5]}/>
     </div>
    );
    
  } else {
    let apiKey = "a4bdb9d9d153eeae6046500ced913295";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleForecastResponse);
  
    return null;
  }
}