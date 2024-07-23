import { StaticImageData } from "next/image";
import {
  TwoIcon,
  FourIcon,
  FiveIcon,
  SixIcon,
  ThreeIcon,
  OneIcon,
  Yellowquets,
} from "../icons/icons";
import Socialmedia from "../../public/images/landingPage2/Social-Media-Management.png";
import Calander from "../../public/images/landingPage2/Calendar.png";
import SocialMediaCalender from "../../public/images/landingPage2/Social-Media-Calender.png";
import Comprehensive from "../../public/images/landingPage2/Comprehensive-captions.png";
import Linktree from "../../public/images/landingPage2/Linktree-Account.png";
import MediaPlatformAudit from "../../public/images/landingPage2/Media-Platform.png";
import Paymentmethod from "../../public/images/landingPage2/Payment-Method.png";
import world from "../../public/images/landingPage2/Default.png";
import canada from "../../public/images/landingPage2/canada.png";
import uk from "../../public/images/landingPage2/unitedkingdom.png";
import india from "../../public/images/landingPage2/india.png";
import us from "../../public/images/landingPage2/unitedstates.png";
import oman from "../../public/images/landingPage2/oman.png";
import nepal from "../../public/images/landingPage2/nepal.png";

import user1 from "../../public/images/user1.png";
import user2 from "../../public/images/user2.png";
import user3 from "../../public/images/user3.png";

export interface cardDataType {
  title: string;
  description: string;
  src: string | StaticImageData;
  alt: string;
  icon: React.ReactNode;
}

export const cardData: cardDataType[] = [
  {
    title: "Social Media Management",
    description:
      "Building brand value through online presence by increasing brand reach through creating captivating social media accounts and building social media strategies in the form of content calendars, digital media planning and buying in the form of google ads, and SEO to draw the attention of your target audience.",
    src: Socialmedia,
    alt: "social - media",
    icon: <OneIcon />,
  },
  {
    title: "Social-Media Calender",
    description: `Good writing doesn't just appear out of thin air. We have the necessary powerful combination of unrestrained voice and social engineering.
Creation of Digital Content for Brand Awareness (Static, Audio, Dynamic, Video)
Preparation of monthly content calenders along with proper schedules for posting with timelines`,
    src: SocialMediaCalender,
    alt: "Social - Media Calender",
    icon: <TwoIcon />,
  },
  {
    title: "Scheduling & publishing Content",
    description: `Social media content delivery may be streamlined with the help of publishing and scheduling solutions, freeing up your team to concentrate on improving strategy and fostering stronger connections with consumers.`,
    src: Calander,
    alt: "Scheduling & publishing Content",
    icon: <ThreeIcon />,
  },
  {
    title: "Comprehensive captions and Relevant Hashtags and research",
    description: `Using trending, brand-appropriate hashtags increases interaction, facilitates discovery, and allows you to maintain your credibility.`,
    src: Comprehensive,
    alt: "Comprehensive captions and Relevant Hashtags and research",
    icon: <FourIcon />,
  },
  {
    title: "Linktree Account Setup",
    description: `One Tap in One Go, Share numerous links at once on social media with the help of Linktree.`,
    src: Linktree,
    alt: "Linktree Account Setup",
    icon: <FiveIcon />,
  },
  {
    title: "Social Media Platform Audit & Remedial Action",
    description: `Tracking data added to links makes it easier to the identification of social traffic in Google Analytics, as well as the tracking of campaigns, referral traffic, and conversions from social postings.`,
    src: MediaPlatformAudit,
    alt: "Social Media Platform Audit & Remedial Action",
    icon: <SixIcon />,
  },
];

export interface data_Type {
  index?:number,
  title: string;
  para: string;
  description: string;
  href: string;
  name: string;
  imageSrc: string | StaticImageData;
  imageSrcAlt: string;
  image?: {
    src: string | StaticImageData;
    alt: string;
    title: string;
  }[];
}

export const data: data_Type[] = [
  {
    title: "Easy EMI OPTIONS",
    para: "Include Every Payment Method like here",
    description:
      "Our USP: Build your brand with the help of convenient EMI Options because one time payment is not a compulsion",
    href: "#",
    name: "Learn More about Easy EMI",
    imageSrc: Paymentmethod,
    imageSrcAlt: "Payment-Method",
  },
  {
    title: "Fielmente Making Global",
    para: "Empowered 60+ Clients Globally Now it's your turn ",
    description: "Countries Covered",
    href: "#",
    name: "View More",
    imageSrc: world,
    imageSrcAlt: "Fielmente Making Global",
    image: [
      {
        src: us,
        alt: "USA",
        title: "USA",
      },

      {
        src: uk,
        alt: "UK",
        title: "UK",
      },
      {
        src: canada,
        alt: "Canada",
        title: "Canada",
      },
      {
        src: india,
        alt: "India",
        title: "India",
      },
      {
        src: oman,
        alt: " Oman",
        title: "Oman",
      },
      {
        src: nepal,
        alt: "Nepal",
        title: "Nepal",
      },
    ],
  },
];

export interface ITestimonial {
  icon: React.JSX.Element;
  name: string;
  roll: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
}

export const testimonial: ITestimonial[] = [
  {
    icon: <Yellowquets />,
    name: "Atinder Bajwa",
    roll: "Operations Manager at Aaoji Restaurant and Cafe",
    description:
      "We have used Fielmente for all our marketing and advertising needs since December 2021. It has been a very professional and smooth experience. They listen to our needs carefully and then plan accordingly. They also provide guidance and business knowledge to staff. Whether be it SEO, SEM or day to day advertisements, Fielmente provide a professinal service to your needs. Highly recommended.",
    image: user1,
    alt: "Atinder Bajwa",
  },
  {
    icon: <Yellowquets />,
    name: "Donald Wingell CFBE",
    roll: "CEO at Wingell Hospitality Group Inc",
    description:
      "Great team to work with. Adaptive as Ottawa is a very unique market and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
    image: user2,
    alt: "Donald Wingell CFBE",
  },
  {
    icon: <Yellowquets />,
    name: "Sanga Naveen",
    roll: "FOUNDER at CHEF BASKIT",
    description:
      "I have been working with FIELMENTE HOSPITALITY for only a few short time ,however not only have they been handling my all social media optimization, SEO for me , my website response has given me great marketing advice which has made a difference in my onlion conversions,they implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion.i was very happy thus for ,that i felt comfortable to have them redesign my SMM which is a huge improvement",
    image: user3,
    alt: "Sanga Naveen",
  },
  {
    icon: <Yellowquets />,
    name: "Atinder Bajwa",
    roll: "Operations Manager at Aaoji Restaurant and Cafe",
    description:
      "We have used Fielmente for all our marketing and advertising needs since December 2021. It has been a very professional and smooth experience. They listen to our needs carefully and then plan accordingly. They also provide guidance and business knowledge to staff. Whether be it SEO, SEM or day to day advertisements, Fielmente provide a professinal service to your needs. Highly recommended.",
    image: user1,
    alt: "Atinder Bajwa",
  },
  {
    icon: <Yellowquets />,
    name: "Donald Wingell CFBE",
    roll: "CEO at Wingell Hospitality Group Inc",
    description:
      "Great team to work with. Adaptive as Ottawa is a very unique market and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
    image: user2,
    alt: "Donald Wingell CFBE",
  },
  {
    icon: <Yellowquets />,
    name: "Sanga Naveen",
    roll: "FOUNDER at CHEF BASKIT",
    description:
      "I have been working with FIELMENTE HOSPITALITY for only a few short time ,however not only have they been handling my all social media optimization, SEO for me , my website response has given me great marketing advice which has made a difference in my onlion conversions,they implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion.i was very happy thus for ,that i felt comfortable to have them redesign my SMM which is a huge improvement",
    image: user3,
    alt: "Sanga Naveen",
  },
];
