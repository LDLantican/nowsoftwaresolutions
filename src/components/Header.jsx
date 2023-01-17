import React, { useState } from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <header className="relative w-full">
      <div className="max-w-[1200px] mx-auto p-[0.5em] grid grid-cols-[minmax(120px,1fr)_1fr] justify-left items-center">
        <NavLink to="/" className="max-w-[120px]">
          <img
            className="w-full"
            src={NSSLogo}
            alt="NOW Software Solutions Logo"
          />
        </NavLink>
        <nav className="site-navigation justify-self-end pr-[2em] isolate">
          <button
            className="menu-toggle relative md:hidden text-[2.5rem] z-[2]"
            aria-controls="primary-navigation"
            aria-expanded="false"
            onClick={() => {
              setIsShowing((prev) => !prev);
            }}
          >
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <ul
            className="primary-navigation bg-red-900 absolute top-0 right-0 w-[50vw] min-h-[100vh] grid auto-rows-min justify-items-end gap-[1rem] pt-[6rem] pr-[2.5rem] z-[1] text-[1.25rem]"
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
          <a className="hidden" href="tel:+13343445870">
            <span>Call Anytime</span>
            <span>334 344 5870</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
