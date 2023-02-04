import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";
import FooterBG from "../assets/images/SectionBG-1.png";
import CustomElement from "./CustomElement";

function Footer() {
  return (
    <CustomElement
      element="footer"
      backgroundImage={FooterBG}
      className="main-footer | bg-[hsl(0,0%,0%,0.7)] bg-blend-overlay text-neutral-100"
    >
      <div className="wrapper">
        <div className="">
          <img src={NSSLogo} alt="NOW Software Solutions Logo" />
          <address className="fs-secondary-heading">
            <a href="tel:+13343445870" aria-label="phone">
              +1 (334) 344-5870
            </a>
            <a href="mailto:info@nowsoftwaresolutions.com" aria-label="email">
              info@nowsoftwaresolutions.com
            </a>
            <p aria-label="office address">
              698 Silver Hills Dr. <br />
              Prattville, AL 36066 <br />
            </p>
          </address>
        </div>
        <p className="fs-300">
          © Copyright {new Date().getUTCFullYear()}, NOW Software Solutions
        </p>
      </div>
    </CustomElement>
  );
}

export default Footer;
