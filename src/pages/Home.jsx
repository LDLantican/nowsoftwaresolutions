import React, { useState } from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import HeroBG from "../assets/images/hero-bg.gif";
import Section1 from "../assets/images/SectionBG-1.png";
import Section2 from "../assets/images/SectionBG-2.png";
import Section3 from "../assets/images/SectionBG-3.png";
import Section4 from "../assets/images/SectionBG-4.jpg";
import Section5 from "../assets/images/SectionBG-5.png";
import CustomElement from "../components/CustomElement";
import Solutions1 from "../assets/images/Marketing-Strategy.png";
import Solutions2 from "../assets/images/Campaign-Creation-Management.png";
import Solutions3 from "../assets/images/Web-App-Development.png";
import Solutions4 from "../assets/images/Content-Social-Media-Marketing.png";
import Solutions5 from "../assets/images/Digital-Marketing.png";
import Solutions6 from "../assets/images/Brand-Development.png";
import Solutions7 from "../assets/images/SEO-Services.png";
import SaaS from "../assets/images/Saas.png";
import RealEstate from "../assets/images/RealEstate.jpeg";
import SmallBusiness from "../assets/images/SmallBusiness.jpeg";
import VirtualAssisstantSolutions from "../assets/images/VirtualAssisstantSolutions.jpeg";
import HomeServices from "../assets/images/HomeServices.jpeg";
import Legal from "../assets/images/Legal.jpeg";
import Restaurant from "../assets/images/Restaurant.jpeg";
import RealEstateBG from "../assets/images/RealEstateBG.jpg";
import SmallBusinessBG from "../assets/images/SmallBusinessBG.jpg";
import VirtualAssisstantSolutionsBG from "../assets/images/VirtualAssisstantSolutionsBG.jpg";
import HomeServicesBG from "../assets/images/HomeServicesBG.jpg";
import LegalBG from "../assets/images/LegalBG.jpg";
import RestaurantBG from "../assets/images/RestaurantBG.jpg";
import Team from "../assets/images/team.png";
import CreditRepairWork from "../assets/images/CreditRepairWork.png";
import RecruitingWork from "../assets/images/RecruitingWork.png";
import RealEstateWork from "../assets/images/RealEstateWork.png";
import HouseRepairWork from "../assets/images/HouseRepairWork.png";
import MeetProcess from "../assets/images/meet-process.png";
import PlanProcess from "../assets/images/plan-process.png";
import WebDesignDevProcess from "../assets/images/web-design-dev-process.png";
import TestingProcess from "../assets/images/testing-process.png";
import LaunchProcess from "../assets/images/launch-process.png";
import HiveBG from "../assets/images/hiveBG.jpeg";
import videoModalBG from "../assets/images/videoModal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faPlay,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customDropShadowValues = "drop-shadow-[0_1px_5px_hsl(0,0%,0%,0.5)]";
  return (
    <>
      <CustomElement
        element="section"
        backgroundImage={HeroBG}
        className="bg-neutral-900/70 bg-blend-overlay"
      >
        <div className="wrapper flow">
          <img
            src={NSSLogo}
            className="max-w-[28rem] w-full mx-auto"
            alt="NOW Software Solution Company Logo"
          />
          <h1 className="fs-900 text-neutral-100 uppercase fw-bold mb-4">
            Welcome
          </h1>
          <a className="button" href="#">
            Discover More
          </a>
        </div>
      </CustomElement>
      <CustomElement
        element="section"
        backgroundImage={Section1}
        className="bg-neutral-900 bg-blend-overlay text-neutral-100"
      >
        <div className="wrapper">
          <ul className="text-center flex flex-wrap justify-center items-center gap-2">
            <div className="grid gap-8 text-left basis-52 grow-[2] shrink-0">
              <h2 className="fs-primary-heading uppercase fw-semi-bold">
                We shape the perfect solutions
                <span className="text-primary-400 fw-bold">.</span>
              </h2>
              <p>
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
            </div>
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
                className="basis-48 grow-0 shrink min-h-[14rem] group overflow-hidden"
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
      <CustomElement
        element="section"
        backgroundImage={Section2}
        className="bg-[hsl(0,0%,100%,0.75)] bg-blend-overlay text-center pb-0"
      >
        <div className="wrapper">
          <h2 className="fs-primary-heading uppercase fw-semi-bold mb-8">
            Industries we help grow with digital marketing
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
        </div>
        <CustomElement backgroundImage={Section3}>
          <div className="wrapper py-4">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <img src={SaaS} alt="SaaS Icon" className="max-w-[9.375rem]" />
              <p className="grow-[3] shrink-0 basis-96">
                Please{" "}
                <a
                  href="#"
                  className="capitalize text-primary-400 hover:text-primary-200"
                >
                  click here
                </a>{" "}
                if you would like to access our SaaS Mode, build, and increase
                your business freely how ever you want from the ground up. This
                includes your own website, creating marketing campaigns,
                funnels, CRMS,and so much for. The opportunity is yours!
              </p>
            </div>
            <hr className="h-[0.425rem] bg-primary-400 my-4" />
            <p>Or choose from the following templates!</p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] auto-rows-[minmax(16rem,1fr)] isolate">
            {[
              {
                link: "https://www.nowsoftwaresolutions.com/re-template-home",
                title: "Real Estate",
                imgBG: RealEstateBG,
                img: RealEstate,
              },
              {
                link: "https://barber-template.msgsndr.com/barber",
                title: "Small Business",
                imgBG: SmallBusinessBG,
                img: SmallBusiness,
              },
              {
                link: "https://agency-template.msgsndr.com/home",
                title: "Virtual Assistant Solutions",
                imgBG: VirtualAssisstantSolutionsBG,
                img: VirtualAssisstantSolutions,
              },
              {
                link: "https://plumber-x-template.msgsndr.com/plumber",
                title: "Home Services",
                imgBG: HomeServicesBG,
                img: HomeServices,
              },
              {
                link: "https://justice-template.msgsndr.com/justice",
                title: "Legal",
                imgBG: LegalBG,
                img: Legal,
              },
              {
                link: "https://brewer-template.msgsndr.com/brewer",
                title: "Restaurant",
                imgBG: RestaurantBG,
                img: Restaurant,
              },
            ].map((template) => (
              <CustomElement
                element="li"
                backgroundImage={template.imgBG}
                key={crypto.randomUUID()}
                className="shadow-none hover:shadow-2xl hover:z-10 scale-100 hover:scale-[1.025] transition-all"
              >
                <a
                  href={template.link}
                  className="h-full w-full relative grid place-items-center overflow-hidden isolate group"
                >
                  <img
                    src={template.img}
                    alt={`${template.title} website template screenshot`}
                    className="absolute w-[inherit] h-[inherit] object-cover object-top bottom-full  opacity-0  group-hover:opacity-100 group-hover:bottom-0 transition-all -z-10"
                  />
                  <p className="fs-secondary-heading button shadow-lg absolute bottom-8 group-hover:bottom-4 opacity-100 group-hover:opacity-0 transition-all">
                    {template.title}
                  </p>
                </a>
              </CustomElement>
            ))}
          </ul>
        </CustomElement>
      </CustomElement>
      <CustomElement
        element="section"
        backgroundImage={HiveBG}
        className="bg-white/[0.85] bg-blend-overlay"
      >
        <div className="wrapper relative grid gap-8">
          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            The Business Growth Process
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
          <ul className="flex flex-col gap-6">
            {[
              {
                title: "Meet",
                description:
                  "The first step is to discover more about you, your company's vision, and to build a strong relationship. This is where we will create your brand, create a custom strategy, and set project goals.",
                maxWidth: "max-w-full",
                arrow: "down",
                thumb: MeetProcess,
              },
              {
                title: "Plan",
                description:
                  "Following the initial meetup, we will outline your project, create milestones, and agree on priorities. Now we have a strategic plan in place that aligns with your initial vision and makes your goals achievable.",
                maxWidth: "max-w-4xl",
                arrow: "down",
                thumb: PlanProcess,
              },
              {
                title: "Web Design & Dev",
                description:
                  "Once the outline is finished, visual concepts of the custom project will be created. Our creative and development team reviews and revises the materials until it aligns with your web design goals.",
                maxWidth: "max-w-2xl",
                arrow: "right",
                thumb: WebDesignDevProcess,
              },
              {
                title: "Testing",
                description:
                  "Here review and testing takes place, which ensures the quality of your project. This is the most valuable step in the web design process, because your reputation is our reputation!",
                maxWidth: "max-w-4xl",
                arrow: "right",
                thumb: TestingProcess,
              },
              {
                title: "Launch",
                description:
                  "Here is where we present your custom web design project. Upon approval, your project will be launched and romoted. Then sit back and watch the momentum!",
                maxWidth: "max-w-full",
                thumb: LaunchProcess,
              },
            ].map((process) => (
              <li
                key={crypto.randomUUID()}
                className={` grow-0 srhink-1 w-full ${process.maxWidth} ml-auto`}
              >
                <div
                  className={`relative grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)] gap-2 max-w-lg mx-auto isolate ${
                    process.arrow
                      ? 'after:content-[""] after:absolute after:h-24 after:w-24 after:opacity-40 after:z-[-1] after:bg-[url("./assets/images/processArrow.png")] after:bg-contain after:bg-no-repeat after:scale-x-[-1]'
                      : ""
                  } ${
                    process.arrow === "down"
                      ? "after:rotate-[115deg] after:right-0 after:top-10"
                      : ""
                  } ${
                    process.arrow === "right"
                      ? "after:rotate-[190deg] after:right-0 after:top-20"
                      : ""
                  }`}
                >
                  <img
                    src={process.thumb}
                    alt={`${process.title}-step graphics`}
                    className="aspect-square w-14 row-span-full opacity-75"
                  />
                  <h3 className="fs-secondary-heading fw-semi-bold">
                    {process.title}
                  </h3>
                  <p className="text-justify">{process.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-xs md:absolute top-[45%] text-center opacity-70 hover:opacity-100 group"
          >
            <img
              aria-hidden="true"
              src={Team}
              alt="Laptop icon by Stickers, Flaticon.com"
              className="w-[clamp(4rem,10vw,18rem)] mx-auto group-hover:rotate-6 group-hover:scale-105"
            />
            Who's behind the work?
            <br />
            Find out here!
          </a>
        </div>
      </CustomElement>
      <CustomElement element="section" backgroundImage={Section3}>
        <div className="wrapper grid gap-4">
          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            Experience us live
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
          <CustomElement
            element="div"
            backgroundImage={videoModalBG}
            className="w-full aspect-video bg-black/60 bg-blend-overlay grid gap-8 place-items-center md:grid-cols-2 grid-cols-1 p-8"
          >
            <p
              className={`text-primary-400  text-6xl uppercase fw-bold text-center self-end ${customDropShadowValues}`}
            >
              Let's get your project started
            </p>
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="text-primary-400 hover:scale-105 md:text-[8rem] text-6xl md:col-[1_/_span_1] md:row-[1_/_span_2] transition-all"
              aria-label="Open Youtube Video Modal"
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Escape") {
                  setIsModalOpen(false);
                }
              }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className={`${customDropShadowValues}`}
              />
            </button>
            <a
              href="#"
              className={`text-white hover:text-gray-400 text-2xl uppercase fw-bold relative self-start before:content-[""] before:absolute before:border-t-4 before:w-2/4 before:right-0 before:-translate-x-2/4 before:top-[calc(100%_+_0.5rem)] ${customDropShadowValues}`}
            >
              contact us
            </a>
          </CustomElement>
        </div>

        {isModalOpen && (
          <div
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="fixed w-full h-screen bg-black/80 inset-0 grid place-items-center z-[400]"
            aria-label="Youtube Video Modal"
          >
            <div className="custom-home-modal | relative w-[min(50rem,90%)]">
              <button
                aria-label="Close Youtube Video Modal"
                className="grid place-items-center absolute left-[98%] bottom-[96%]"
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className={`text-white bg-primary-400 p-[0.45rem] w-full aspect-square text-[clamp(0.5rem,10vw,1rem)] hover:bg-primary-200  rounded-full ${customDropShadowValues}`}
                />
              </button>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Q5jBN9_zNrk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </CustomElement>
      <CustomElement
        element="section"
        backgroundImage={Section2}
        className="bg-[hsl(0,0%,100%,0.75)] bg-blend-overlay"
      >
        <div className="wrapper grid gap-4">
          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            Our work<span className="text-primary-400 fw-bold">.</span>
          </h2>
          <ul className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Credit Repair",
                link: "https://www.nowcreditsolutions.com/home",
                img: CreditRepairWork,
              },
              {
                title: "Recruiting",
                link: "https://www.reconcoach.com/",
                img: RecruitingWork,
              },
              {
                title: "Real Estate",
                link: "https://www.camelotpropertiesonline.com/",
                img: RealEstateWork,
              },
              {
                title: "House Repair",
                link: "https://alabamasignaturehomes.com/",
                img: HouseRepairWork,
              },
            ].map((work) => (
              <li
                className="text-center max-w-[24rem] group"
                key={crypto.randomUUID()}
              >
                <a href={work.link}>
                  <img
                    src={work.img}
                    alt={`${work.title} website screenshot`}
                    className="block mx-auto aspect-video object-cover object-left-top mb-4 shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all"
                  />
                  {work.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CustomElement>
      <section>
        <div className="wrapper flow" style={{ "--flow-spacer": "2em" }}>
          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            Client reviews
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
          <iframe
            src="https://www.youtube.com/embed/ui97DX9HyPM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[min(35rem,100%)] aspect-video mx-auto"
          ></iframe>
        </div>
      </section>
      <CustomElement
        element="section"
        backgroundImage={Section4}
        className="bg-[hsl(0,0%,0%,0.7)] bg-blend-multiply bg-fixed text-neutral-100"
      >
        <div className="wrapper  mb-8">
          <blockquote className="fs-primary-heading uppercase fw-semi-bold text-center">
            <p>
              Great things in business are never done by one person. <br />
              <span className="text-primary-400">
                They're done by a team of people
              </span>
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
    </>
  );
}

export default Home;
