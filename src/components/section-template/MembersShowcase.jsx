import React from "react";
import DustinPhoto from "../../assets/images/dustin.png";
import IsisPhoto from "../../assets/images/isis.png";
import KenPhoto from "../../assets/images/ken.png";

function MembersShowcase({ header = "insert header her", link = false }) {
  return (
    <>
      <div className="wrapper">
        <div className="grid gap-12 p-8">
          <div className="flex flex-wrap justify-between items-baseline">
            <h2 className="uppercase text-3xl font-semibold">
              {header}
              <span className="text-primary-400">.</span>
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
          <ul className="flex flex-wrap gap-8 justify-center items-start">
            {[
              {
                image: DustinPhoto,
                name: "Dustin Woodley",
                title: "Sales President",
              },
              {
                image: IsisPhoto,
                name: "Isis Hunley",
                title: "Web Developer",
              },
              {
                image: KenPhoto,
                name: "Ken Baker",
                title: "Computers and Information Technology Manager",
              },
            ].map((expert) => (
              <li
                key={crypto.randomUUID()}
                className="basis-80 grid gap-1 text-center isolate"
              >
                <img
                  className="w-full rounded-md shadow-xl mb-4"
                  src={expert.image}
                  alt={`Photo of ${expert.name}`}
                />
                <h3 className="font-bold z-10">{expert.name}</h3>
                <p className="text-neutral-600">{expert.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MembersShowcase;
