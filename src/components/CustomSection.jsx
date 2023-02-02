import React from "react";

function CustomSection(props) {
  const { backgroundImage, className } = props;
  return (
    <section
      style={
        backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
        }
      }
      className={`
      custom-section | 
       ${backgroundImage && "bg-cover bg-center"}
       ${className && className}
       `}
    >
      {props.children}
    </section>
  );
}

export default CustomSection;
