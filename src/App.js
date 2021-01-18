import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import './App.css';
import './Weather.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header> <br />
      <Footer />
    </div>
  );
}

export default App;
