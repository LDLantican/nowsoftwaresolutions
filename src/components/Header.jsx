import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="site-navigation">
        <NavLink to="/">
          <img src={NSSLogo} alt="NOW Software Solutions Logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="https://now.nowsoftwaresolutions.com/">Clients</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
