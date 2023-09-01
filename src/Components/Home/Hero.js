import React, { useRef } from "react";
import "./Hero.css";

function Hero() {
  const imgRef = useRef(null);

  const handleScroll = () => {
    if (imgRef.current) {
      const yOffset = window.pageYOffset;
      imgRef.current.style.transform = `translateY(${yOffset * 0.5}px)`; // Adjust speed as needed
    }
  };

  return (
    <div id="home" className="hero_section" onScroll={handleScroll}>
      <img
        id="rocket"
        ref={imgRef}
        src={process.env.PUBLIC_URL + "/assets/Home/launcher.png"}
        alt="launcher"
        className="parallax-img"
      />
      <div className="chandrayaan-3-hero">
        <div>
          <h2 className=" show chandrayaan-3-hero-head">CHANDRAYAAN 3</h2>
          <p className="chandrayaan-3-hero-para">
            Chandrayaan-3 was launched aboard an LVM3-M4 rocket on 14 July 2023,
            at 09:05 UTC from Satish Dhawan Space Centre Second Launch Pad in
            Sriharikota, Andhra Pradesh, India, entering an Earth parking orbit
            with a perigee of 170 km (106 mi) and an apogee of 36,500 km (22,680
            mi).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
