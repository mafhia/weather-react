import React from "react";
import Weather from "./Weather";
import DateTime from "./FormattedDT";
import Footer from "./Footer";

import './App.css';
import './Weather.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Footer />
      </header>
    </div>
  );
}

export default App;
