import React from "react";
import Section2 from "../../assets/images/SectionBG-2.png";
import CreditRepairWork from "../../assets/images/CreditRepairWork.png";
import RecruitingWork from "../../assets/images/RecruitingWork.png";
import RealEstateWork from "../../assets/images/RealEstateWork.png";
import HouseRepairWork from "../../assets/images/HouseRepairWork.png";
import CustomElement from "../CustomElement";

function CustomPortfolio({ link = false, header = "insert header here" }) {
  return (
    <>
      <CustomElement
        element="section"
        backgroundImage={Section2}
        className="bg-[hsl(0,0%,100%,0.75)] bg-blend-overlay"
      >
        <div className="wrapper grid gap-16">
          <div className="flex flex-wrap justify-between items-baseline">
            <h2 className="fs-primary-heading uppercase fw-semi-bold">
              {header}
              <span className="text-primary-400 fw-bold">.</span>
            </h2>
            {link && (
              <a
                href="#"
                className='relative uppercase font-semibold hover:text-neutral-400 after:content-[""] after:absolute after:h-1 after:w-full after:top-full after:left-0 after:bg-primary-400 hover:after:bg-primary-200'
              >
                view more
              </a>
            )}
          </div>
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
    </>
  );
}

export default CustomPortfolio;
