import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="max-w-[1200px] p-[1rem] ">
        <NavLink to="/">
          <img
            className="max-w-[120px]"
            src={NSSLogo}
            alt="NOW Software Solutions Logo"
          />
        </NavLink>
        <nav className="site-navigation">
          <button
            className="menu-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <span className="sr-only">Menu</span>
          </button>

          <ul className="primary-navigation" id="primary-navigation">
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
        <a href="tel:+13343445870">
          <span>Call Anytime</span>
          <span>334 344 5870</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
