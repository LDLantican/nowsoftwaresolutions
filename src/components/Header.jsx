import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const image = new window.Image();
    image.src = NSSLogo;
    image.onload = () => {
      setHeaderHeight(headerRef.current.offsetHeight);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      headerHeight + "px"
    );
    console.log(headerHeight);
  }, [headerHeight]);

  return (
    <header
      ref={headerRef}
      className="main-header | absolute inset-x-0 top-0 text-neutral-100 isolate z-50"
    >
      <div className="wrapper">
        <div className="header-nav-wrapper | mt-6">
          <NavLink to="/" className="block max-w-[110px]">
            <img src={NSSLogo} alt="NOW Software Solutions Logo" />
          </NavLink>
          <button
            className="menu-nav-toggle | text-4xl z-50"
            aria-controls="primary-navigation"
            aria-expanded={isShowing}
            onClick={() => {
              setIsShowing((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
            <span className="sr-only">Menu</span>
          </button>
          <nav className="primary-navigation | z-40" data-visible={isShowing}>
            <ul
              className="nav-list | uppercase rounded-md"
              aria-label="Primary"
              role="list"
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
          <a className="header-cta" href="tel:+13343445870">
            <p>Call Anytime:</p>
            <p>334 344 5870</p>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
