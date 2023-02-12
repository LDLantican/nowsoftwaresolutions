import React from "react";
import CustomElement from "../components/CustomElement";
import LaptopBG from "../assets/images/laptop.jpeg";

function NotFound() {
  return (
    <>
      <CustomElement
        backgroundImage={LaptopBG}
        className="bg-black/80 bg-blend-overlay pb-4"
      ></CustomElement>
      <section>
        <div className="wrapper grid gap-2">
          <h1 className="text-primary-400 text-8xl mb-2">404</h1>
          <p className="text-neutral-600 indent-2 text-2xl">Page not found!</p>
          <a href="#" className="button mr-auto ml-1">
            Go Back
          </a>
        </div>
      </section>
    </>
  );
}

export default NotFound;
