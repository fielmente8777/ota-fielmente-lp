"use client";

import { usePathname } from "next/navigation";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("/thank-you")) return null;
  if (pathName === "/") {
    return <Footer1 />;
  } else {
    return <Footer2 />;
  }
};

export default Footer;
