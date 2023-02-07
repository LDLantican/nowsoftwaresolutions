import React from "react";
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

function Home() {
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
                  className="grid grid-rows-[128px_repeat(3,auto)] gap-4 justify-center max-h-48 translate-y-0 group-hover:translate-y-[-128px] transition-transform duration-1000 ease-in-out"
                >
                  <img
                    className="max-w-[8rem] mx-auto"
                    src={solution.img}
                    alt="CRM Icon"
                  />
                  <h3>{solution.title}</h3>
                  <p className="text-sm font-light mt-16 group-hover:m-0 transition-all duration-1000 ease-in-out">
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
                <a href="#" className="capitalize text-primary-400">
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
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] auto-rows-[minmax(12rem,1fr)] isolate">
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
                    alt=""
                    className="absolute w-[inherit] h-[inherit] object-cover object-top bottom-full  opacity-0  group-hover:opacity-100 group-hover:bottom-0 transition-all -z-10"
                  />
                  <p className="fs-secondary-heading button absolute bottom-8 group-hover:bottom-4 opacity-100 group-hover:opacity-10 transition-all">
                    {template.title}
                  </p>
                </a>
              </CustomElement>
            ))}
          </ul>
        </CustomElement>
      </CustomElement>
      <section>
        <div className="wrapper grid gap-8">
          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            The Business Growth Process
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
          <ul className="grid gap-6">
            <li className="grid gap-2">
              <h3 className="fs-secondary-heading fw-semi-bold">Meet</h3>
              <p>
                The first step is to discover more about you, your company's
                vision, and to build a strong relationship. This is where we
                will create your brand, create a custom strategy, and set
                project goals.
              </p>
            </li>
            <li className="grid gap-2">
              <h3 className="fs-secondary-heading fw-semi-bold">Plan</h3>
              <p>
                Following the initial meetup, we will outline your project,
                create milestones, and agree on priorities. Now we have a
                strategic plan in place that aligns with your initial vision and
                makes your goals achievable.
              </p>
            </li>
            <li className="grid gap-2">
              <h3 className="fs-secondary-heading fw-semi-bold">
                Web Design & Dev
              </h3>
              <p>
                Once the outline is finished, visual concepts of the custom
                project will be created. Our creative and development team
                reviews and revises the materials until it aligns with your web
                design goals.
              </p>
            </li>
            <li className="grid gap-2">
              <h3 className="fs-secondary-heading fw-semi-bold">Testing</h3>
              <p>
                Here review and testing takes place, which ensures the quality
                of your project. This is the most valuable step in the web
                design process, because your reputation is our reputation!
              </p>
            </li>
            <li className="grid gap-2">
              <h3 className="fs-secondary-heading fw-semi-bold">Launch</h3>
              <p>
                Here is where we present your custom web design project. Upon
                approval, your project will be launched and promoted. Then sit
                back and watch the momentum!
              </p>
            </li>
          </ul>
          <a href="#" className="fs-300">
            Who's behind the work? Find out here!
          </a>
        </div>
      </section>
      <CustomElement element="section" backgroundImage={Section3}>
        <div className="wrapper">
          <div className="w-3/4 mx-auto">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/Q5jBN9_zNrk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="fs-primary-heading uppercase fw-semi-bold">
            Experience us live
            <span className="text-primary-400 fw-bold">.</span>
          </h2>
          <p className="text-primary-400 uppercase fw-bold">
            Let's get your project started
          </p>
          <a href="#" className="uppercase fw-bold">
            contact us
          </a>
        </div>
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
          <ul>
            <li>
              <a href="#">Credit Repair</a>
            </li>
            <li>
              <a href="#">Recruiting</a>
            </li>
            <li>
              <a href="#">Real Estate</a>
            </li>
            <li>
              <a href="#">Roofing</a>
            </li>
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
        <div className="wrapper">
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
          className="max-w-[1200px] mx-auto bg-primary-400 bg-blend-darken"
        >
          <div className="wrapper">
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
