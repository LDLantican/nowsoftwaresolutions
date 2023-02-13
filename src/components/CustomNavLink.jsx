import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink(props) {
  const [isDropped, setIsDropped] = useState(false);
  return props.anchor ? (
    <li className="flex">
      <a href={props.href}>{props.children}</a>
    </li>
  ) : (
    <li
      className="relative flex"
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
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "md:text-primary-400 max-[50em]:outline outline-1 outline-white"
            : ""
        }
        to={props.href}
      >
        {props.children}
      </NavLink>
      {props.dropdown && isDropped && (
        <ul className="md:absolute md:top-full">
          {props.dropdown.map((item) => {
            return (
              <li key={crypto.randomUUID()} className="w-max mt-4">
                {item.anchor ? (
                  <a href={item.path}>{item.name}</a>
                ) : (
                  <NavLink to={item.path}>{item.name}</NavLink>
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
