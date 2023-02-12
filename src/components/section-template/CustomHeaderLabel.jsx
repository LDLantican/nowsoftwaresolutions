import React from "react";
import LaptopBG from "../../assets/images/laptop.jpeg";
import CustomElement from "../CustomElement";

function CustomHeaderLabel({
  bgImage = LaptopBG,
  header = "insert header here",
  crumbLink = header,
}) {
  return (
    <CustomElement
      element="section"
      backgroundImage={bgImage}
      className="bg-black/80 bg-blend-overlay"
    >
      <div className="wrapper">
        <div className="text-white text-center p-8 uppercase">
          <h1 className="text-6xl font-semibold mb-2">{header}</h1>
          <p className="text-lg font-semibold">
            <a href="#" className="hover:underline">
              Home
            </a>{" "}
            - <span className="text-primary-400">{crumbLink}</span>
          </p>
        </div>
      </div>
    </CustomElement>
  );
}

export default CustomHeaderLabel;
