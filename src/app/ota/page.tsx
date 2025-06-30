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
      <OtaAdd {...newPagedata.otaAdd} />
    </main>
  );
};

export default page;
