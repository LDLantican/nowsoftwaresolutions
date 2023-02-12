import React from "react";
import CustomElement from "../components/CustomElement";
import ButterflyBG from "../assets/images/butterfly.jpeg";
import Section3 from "../assets/images/SectionBG-3.png";

function Contact() {
  return (
    <>
      <CustomElement
        element="section"
        backgroundImage={ButterflyBG}
        className="bg-black/80 bg-blend-overlay"
      >
        <div className="wrapper text-white text-center grid gap-4">
          <h1 className="text-6xl font-semibold p-10">
            READY TO <span className="text-primary-400">GROW</span> YOUR
            BUSINESS?
          </h1>
          <p className="text-2xl">
            CHAT WITH ONE OF OUR DIGITAL MARKETING CONSULTANTS TODAY! <br />
            <a className="hover:underline" href="tel:+13343445870">
              (334) 344-5870
            </a>
          </p>
        </div>
      </CustomElement>
      <CustomElement
        element="section"
        backgroundImage={Section3}
        className="bg-white"
      >
        <div className="wrapper">
          <div className="relative">
            <iframe
              className="w-full min-h-[48rem]"
              src="https://link.nowsoftwaresolutions.com/widget/form/RnZvEpb7NzqDbyR9anEr"
              id="inline-RnZvEpb7NzqDbyR9anEr"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Generic Contact Us Form"
              data-height="861"
              data-layout-iframe-id="inline-RnZvEpb7NzqDbyR9anEr"
              data-form-id="RnZvEpb7NzqDbyR9anEr"
            ></iframe>
            <script src="https://link.nowsoftwaresolutions.com/js/form_embed.js"></script>
          </div>
          <div></div>
        </div>
      </CustomElement>
    </>
  );
}

export default Contact;
