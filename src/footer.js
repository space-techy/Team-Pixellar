import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="site-footer bg-black">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col p-2 footer-container map-wala-div container">
            <iframe
              className="map-wala-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124384.28216285867!2d77.42680504335938!3d13.035110299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e7a949cae9%3A0x8397364610ef2771!2sIndian%20Space%20Research%20Organisation!5e0!3m2!1sen!2sin!4v1693548386453!5m2!1sen!2sin0"
              width="280"
              height="280"
              frameBorder="0"
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>

          <div className="col p-2 footer-container">
            <h3 className="footer-heading">Useful Links</h3>
            <div className="line"></div>
            <div className="contact-links">
              <a
                href="https://www.isro.gov.in/isro_centre.html"
                className="highlight-on-hover"
              >
                <i className="fa fa-home"></i>ISRO Centres
              </a>
              <a
                href="https://www.isro.gov.in/IN-SPACe.html"
                className="highlight-on-hover"
              >
                <i className="fa fa-calendar-alt"></i> INSPACE
              </a>
              <a
                href="https://www.isro.gov.in/IN-SPACe.html"
                className="highlight-on-hover"
              >
                <i className="fas fa-hands-helping"></i> NSIL
              </a>
              <a
                href="https://www.isro.gov.in/autonomous.html"
                className="highlight-on-hover"
              >
                <i className="fas fa-hands"></i> Autonomous bodies
              </a>
              <a
                href="https://www.isro.gov.in/Archives.html"
                className="highlight-on-hover"
              >
                <i className="fa fa-pagelines"></i> Archives
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white text-center d-flex flex-column fs-5 p-3 mb-2"
        style={{ lineHeight: 2 }}
      >
        <div
          style={{
            borderBottom: "1px solid var(--yellow)",
            width: "80%",
            alignSelf: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        ></div>
        <div className="dark:bg-white-700 m-auto h-1 w-10/12 rounded border-0 bg-gray-100 md:my-5"></div>
        <div>
          <p>© Copyright 2023 ISRO. All Rights Reserved</p>
          <p>Developed By Team Pixellar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
