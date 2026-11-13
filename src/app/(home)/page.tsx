import React from "react";
import { Banner, Supercharge, WhatWeOffer, RevenueManagement, OurServices, RevenueServices, Workstructure, OurOTAPartners, ReadytoElevate, PopupForm, ConsultationForm } from "@/components";
import MIleStonesNew from "@/components/MIleStonesNew";
import EazotelAppCTA from "@/components/EazotelAppCTA";
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
      {/* <Riview /> */}
      <OurOTAPartners />
      {/* <ReadytoElevate /> */}
      <EazotelAppCTA />
      <ConsultationForm />
    </>
  );
};

export default page;
