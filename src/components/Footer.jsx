import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";
import FooterBG from "../assets/images/SectionBG-1.png";
import CustomElement from "./CustomElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faGlobe,
  faMap,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <CustomElement
      element="footer"
      backgroundImage={FooterBG}
      className="main-footer | bg-[hsl(0,0%,0%,0.7)] text-center bg-blend-overlay text-neutral-100 pt-8"
    >
      <div className="wrapper">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <img
            src={NSSLogo}
            alt="NOW Software Solutions Logo"
            className="max-w-[9.5rem] grow-0 shrink basis-1/4"
          />
          <address className="fs-secondary-heading grow shrink basis-3/4 grid grid-cols-[repeat(auto-fit,minmax(14.5rem,1fr))] gap-8 place-items-center">
            <a
              href="tel:+13343445870"
              aria-label="phone"
              className="text-neutral-100 hover:text-primary-200 transition-all"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faPhone}
                className="block mx-auto mb-2 text-primary-400 text-4xl"
              />
              +1 (334) 344-5870
            </a>
            <a
              href="mailto:info@nowsoftwaresolutions.com"
              aria-label="email"
              className="text-neutral-100 hover:text-primary-200 transition-all"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faEnvelopeOpenText}
                className="block mx-auto mb-2 text-primary-400 text-4xl"
              />
              info@nowsoftwaresolutions.com
            </a>
            <p aria-label="office address">
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faMap}
                className="block mx-auto mb-2 text-primary-400 text-4xl"
              />
              698 Silver Hills Dr. <br />
              Prattville, AL 36066 <br />
            </p>
          </address>
        </div>
        <hr className="h-[0.15rem] bg-neutral-100 my-4" />
        <p className="fs-300 mb-4">
          © Copyright {new Date().getUTCFullYear()}, NOW Software Solutions
        </p>
      </div>
    </CustomElement>
  );
}

export default Footer;
