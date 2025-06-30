"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Header2 from './Header2';

const Navbar = () => {
  const pathName = usePathname();

  if (pathName.includes("/thank-you")) return null;

  if (pathName === "/") {
    return <Header />;
  } else {
    return <Header2 />;
  }
}

export default Navbar;