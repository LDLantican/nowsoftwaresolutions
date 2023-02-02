import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src={NSSLogo} alt="NOW Software Solutions Logo" />
      <address>
        <a href="tel:+13343445870">+1 (334) 344-5870</a>
        <a href="mailto:info@nowsoftwaresolutions.com">
          info@nowsoftwaresolutions.com
        </a>
        <p>
          698 Silver Hills Dr. <br />
          Prattville, AL 36066 <br />
        </p>
      </address>
      <p>© Copyright {new Date().getUTCFullYear()}, NOW Software Solutions</p>
    </footer>
  );
}

export default Footer;
