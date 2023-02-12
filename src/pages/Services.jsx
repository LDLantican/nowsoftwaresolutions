import React from "react";
import ServicesCarousel from "../components/section-template/ServicesCarousel";
import CustomHeaderLabel from "../components/section-template/CustomHeaderLabel";
import CustomPortfolio from "../components/section-template/CustomPortfolio";
import MembersShowcase from "../components/section-template/MembersShowcase";
import CustomCTA from "../components/section-template/CustomCTA";
import Section4 from "../assets/images/SectionBG-4.jpg";
import CustomElement from "../components/CustomElement";

function Services() {
  return (
    <>
      <CustomHeaderLabel header="Services" />
      <ServicesCarousel />
      <CustomPortfolio header="work showcase" link={true} />
      <CustomElement
        element="section"
        backgroundImage={Section4}
        className="bg-[hsl(0,0%,0%,0.9)] bg-blend-multiply bg-fixed text-neutral-100"
      >
        <div className="wrapper">
          <blockquote className="fs-primary-heading uppercase fw-semi-bold text-center">
            <p className="max-w-[1000px] mx-auto text-5xl text-white">
              MAKING THE <span className="text-primary-400">MOST</span> OF
              DIGITAL ERA.
            </p>
          </blockquote>
        </div>
      </CustomElement>
      <MembersShowcase header="meet the experts" link={true} />
      <CustomCTA
        quote="Great things in business are never done by one person. They're done by a team of people"
        highlight={["They're done by a team of people"]}
      />
    </>
  );
}

export default Services;
