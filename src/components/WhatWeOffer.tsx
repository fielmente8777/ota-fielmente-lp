import Container from "@/components/Container";
import Section from "@/components/Section";
import { OtaListIcon, OtaManagement, RevenueManagement } from "@/icons/icons";

const WhatWeOffer = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <h2 className="md:text-4xl text-3xl text-blue-sky font-semibold lg:mb-8 mb-5">
          What We Offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group justify-center gap-4 bg-[#F26633]/10 px-8 py-14 rounded-3xl"
            >
              <div className="text-5xl group-hover:-translate-y-3 transition ease-in-out duration-700">{item.icon}</div>
              <h3 className="md:text-2xl text-xl text-orange-primary capitalize font-bold text-center">
                {item.text1} <br className="hidden lg:block" /> {item.text2}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhatWeOffer;

const data = [
  {
    icon: <RevenueManagement />,
    text1: "Revenue",
    text2: "Management",
  },
  {
    icon: <OtaListIcon />,
    text1: "OTA Listing /",
    text2: "optimisation",
  },
  {
    icon: <OtaManagement />,
    text1: "OTA",
    text2: "Management",
  },
];
