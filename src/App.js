import React from "react";
import Weather from "./Weather";
import DateTime from "./DateTime";
import Footer from "./Footer";

import './App.css';
import './Weather.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DateTime date="13 December" year="2020" day="Sunday" time="10:30 am" />
        <Weather />
        <Footer />
      </header>
    </div>
  );
}

export default App;
