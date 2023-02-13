import React from "react";
import ServiceBG from "../../assets/images/service.jpeg";
import Solutions1 from "../../assets/images/Marketing-Strategy.png";
import CRMService from "../../assets/images/crm-service.jpeg";
import CustomElement from "../CustomElement";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "../../pages/NotFound";

function Service() {
  const location = useLocation();
  const { id } = useParams();
  const validIDs = [
    "crm",
    "campaign-creation-and-management",
    "web-and-app-development",
    "content-and-social-media-marketing",
    "digital-marketing",
    "brand-development",
    "seo-services",
  ];
  const isValidID = validIDs.includes(id);
  return isValidID ? (
    <>
      <CustomElement
        backgroundImage={ServiceBG}
        className="bg-black/80 bg-blend-overlay pb-4"
      >
        <div className="wrapper">
          <img
            src={`../..${location.state.icon}`}
            alt=""
            className="max-w-[10rem] mx-auto"
          />
          <h1 className="text-center text-white uppercase text-6xl font-semibold mb-8">
            {location.state.header}
          </h1>
        </div>
      </CustomElement>
      <section>
        <div className="wrapper grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] items-center gap-8">
          <div className="grid gap-4">
            <h2 className="text-3xl font-semibold ">{location.state.header}</h2>
            <p className="text-xl">{location.state.paragraph}</p>
          </div>
          <img
            src={location.state.graphic}
            alt=""
            className="object-contain w-[34rem]"
          />
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="capitalize text-3xl font-semibold text-center">
            How can we help{" "}
            <span className="text-primary-400">your business?</span>
          </h2>
          <div>
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
        </div>
      </section>
    </>
  ) : (
    <NotFound />
  );
}

export default Service;
