import React from "react";
import logo from "../logo192.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={logo} className="nav--logo" alt="" />

      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>

        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
      {/* <h4 className="nav--title">React Course - Project 1</h4> */}
    </nav>
  );
}
