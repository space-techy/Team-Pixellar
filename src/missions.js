import React, { useState } from "react";
import "./missions.css";

const Mission = () => {
  return (
    <section id="Timeline" class="design-section">
      <div class="timeline">
        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <p className=" w-16">
            <img id="im" src="gslv_f12.jpg.webp"></img>
          </p>
          <h3 className=" text-xl">29 May 2023</h3>
          <p>GSLV-F12/NVS-01 Mission</p>
        </div>
        <div class="timeline-component timeline-content">
          <p className=" w-16">
            <img id="im" src="pslv_c55.jpg.webp"></img>
          </p>
          <h3 className=" text-xl">22 April 2023</h3>
          <p>PSLV-C55/TeLEOS-2 Mission</p>
        </div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>

        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class=" timeline-component timeline-content">
          <p className=" w-16">
            <img id="im" src="RLVTDMission.jpg.webp"></img>
          </p>
          <h3 className=" text-xl">02 April 2023</h3>
          <p>Reusable Launch Vehicle Autonomous Landing Mission (RLV LEX)</p>
        </div>
        <div class="timeline-component timeline-content">
          <p className=" w-16 ">
            <img id="im" src="lvm3m3tim.jpg.webp"></img>
          </p>
          <h3 className=" text-xl">26 March 2023</h3>
          <p>
            {" "}
            LVM3 M3 / OneWeb India-2 Mission LVM3 M3 / OneWeb India-2 Mission
          </p>
        </div>

        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
