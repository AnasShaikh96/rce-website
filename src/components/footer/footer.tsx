import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <section className="container">
        <div className="footer-brand-img">
          <div>
            <p>RCE</p>
          </div>
        </div>
        <div>
          <nav className="footer-nav-wrap">
            <ul>
              <li>
                <a href="#"></a>Home
              </li>
              <li>
                <a href="#"></a>Our Services
              </li>
              <li>
                <a href="#"></a>About Us
              </li>
              <li>
                <a href="#"></a>Our Projects
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-mark">
          <p>RCE PVT LTD</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
