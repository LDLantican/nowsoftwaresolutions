import React, { useState } from "react";
import CustomElement from "../CustomElement";
import Section4 from "../../assets/images/SectionBG-4.jpg";
import Section5 from "../../assets/images/SectionBG-5.png";

function CustomCTA({
  quote = "insert string of quote here",
  highlight = ["quote"],
}) {
  const regex = new RegExp(`\\b(${highlight.join("|")})\\b`, "gi");
  const words = quote.split(regex);
  return (
    <CustomElement
      element="section"
      backgroundImage={Section4}
      className="bg-[hsl(0,0%,0%,0.9)] bg-blend-multiply bg-fixed text-neutral-100"
    >
      <div className="wrapper  mb-8">
        <blockquote className="fs-primary-heading uppercase fw-semi-bold text-center">
          <p className="max-w-[1000px] mx-auto text-5xl">
            {words.map((word, i) => {
              if (i % 2 === 0) return word;
              else
                return (
                  <span key={crypto.randomUUID()} className="text-primary-400">
                    {word}
                  </span>
                );
            })}
          </p>
        </blockquote>
      </div>
      <CustomElement
        backgroundImage={Section5}
        className="max-w-[1000px] mx-auto bg-primary-400 bg-blend-darken"
      >
        <div className="wrapper flex flex-wrap justify-between items-center gap-4 p-8">
          <p className="fs-primary-heading uppercase fw-semi-bold">
            Let's get your project started!
          </p>
          <a
            href="#"
            className="button fs-secondary-heading uppercase fw-semi-bold"
            data-type="inverted"
          >
            Contact Us
          </a>
        </div>
      </CustomElement>
    </CustomElement>
  );
}

export default CustomCTA;
