import React from "react";
import "./footer.css";
import Logo from "../../assets/logo";
import { navlinks } from "../navbar/Navbar";

const Footer = () => {
  return (
    <footer className="container ">
      <div className="footer-wrapper">
        <div className="footer-brand__wrap">
          {/* <img src="" alt="" />
        <span>RCE</span> */}
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
        </div>

        <nav className="footer-link__wrap">
          <ul>
            {navlinks.map((item) => (
              <li>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-privacy__wrap">
          <div>
            <ul className="footer-privacy__links">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="footer-privacy__reserved">Robust Consulting Engineers. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
    // <footer className="footer-wrapper">
    //   <section className="container">
    //     <div className="footer-brand-img">
    //       <div>
    //         <p>RCE</p>
    //       </div>
    //     </div>
    //     <div>
    //       <nav className="footer-nav-wrap">
    //         <ul>
    //           <li>
    //             <a href="#"></a>Home
    //           </li>
    //           <li>
    //             <a href="#"></a>Our Services
    //           </li>
    //           <li>
    //             <a href="#"></a>About Us
    //           </li>
    //           <li>
    //             <a href="#"></a>Our Projects
    //           </li>
    //           <li>
    //             <a href="#"></a>Contact
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //     <div className="footer-mark">
    //       <p>RCE PVT LTD</p>
    //     </div>
    //   </section>
    // </footer>
  );
};

export default Footer;
