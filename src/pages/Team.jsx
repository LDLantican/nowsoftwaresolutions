import React from "react";
import CustomHeaderLabel from "../components/section-template/CustomHeaderLabel";
import TeamBG from "../assets/images/teams.jpeg";
import ServicesCarousel from "../components/section-template/ServicesCarousel";
import CustomPortfolio from "../components/section-template/CustomPortfolio";
import CustomCTA from "../components/section-template/CustomCTA";
import MembersShowcase from "../components/section-template/MembersShowcase";

function Team() {
  return (
    <>
      <CustomHeaderLabel
        header="our team"
        crumbLink="Meet the experts"
        bgImage={TeamBG}
      />
      <MembersShowcase header="meet the experts" />
      <section>
        <div className="wrapper grid gap-8 text-center">
          <h1 className="uppercase text-3xl font-semibold">
            our <span className="text-primary-400">core values</span>
          </h1>
          <p className="max-w-5xl mx-auto">
            At <span className="text-primary-400">NOW Software Solutions</span>{" "}
            we believe that honesty and integrity are essential to any
            relationship. We guarantee that we will always deliver on what we
            promise. Our motto is{" "}
            <span className="italic">No Opportunity Wasted</span>, meaning we
            focus on doing what ever it takes to grow your business in every
            opportunity. We strive to be the best digital marketing company in
            The Tri-County Area and love to see our clients' businesses succeed.
          </p>
        </div>
      </section>
      <ServicesCarousel />
      <CustomPortfolio header="work showcase" link={true} />
      <CustomCTA
        quote="Great things in business are never done by one person. They're done by a team of people"
        highlight={["They're done by a team of people"]}
      />
    </>
  );
}

export default Team;
