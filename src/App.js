import React from "react";
import Weather from "./Weather";
import DateTime from "./DateTime";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DateTime date="09 December" year="2020" day="Wednesday" time="10:30 am" />
        <Weather />
        <p>
          Hello World!
        </p>
        
      </header>
    </div>
  );
}

export default App;
