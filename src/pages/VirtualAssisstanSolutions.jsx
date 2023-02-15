import React from "react";
import CustomElement from "../components/CustomElement";
import VirtualAssisstanSolutionsBG from "../assets/images/Laptop.jpeg";
import ComputerBG from "../assets/images/computer.png";
import AssisstantBG from "../assets/images/assisstant.png";
import BlanketBG from "../assets/images/blanket.png";

function VirtualAssisstantSolutions() {
  return (
    <>
      <CustomElement
        element="section"
        backgroundImage={VirtualAssisstanSolutionsBG}
      >
        <div className="wrapper text-white grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-8 place-items-center p-8">
          <img
            src={ComputerBG}
            className="w-[min(30rem,100%)] aspect-square object-cover hidden md:block shadow-2xl rounded-lg"
            alt="Product Graphics Representation"
          />
          <div className="grid gap-2 place-items-center md:justify-self-start md:justify-items-start text-center md:text-left">
            <h1 className="w-min text-[clamp(1rem,10vw,4rem)] font-semibold uppercase leading-tight">
              Virtual Assisstant Solutions
            </h1>
            <p className="text-2xl mb-4">We make it easier for you.</p>
            <a
              href="https://www.nowsoftwaresolutions.com/check-out"
              className="button text-2xl"
            >
              Click to Sign Up
            </a>
          </div>
        </div>
      </CustomElement>
      <section>
        <div className="wrapper grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 items-center">
          <h2 className="text-4xl font-semibold uppercase text-center md:text-right md:max-w-[25ch]">
            A team of remote professionals
          </h2>
          <img src={AssisstantBG} alt="" />
        </div>
      </section>
      <CustomElement
        element="section"
        backgroundImage={BlanketBG}
        className="bg-white/80 bg-blend-overlay p-16"
      >
        <div className="wrapper text-center grid gap-8 place-items-center">
          <p className="text-5xl">
            FOCUS ON YOUR PURPOSE <br />{" "}
            <span className="text-primary-400 font-semibold">
              WHILE WE TAKE THE HUSTLE
            </span>
          </p>
          <a
            href="https://www.nowsoftwaresolutions.com/check-out"
            className="button text-4xl"
          >
            get it today!
          </a>
        </div>
      </CustomElement>
    </>
  );
}

export default VirtualAssisstantSolutions;
