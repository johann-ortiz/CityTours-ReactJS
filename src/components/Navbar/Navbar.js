import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tours Logo" width={80} height={80} />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
