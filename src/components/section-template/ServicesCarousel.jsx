import React from "react";
import CustomElement from "../CustomElement";
import Section1 from "../../assets/images/SectionBG-1.png";
import Solutions1 from "../../assets/images/Marketing-Strategy.png";
import Solutions2 from "../../assets/images/Campaign-Creation-Management.png";
import Solutions3 from "../../assets/images/Web-App-Development.png";
import Solutions4 from "../../assets/images/Content-Social-Media-Marketing.png";
import Solutions5 from "../../assets/images/Digital-Marketing.png";
import Solutions6 from "../../assets/images/Brand-Development.png";
import Solutions7 from "../../assets/images/SEO-Services.png";

function ServicesCarousel({ texts = false }) {
  return (
    <CustomElement
      element="section"
      backgroundImage={Section1}
      className="bg-neutral-900 bg-blend-overlay text-neutral-100 p-1"
    >
      <div className="wrapper">
        <ul className="text-center flex flex-wrap justify-center items-center gap-2">
          {texts && (
            <div className="grid gap-4 text-left basis-[33rem] shrink">
              <h2 className="fs-primary-heading uppercase fw-semi-bold mt-8">
                We shape the perfect solutions
                <span className="text-primary-400 fw-bold">.</span>
              </h2>
              <p className="max-w-md">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
            </div>
          )}
          {[
            {
              link: "",
              img: Solutions1,
              title: "Customer Relationship Management",
              desc: "Managing all your company's relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships.",
            },
            {
              link: "",
              img: Solutions2,
              title: "Campaign Creation and Managemen",
              desc: "High-performance idea generation, day-to-day management and optimization of campaigns.",
            },
            {
              link: "",
              img: Solutions3,
              title: "Web & App Development",
              desc: "From websites to mobile apps, we create digital experiences that get your company noticed.",
            },
            {
              link: "",
              img: Solutions4,
              title: "Content & Social Media Marketing",
              desc: "Content strategies that engage customers in a personal way to generate brand awareness and drive traffic.",
            },
            {
              link: "",
              img: Solutions5,
              title: "Digital Marketing",
              desc: "Targeted strategies and tactics. Measured results.",
            },
            {
              link: "",
              img: Solutions6,
              title: "Brand Development",
              desc: "Memorable brand stories that connect.",
            },
            {
              link: "",
              img: Solutions7,
              title: "SEO Services",
              desc: "Custom search engine marketing services for B2B and B2C.",
            },
          ].map((solution) => (
            <li
              className="basis-40 grow-0 shrink min-h-[14rem] group overflow-hidden"
              key={crypto.randomUUID()}
            >
              <a
                href={solution.link}
                className="grid grid-rows-[128px_repeat(3,auto)] gap-4 justify-center max-h-48 translate-y-0 group-hover:translate-y-[-128px] transition-transform duration-500 ease-in-out"
              >
                <img
                  className="max-w-[8rem] mx-auto"
                  src={solution.img}
                  alt="CRM Icon"
                />
                <h3>{solution.title}</h3>
                <p className="text-sm font-light mt-16 group-hover:m-0 transition-all duration-500 ease-in-out">
                  {solution.desc}
                </p>
                <p className="button text-[0.65rem] mx-auto">Read More</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </CustomElement>
  );
}

export default ServicesCarousel;
