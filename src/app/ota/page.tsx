import Banner2 from "@/components/Banner2";
import { newPagedata } from "@/utils/newPageData";
import {
  ChooseUs,
  ContactCard,
  CountiesWeWorked,
  OtaAdd,
  Revenue,
  RevenueManagementServices,
} from "./component";
import { OurClients } from "@/components";
import EazotelAppCTA from "@/components/EazotelAppCTA";

const page = () => {
  return (
    <main>
      <Banner2 {...newPagedata.bannerData} />
      <Revenue {...newPagedata.revenue} />
      <RevenueManagementServices {...newPagedata.revenueManagementServices} />
      <ChooseUs {...newPagedata.chooseUs} />
      <ContactCard {...newPagedata.contactCard} />
      <CountiesWeWorked {...newPagedata.countriesWeWorkedWith} />
      <OurClients {...newPagedata.ourClients} />
      <EazotelAppCTA />
      <OtaAdd {...newPagedata.otaAdd} />
    </main>
  );
};

export default page;
