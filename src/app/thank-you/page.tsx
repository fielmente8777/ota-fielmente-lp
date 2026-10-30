import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Fielmente",
  description: "Thank you for contacting Fielmente. Our team will follow up on your enquiry.",
  alternates: { canonical: "https://ota.fielmente.com/thank-you/" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

import ThankUPopUp from "./ThankUPopUp";

const page = () => {
  return <ThankUPopUp />;
};

export default page;
