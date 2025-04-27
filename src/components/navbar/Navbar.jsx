import React, { useEffect, useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo";
import HamburgerIcon from "../Icons/HamburgerIcon";

export const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Services",
    href: "/our-services",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    setPathName(window.location.pathname);
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
              {navlinks.map((item) => (
                <li className={item.href === pathName ? "active" : ""}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
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
