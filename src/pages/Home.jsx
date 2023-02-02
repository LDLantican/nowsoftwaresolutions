import React from "react";
import NSSLogo from "../assets/images/nss-logo.webp";
import CustomSection from "../components/CustomSection";
import HeroBG from "../assets/images/hero-bg.gif";

function Home() {
  return (
    <>
      <CustomSection backgroundImage={HeroBG}>
        <img src={NSSLogo} alt="NOW Software Solution Company Logo" />
        <h1 className="fs-900 text-neutral-100">Welcome</h1>
        <a className="button" href="#">
          Discover More
        </a>
      </CustomSection>
      <section>
        <h2>We shape the perfect solutions.</h2>
        <p>
          We are committed to providing our customers with exceptional service
          while offering our employees the best training.
        </p>

        <ul>
          <li>
            <a href="#">Customer Relationship Management</a>
          </li>
          <li>
            <a href="#">Campaign Creation and Management</a>
          </li>
          <li>
            <a href="#">Web & App Development</a>
          </li>
          <li>
            <a href="#">Content & Social Media Marketing</a>
          </li>
          <li>
            <a href="#">Digital Marketing</a>
          </li>
          <li>
            <a href="#">Brand Development</a>
          </li>
          <li>
            <a href="#">SEO Services</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Industries we help grow with digital marketing.</h2>
        <p>
          Please <a href="#">click here</a> if you would like to access our SaaS
          Mode, build, and increase your business freely how ever you want from
          the ground up. This includes your own website, creating marketing
          campaigns, funnels, CRMS,and so much for. The opportunity is yours!
        </p>
        <p>Or choose from the following templates!</p>
        <ul>
          <li>
            <img src="#" alt="" />
            <p>Real Estate</p>
          </li>
          <li>
            <img src="#" alt="" />
            <p>Small Business</p>
          </li>
          <li>
            <img src="#" alt="" />
            <p>Virtual Assistant Solutions</p>
          </li>
          <li>
            <img src="#" alt="" />
            <p>Home Services</p>
          </li>
          <li>
            <img src="#" alt="" />
            <p>Legal</p>
          </li>
          <li>
            <img src="#" alt="" />
            <p>Restaurant</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>The Business Growth Process.</h2>
        <ul>
          <li>
            <h3>Meet</h3>
            <p>
              The first step is to discover more about you, your company's
              vision, and to build a strong relationship. This is where we will
              create your brand, create a custom strategy, and set project
              goals.
            </p>
          </li>
          <li>
            <h3>Plan</h3>
            <p>
              Following the initial meetup, we will outline your project, create
              milestones, and agree on priorities. Now we have a strategic plan
              in place that aligns with your initial vision and makes your goals
              achievable.
            </p>
          </li>
          <li>
            <h3>Web Design & Dev</h3>
            <p>
              Once the outline is finished, visual concepts of the custom
              project will be created. Our creative and development team reviews
              and revises the materials until it aligns with your web design
              goals.
            </p>
          </li>
          <li>
            <h3>Testing</h3>
            <p>
              Here review and testing takes place, which ensures the quality of
              your project. This is the most valuable step in the web design
              process, because your reputation is our reputation!
            </p>
          </li>
          <li>
            <h3>Launch</h3>
            <p>
              Here is where we present your custom web design project. Upon
              approval, your project will be launched and promoted. Then sit
              back and watch the momentum!
            </p>
          </li>
        </ul>
        <a href="#">Who's behind the work? Find out here</a>
      </section>
      <section>
        <h2>Experience us live.</h2>
        <p>Let's get your project started</p>
        <a href="#">contact us</a>
      </section>
      <section>
        <h2>Our work.</h2>
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
      </section>
      <section>
        <h2>Client reviews.</h2>
        <video src="#"></video>
      </section>
      <section>
        <blockquote>
          <p>
            Great things in business are never done by one person. They're done
            by a team of people
          </p>
        </blockquote>
        <div>
          <p>Let's get your project started!</p>
          <a href="#">Contact Us</a>
        </div>
      </section>
    </>
  );
}

export default Home;
