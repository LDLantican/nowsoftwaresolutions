import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import CustomNavLink from "./CustomNavLink";

function Header() {
  const location = useLocation();
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
  }, [headerHeight]);

  useEffect(() => {
    setIsShowing(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className="main-header | absolute inset-x-0 top-0 text-neutral-100 isolate z-[200]"
    >
      <div className="wrapper">
        <div className="header-nav-wrapper | mt-6 drop-shadow-lg">
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
              {[
                {
                  name: "Home",
                  path: "/",
                },
                {
                  name: "About",
                  path: "/about",
                },
                {
                  name: "Services",
                  path: "/services",
                  dropdown: [
                    {
                      name: "Virtual Assisstant Solutions",
                      path: "/",
                    },
                  ],
                },
                {
                  name: "Portfolio",
                  path: "/portfolio",
                },
                {
                  name: "Team",
                  path: "/team",
                },
                {
                  name: "Contact",
                  path: "/contact",
                },
                {
                  name: "Clients",
                  path: "https://now.nowsoftwaresolutions.com/",
                  anchor: true,
                },
              ].map((item) => (
                <CustomNavLink
                  anchor={item.anchor}
                  key={crypto.randomUUID()}
                  href={item.path}
                  dropdown={item.dropdown}
                >
                  {item.name}
                </CustomNavLink>
              ))}
            </ul>
          </nav>
          <a
            className="header-cta | grid grid-cols-[auto,1fr] grid-rows-2 group"
            href="tel:+13343445870"
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-primary-400 row-span-full h-full scale-[0.6] group-hover:text-primary-200"
            />
            <p className="w-max break-keep text-ellipsis">Call Anytime:</p>
            <p className="text-left">334 344 5870</p>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
