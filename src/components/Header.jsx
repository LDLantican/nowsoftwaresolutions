import React, { useState } from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <header className="main-header | relative w-full">
      <div className="wrapper ">
        <div className="header-nav">
          <NavLink to="/" className="">
            <img
              className="w-full"
              src={NSSLogo}
              alt="NOW Software Solutions Logo"
            />
          </NavLink>
          <button
            className="menu-toggle | text-[2.5rem]"
            aria-controls="primary-navigation"
            aria-expanded="false"
            onClick={() => {
              setIsShowing((prev) => !prev);
            }}
          >
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className="site-navigation | isolate">
            <ul
              className={`${
                isShowing ? "show-menu" : "hide-menu"
              } primary-navigation`}
              id="primary-navigation"
            >
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
          <a className="" href="tel:+13343445870">
            <span>Call Anytime</span>
            <span>334 344 5870</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
