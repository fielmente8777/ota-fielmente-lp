import React from "react";
import { Banner, Supercharge, WhatWeOffer, RevenueManagement, OurServices, RevenueServices, Workstructure, OurOTAPartners, ReadytoElevate, PopupForm } from "./components";
import Riview from "./components/Riview";
import MIleStonesNew from "./components/MIleStonesNew";
const page: React.FC = () => {
  return (
    <>
      <Banner />
      <MIleStonesNew />
      <Supercharge />
      <WhatWeOffer />
      <RevenueManagement />
      <OurServices />
      <RevenueServices />
      <Workstructure />
      <Riview />
      <OurOTAPartners />
      <ReadytoElevate />
      <PopupForm />
    </>
  );
};

export default page;
