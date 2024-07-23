import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import {
  GoogleMyBusinessLocalListing,
  GoogleSocialMediaAdvertising,
  InfluencerMarketing,
  OnlineReputationManagement,
  OnlineTravelAgencyOptimization,
  PRCommunications,
  SearchEngineOptimizationMarketing,
  SocialMediaMarketingManagement,
  WebsiteDevelopmentOptimization,
} from "@/icons/icons";

const OurServices: React.FC = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <h2 className="lg:text-5xl text-3xl text-blue-sky text-center font-bold lg:mb-9 mb-5">
        Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {data.map((item, index) => (
            <div key={index} className="flex items-center group justify-start  gap-4">
              <div>
                <div className="bg-[#FCF0EE] lg:w-28 lg:h-28 w-[6rem] h-[6rem] group-hover:-translate-y-3 transition ease-in-out duration-700 p-4 flex items-center justify-center rounded-2xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="lg:text-3xl text-lg group text-black">{item.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;

const data = [
  {
    title: "Online Reputation Management",
    icon: <OnlineReputationManagement />,
  },
  {
    title: "Website Development/Optimization",
    icon: <WebsiteDevelopmentOptimization />,
  },
  {
    title: "Social Media Marketing/ Management",
    icon: <SocialMediaMarketingManagement />,
  },
  {
    title: "Google & Social Media Advertising",
    icon: <GoogleSocialMediaAdvertising />,
  },
  {
    title: "Online Travel Agency Optimization",
    icon: <OnlineTravelAgencyOptimization />,
  },
  {
    title: "Search Engine Optimization/ Marketing",
    icon: <SearchEngineOptimizationMarketing />,
  },
  {
    title: "Google My Business/ Local Listing",
    icon: <GoogleMyBusinessLocalListing />,
  },
  {
    title: "PR & Communications",
    icon: <PRCommunications />,
  },
  {
    title: "Influencer Marketing",
    icon: <InfluencerMarketing />,
  },
];
