import React from "react";

import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      
      Project is coded by {" "}
      <a href="https://www.linkedin.com/in/mafe-roussel-berdos-62509618b/?originalSubdomain=fr">
        Mafe Roussel Berdos
      </a> {" "}
      and open source at 
      <a
        href="https://github.com/mafhia/weather-react"
        target="_blank"
        rel="noreferrer"
      > gitHub
      </a> 
    </div>
  );
}
