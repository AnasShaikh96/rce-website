import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    setIsOpen(window?.innerWidth > 767);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          <a href="/" className="nav-brand__img">
            RCE
          </a>
        </div>
        <nav className="nav-wrapper">
          <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
            Mobile Toggle
          </button>

          <div
            className="nav-list-wrapper"
            style={!isOpen ? { display: "none" } : {}}
          >
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Projects</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          {/* 
          <div className="nav-cta-wrapper">
            <button>Contact Us Button</button>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
