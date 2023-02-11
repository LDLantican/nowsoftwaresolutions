import React from "react";
import CustomElement from "../components/CustomElement";
import Section3 from "../assets/images/SectionBG-3.png";
import ButterflyBG from "../assets/images/butterfly.jpeg";
import AboutGraphics from "../assets/images/about-graphics.jpeg";

function About() {
  return (
    <>
      <CustomElement
        element="section"
        backgroundImage={ButterflyBG}
        className="bg-black/80 bg-blend-overlay"
      ></CustomElement>
      <section>
        <div className="wrapper grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] items-start gap-4">
          <div className="grid gap-8">
            <h1 className="text-3xl font-medium">
              ABOUT{" "}
              <span className="text-primary-400">
                NOW SOFTWARE & MARKETING SOLUTIONS
              </span>
            </h1>
            <p className="text-justify">
              <a href="#" className="text-primary-400 hover:text-primary-200">
                NOW Software Solutions
              </a>{" "}
              is here to help with business development and brand awareness.
              Simply put, our systems and knowledge of highly successful
              marketing methods have proven valuable to both small businesses &
              big businesses alike. We are able to custom tailor our services to
              each client, providing you only the best of what you need to make
              you successful. Our services are beneficial to any industry
              looking to grow their business volume! In a world that is quickly
              going digital we are here to make sure you and your business stand
              out above the rest!
            </p>
          </div>
          <img src={AboutGraphics} alt="" className="object-contain" />
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="uppercase text-3xl font-medium text-center mb-16">
            Our Mission<span className="font-bold text-primary-400">.</span>
          </h2>
          <ul role="list" className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Your one stop shop for marketing.",
                description:
                  "Whether it is building a marketing system from the ground up or a logo design, we are here to assist you. We will do whatever it takes to grow your business to its maximum potential.",
              },
              {
                title:
                  "Experts in marketing and sales alignment and masters of the message.",
                description:
                  "Experts in marketing and sales alignment and masters of the message Verbiage: We strive to Increase your business by increasing ROI, remaining relevant, Increasing profits, Leading with purpose, Making a difference, Improving your differentiation, and Improving organizational culture and alignment.",
              },
              {
                title: "Transform your visions into a reality.",
                description:
                  "All successful business models and ideas depends on a sustainable marketing plan. At NOW we transform your visions into a reality.",
              },
            ].map((mission) => (
              <li
                className="w-[min(12rem,90%)] shrink-0 grow text-center"
                key={crypto.randomUUID()}
              >
                <h3 className="mb-8 font-semibold">{mission.title}</h3>
                <p>{mission.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CustomElement element="section" backgroundImage={Section3}>
        <div className="wrapper">
          <iframe
            aria-label="Contact Form"
            className="w-full min-h-[26rem]"
            src="https://link.nowsoftwaresolutions.com/widget/form/0aZtzGUqtDihMIZMpm1X"
            id="inline-0aZtzGUqtDihMIZMpm1X"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Services - Contact Us Form"
            data-height="543"
            data-layout-iframe-id="inline-0aZtzGUqtDihMIZMpm1X"
            data-form-id="0aZtzGUqtDihMIZMpm1X"
          ></iframe>
          <script src="https://link.nowsoftwaresolutions.com/js/form_embed.js"></script>
        </div>
      </CustomElement>
    </>
  );
}

export default About;
