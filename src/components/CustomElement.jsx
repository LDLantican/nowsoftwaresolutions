import React from "react";

function CustomElement(props) {
  const { backgroundImage, className, element = "div" } = props;
  const Element = element;
  return (
    <Element
      style={
        backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
        }
      }
      className={`custom-${element} | ${
        backgroundImage && "bg-cover bg-center"
      } | ${className && className} | `}
    >
      {props.children}
    </Element>
  );
}

export default CustomElement;
