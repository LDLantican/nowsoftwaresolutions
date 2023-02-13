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
import CRMService from "../../assets/images/crm-service.jpeg";
import CampaignCreationService from "../../assets/images/campaign-creation-service.png";
import WebAppDevelopmentService from "../../assets/images/web-app-development.jpeg";
import ContentSocialMediaService from "../../assets/images/content-social-media-marketing-service.png";
import BrandDevelopmentService from "../../assets/images/brand-development-service.png";
import SEOService from "../../assets/images/seo-service.png";
import { NavLink } from "react-router-dom";

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
              link: "/services/crm",
              icon: Solutions1,
              title: "Customer Relationship Management",
              desc: "Managing all your company's relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships.",
              content: {
                header: "CRM",
                paragraph:
                  "Our customer relationship management system aims to address challenges like these. It takes customer data and turns it into useful, actionable insight that can transform a business. It helps everyone in a business to easily update records and to get access to the latest information. Forging good relationships and keeping track of prospects and customers is crucial for customer acquisition and retention, which is at the heart of a CRM's function.",
                graphic: CRMService,
              },
            },
            {
              link: "/services/campaign-creation-and-management",
              icon: Solutions2,
              title: "Campaign Creation and Management",
              desc: "High-performance idea generation, day-to-day management and optimization of campaigns.",
              content: {
                header: "CAMPAIGN CREATION",
                paragraph:
                  "Our automated lead generation campaigns will attract higher quality leads who are more willing to purchase because they are already familiar with your brand, understand what your company does, and initiated the conversation with you.",
                graphic: CampaignCreationService,
              },
            },
            {
              link: "/services/web-and-app-development",
              icon: Solutions3,
              title: "Web & App Development",
              desc: "From websites to mobile apps, we create digital experiences that get your company noticed.",
              content: {
                header: "WEB & APP DEVELOPMENT",
                paragraph:
                  "We are experts in building and designing custom websites and mobile applications for virtually any business and industry. Our custom website development services will turn your visions into a reality! Whether it is a simple or complex integrative website, we have got it handled. Our custom websites and mobile applications are elegant in nature and extremely user friendly. Let us make your vision into a reality by utilizing our WEB and APP development services.",
                graphic: WebAppDevelopmentService,
              },
            },
            {
              link: "/services/content-and-social-media-marketing",
              icon: Solutions4,
              title: "Content & Social Media Marketing",
              desc: "Content strategies that engage customers in a personal way to generate brand awareness and drive traffic.",
              content: {
                header: "CONTENT & SOCIAL MEDIA MARKETING",
                paragraph:
                  "Harness social media, digital marketing, PPC and experience excellent return on investment. We live in a digital age where all information is available at just a push of a button. Digital marketing campaigns are paramount to a healthy marketing strategy. Digital marketing is 100% measurable and scalable, so whether you are a massive conglomerate or a small business you will see value and excellent ROI in NOW Software Solutions digital marketing services.",
                graphic: ContentSocialMediaService,
              },
            },
            {
              link: "/services/digital-marketing",
              icon: Solutions5,
              title: "Digital Marketing",
              desc: "Targeted strategies and tactics. Measured results.",
              content: {
                header: "DIGITAL MARKETING",
                paragraph:
                  "Harness social media, digital marketing, PPC and experience excellent return on investment. We live in a digital age where all information is available at just a push of a button. Digital marketing campaigns are paramount to a healthy marketing strategy. Digital marketing is 100% measurable and scalable, so whether you are a massive conglomerate or a small business you will see value and excellent ROI in NOW Software Solutions digital marketing services.",
                graphic: ContentSocialMediaService,
              },
            },
            {
              link: "/services/brand-development",
              icon: Solutions6,
              title: "Brand Development",
              desc: "Memorable brand stories that connect.",
              content: {
                header: "Brand Development",
                paragraph:
                  "We help clients and their marketing leaders create new brands, re-invigorate existing ones, simplify complex product and service portfolios and communicate a unique value proposition to their customers through every channel and at every touchpoint.",
                graphic: BrandDevelopmentService,
              },
            },
            {
              link: "/services/seo-services",
              icon: Solutions7,
              title: "SEO Services",
              desc: "Custom search engine marketing services for B2B and B2C.",
              content: {
                header: "SEO",
                paragraph:
                  "You found us on the internet right? Leverage and master search engine optimization and see your sales rise. SEO is excellent for long term marketing strategies due to your website being on the first page of search engines such as google. Gain the competitive edge in your industry and see a significant increase in organic traffic on you companies website.",
                graphic: SEOService,
              },
            },
          ].map((solution) => (
            <li
              className="basis-40 grow-0 shrink min-h-[14rem] group overflow-hidden"
              key={crypto.randomUUID()}
            >
              <NavLink
                to={solution.link}
                state={{ icon: solution.icon, ...solution.content }}
                className="grid grid-rows-[128px_repeat(3,auto)] gap-4 justify-center max-h-48 translate-y-0 group-hover:translate-y-[-128px] transition-transform duration-500 ease-in-out"
              >
                <img
                  className="max-w-[8rem] mx-auto"
                  src={solution.icon}
                  alt="CRM Icon"
                />
                <h3>{solution.title}</h3>
                <p className="text-sm font-light mt-16 group-hover:m-0 transition-all duration-500 ease-in-out">
                  {solution.desc}
                </p>
                <p className="button text-[0.65rem] mx-auto">Read More</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </CustomElement>
  );
}

export default ServicesCarousel;
