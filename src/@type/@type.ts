export interface ChooseUsType {
  title: string;
  subTitle: string;
  cards: {
    icon: JSX.Element;
    title: string;
    description: string;
    index?: number;
  }[];
}

export interface RevenueManagementServicesType {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    icon: JSX.Element;
  }[];
}

export interface contactCardType {
  title: string;
  lists: {
    icon: JSX.Element;
    title: string;
  }[];
  links: {
    title: string;
    href: string;
  }[];
}


export interface OurClientProps {
  title?: string;
  subTitle?: string;
  clients?: {
    src: string;
    alt: string;
    className?: string;
  }[];
}


export interface OtaAddType {
  title: string;
  subTitle: string;
  links: {
    title: string;
    href: string;
  }[];
}