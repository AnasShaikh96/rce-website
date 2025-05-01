import React from "react";
import "./hamburger.css";
const HamburgerIcon = ({ isActive }) => {
  return (
    <div class={"hamburger1 " + isActive }>
      <label for="hamburger1-input">
        {/* <input type="checkbox" id="hamburger1-input" /> */}
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </label>
    </div>
  );
};

export default HamburgerIcon;
