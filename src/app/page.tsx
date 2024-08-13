import React from "react";
import { Banner, Supercharge, WhatWeOffer, RevenueManagement, OurServices, RevenueServices, Workstructure, OurOTAPartners, ReadytoElevate, PopupForm } from "./components";
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
      <PopupForm/>
    </>
  );
};

export default page;
