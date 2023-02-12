import React from "react";
import CustomCTA from "../components/section-template/CustomCTA";
import CustomPortfolio from "../components/section-template/CustomPortfolio";
import CustomHeaderLabel from "../components/section-template/CustomHeaderLabel";

function Portfolio() {
  return (
    <>
      <CustomHeaderLabel header="Portfolio" />
      <CustomPortfolio header="work showcase" />
      <CustomCTA
        quote="DIGITAL MARKETING WITH REAL RESULTS."
        highlight={["REAL"]}
      />
    </>
  );
}

export default Portfolio;
