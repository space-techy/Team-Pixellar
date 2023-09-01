import React from "react";
import "./MissionsComponent.css";

function MissionsComponent() {
  return (
    <div id="Missions" className=" bg-black -mt-28">
      <div className="missions_head">MISSIONS</div>
      <div className="missions_div">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Vikram Lander ISRO Chandrayan 3"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen={true}
            webkitAllowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/f5d82f150d6640d3a85bf11b158d0a0f/embed"
            style={{
              width: "800px",
              height: "500px", // Adjust the height here
            }}
          ></iframe>
        </div>
        <div className="info_div">
          <h2>Chandrayaan 3</h2>
          <p>
            <span className="launch_title">Location: </span>69.36° South, 32.34°
            East on South Pole of Moon
          </p>
          <p>
            <span className="launch_title">Launch Date: </span>July 14,2023
          </p>
          <p>
            <span className="launch_title">Launched From: </span>Satish Dhawan
            Space Centre
          </p>
        </div>
      </div>

      <div className="missions_div">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Chandrayaan-2 in flight configuration"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen={true}
            webkitAllowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/4d0017f2c5fb49bb9817601858106ddb/embed"
            style={{ width: "800px", height: "500px" }}
          ></iframe>
        </div>
        <div>
          <div className="info_div">
            <h2>Chandrayaan 2</h2>
            <p>
              <span className="launch_title">Location: </span>near-Lunar south
              pole (intended) Tiranga Point 70.8810°South 22.7840°East (between
              Manzinus C and Simpelius N craters) (crash site)
            </p>
            <p>
              <span className="launch_title">Launch Date: </span>July 22,2019
            </p>
            <p>
              <span className="launch_title">Launched From: </span>Satish Dhawan
              Space Center
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionsComponent;
