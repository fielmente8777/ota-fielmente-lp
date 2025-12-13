import {
  ADVANCEDANALYTICS,
  CHANNELOPTIMIZATION,
  COMPETITIVEANALYSIS,
  DataDriven,
  DEMANDFORECASTING,
  DYNAMICPRICING,
  EXPERIENCEDREVENUEMANAGER,
  INVENTORYRATEPARITY,
  INVOICINGMANAGEMENT,
  MARKETSEGMENTATION,
  OTALISTING,
  OTAMANAGEMENTOPTIMISATION,
  PERFORMANCEREPORT,
  PROMOTIONALSTRATEGIES,
  ProvenExpertise,
  RevenueIcon,
  REVENUEMANAGEMENT,
  TailoredStrategy,
} from "@/icons/icons";
import { CheckIcon, MONTHLYMEETING } from '../icons/icons';
import { ClientImages } from "./client";

export const newPagedata = {
  bannerData: {
    title: `Fielmente - Online Revenue Growth <span>Partner</span>`,
    list: [
      "We’ve built a Hotel Chain",
      "Experience of over 15 years in revenue management",
      "We know how to maximize your revenue",
    ],
    images: [
      {
        src: "/Trustpilot.png",
        alt: "trustpilot",
      },
      {
        src: "/Capterra.png",
        alt: "capterra",
      },
      {
        src: "/hoteltechreport.png",
        alt: "HotelTechReport",
      },
    ],
  },
  revenue: {
    title: "Let’s Supercharge Your Hotel Revenue",
    description:
      "Fielmente Hospitality brings decades of experience and groundbreaking technology to help hoteliers worldwide Go Beyond. We are the only Revenue Management Company with a team of Industry Experts with more product solutions than any of our competitors, Fielmente ensures you have the tools you need to succeed.",
    image: "/im1.png",
    icon: <RevenueIcon />,
    links: [
      {
        title: "Schedule a Call",
        href: "",
      },
    ],
  },
  revenueManagementServices: {
    title: "Revenue Management Services",
    subTitle: "We Offer Tailored Solutions To Meet Your OTA Needs",
    cards: [
      {
        title: "OTA MANAGEMENT & OPTIMIZATION",
        icon: <OTAMANAGEMENTOPTIMISATION />,
      },
      {
        title: "REVENUE MANAGEMENT",
        icon: <REVENUEMANAGEMENT />,
      },
      {
        title: "OTA LISTING",
        icon: <OTALISTING />,
      },
      {
        title: "EXPERIENCED REVENUE MANAGER",
        icon: <EXPERIENCEDREVENUEMANAGER />,
      },
      {
        title: "INVOICING MANAGEMENT",
        icon: <INVOICINGMANAGEMENT />,
      },
      {
        title: "INVENTORY & RATE PARITY",
        icon: <INVENTORYRATEPARITY />,
      },
      {
        title: "PERFORMANCE REPORT",
        icon: <PERFORMANCEREPORT />,
      },
      {
        title: "COMPETITIVE ANALYSIS",
        icon: <COMPETITIVEANALYSIS />,
      },
      {
        title: "DEMAND FORECASTING",
        icon: <DEMANDFORECASTING />,
      },
      {
        title: "CHANNEL OPTIMIZATION",
        icon: <CHANNELOPTIMIZATION />,
      },
      {
        title: "DYNAMIC PRICING",
        icon: <DYNAMICPRICING />,
      },
      {
        title: "MONTHLY MEETING",
        icon: <MONTHLYMEETING/>,
      },
      {
        title: "PROMOTIONAL STRATEGIES",
        icon: <PROMOTIONALSTRATEGIES/>,
      },
      {
        title: "ADVANCED ANALYTICS",
        icon: <ADVANCEDANALYTICS />,
      },
      {
        title: "MARKET SEGMENTATION",
        icon: <MARKETSEGMENTATION />,
      },
    ],
  },
  chooseUs: {
    title: "Why Choose Us",
    subTitle: `AI-Driven Revenue Management for <b>the Hospitality Industry</b>`,
    cards: [
      {
        icon: <ProvenExpertise />,
        title: "Proven Expertise",
        description:
          "Our team brings extensive experience in revenue management, ensuring that your business capitalizes on every opportunity for growth with precision, and measurable impact.",
      },
      {
        icon: <DataDriven />,
        title: "Data-Driven",
        description:
          "We employ sophisticated analytics to understand market trends, demand patterns, and customer behaviour, allowing us to tailor strategies that align with your business objectives.",
      },
      {
        icon: <TailoredStrategy />,
        title: "Tailored Strategy",
        description:
          "We employ sophisticated analytics to understand market trends, demand patterns, and customer behavior, allowing us to tailor strategies that align with your business objectives.",
      },
    ],
  },
  contactCard: {
    title:
      "We Operate On <b>Fixed Fee Structure </b>Only, Ensuring Complete Transparency!",
    lists: [
      {
        icon: <CheckIcon />,
        title: "No Commission",
      },
      {
        icon: <CheckIcon />,
        title: "No Hidden charges",
      },
      {
        icon: <CheckIcon />,
        title: "No setup cost",
      },
    ],
    links: [
      {
        title: "Schedule a Call",
        href: "",
      },
    ],
  },
  countriesWeWorkedWith: {
    title: "Countries We Worked",
    subTitle: "Delivering AI-Driven Hotel Marketing Solutions Since 2020",
    cards: [
      {
        src: "/flags/dubai.png",
        alt: "UAE",
      },
      {
        src: "/flags/uk.png",
        alt: "uk",
      },
      {
        src: "/flags/usa.png",
        alt: "usa",
      },
      {
        src: "/flags/canada.png",
        alt: "Canada",
      },
      {
        src: "/flags/australia.png",
        alt: "Australia",
      },
      {
        src: "/flags/oman.png",
        alt: "Oman",
      },
      {
        src: "/flags/srilanka.png",
        alt: "sri lanka",
      },
      {
        src: "/flags/nepal.png",
        alt: "Nepal",
      },
    ],
  },
  ourClients: {
    title: "Our Clients",
    subTitle: "Brands That Trust Us",
    clients: ClientImages,
  },
  otaAdd: {
    title: "Make The Smart Choice For All Your OTA Needs",
    subTitle: "It all starts with a single click.",
    links: [
      {
        title: "Schedule a Call",
        href: "",
      },
    ],
  },
};
