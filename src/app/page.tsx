import React from "react";
import { Banner, Supercharge, WhatWeOffer, RevenueManagement, OurServices, RevenueServices, Workstructure, OurOTAPartners, ReadytoElevate } from "./components";
const page: React.FC = () => {
  return (
    <>
      <Banner />
      <Supercharge/>
      <WhatWeOffer/>
      <RevenueManagement/>
      <OurServices/>
      <RevenueServices/>
      <Workstructure/>
      <OurOTAPartners/>
      <ReadytoElevate/>
    </>
  );
};

export default page;
