import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink(props) {
  const [isDropped, setIsDropped] = useState(false);
  const navLinkStyle =
    "md:hover:bg-white md:hover:text-primary-400 hover:outline outline-1 outline-white col-start-2 px-2 py-1";

  return (
    <li
      className="relative grid grid-cols-[1fr_auto_auto_1fr] md:grid-cols-[repeat(2,auto)] gap-x-1 gap-y-1 auto-rows-auto place-items-center md:place-items-start"
      onBlur={() => {
        setIsDropped(false);
      }}
      onMouseEnter={() => {
        setIsDropped(true);
      }}
      onMouseLeave={() => {
        setIsDropped(false);
      }}
    >
      {props.anchor ? (
        <a href={props.href} className={navLinkStyle}>
          {props.children}
        </a>
      ) : (
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "var(--clr-primary-200)" } : undefined
          }
          className={navLinkStyle}
          to={props.href}
        >
          {props.children}
        </NavLink>
      )}
      {props.dropdown && (
        <button
          onClick={() => {
            setIsDropped((prev) => !prev);
          }}
          className="md:hidden col-start-3"
          aria-controls={`${props.children} Sub Menu`}
          aria-expanded={isDropped}
        >
          <FontAwesomeIcon icon={faCaretDown} aria-hidden="true" />
          <span className="sr-only">Dropdown Menu</span>
        </button>
      )}
      {props.dropdown && isDropped && (
        <ul
          aria-label={`${props.children} Sub Menu`}
          className="md:absolute md:top-full md:pt-2 w-full md:w-max col-span-full flex flex-col items-center md:items-start gap-2 p-2 md:p-0 md:drop-shadow-xl"
        >
          {props.dropdown.map((item) => {
            return (
              <li
                key={crypto.randomUUID()}
                className="md:hover:bg-white md:hover:text-primary-400 py-2 px-2 md:py-2 md:px-4 outline outline-1 outline-white md:outline-none hover:text-primary-200 md:bg-primary-400"
              >
                {item.anchor ? (
                  <a href={item.path} className="">
                    {item.name}
                  </a>
                ) : (
                  <NavLink to={item.path} className="">
                    {item.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default CustomNavLink;
