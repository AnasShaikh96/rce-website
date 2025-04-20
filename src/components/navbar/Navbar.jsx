import React, { useEffect, useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo";
import HamburgerIcon from "../Icons/HamburgerIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    setIsOpen(window?.innerWidth > 767);
  }, []);

  useEffect(() => {
    document.body.classList.toggle = "modal__open";
  }, [isOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          <a href="/" className="nav-brand__img">
            <Logo />
          </a>
          <span className="nav-brand__text">
            Robust Consulting
            <br />
            Engineers
          </span>
        </div>
        <nav className="nav-wrapper">
          <button
            className="nav-hamburger btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerIcon />
          </button>

          <div
            className="nav-list-wrapper"
            style={!isOpen ? { display: "none" } : {}}
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/our-services">Our Services</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/projects">Our Projects</a>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-button-wrapper">
          <button class="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
