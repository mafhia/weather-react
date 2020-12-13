import React from "react";

import "./App.css";

export default function Forecast(props) {
    return (
        <div className="WeeklyForecast">
          <ul>
            <li className="Day1">
              {props.day} <br />
              H:17° L:8° <br />
              <img
                src="https://media.giphy.com/media/hRBmiua92BHEiJ5jHT/giphy.gif"
                width="100px"
                className="D1"
                alt="rainy weather"
              />
            </li>
          </ul>
        </div>
    );
}