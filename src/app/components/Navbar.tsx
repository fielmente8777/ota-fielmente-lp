"use client";
import Link from "next/link";
import Container from "@/app/components/Container";
import { CallOrangeIcon, MailIcon } from "@/icons/icons";
import Logo from "../../../public/images/logo2.png";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className={`${pathname === "/thank-you/" ? "py-10 ":"lg:pt-14 pt-10" } max-w-[1600px] mx-auto bg-blue-sky`}>
      <Container>
        <nav className="flex justify-between items-center">
          <div className="relative h-[81px] lg:mx-0 mx-auto aspect-[4/2.1]">
            <Image
              src={Logo}
              alt="alt"
              priority={true}
              fill
              className="object-contain"
            />
          </div>
          <ul className="lg:flex hidden gap-4 items-center">
            <li>
              <Link
                href={"mailto:info@fielmente.com"}
                className="flex items-center text-white text-lg md:px-5 px-3 md:py-4 py-2"
              >
                <span className="sr-only">mail icon</span>
                <MailIcon />
                info@fielmente.com
              </Link>
            </li>
            <li>
              <Link
                href={"tel:+919501868775"}
                className="flex items-center text-blue-sky hover:bg-blue-sky/10 hover:text-white bg-white transition duration-300 ease-in-out border border-white rounded-full text-lg button_box_shadow md:px-5 px-3 md:py-4 py-2"
              >
                <span className="sr-only">call icon</span>
                <CallOrangeIcon />
                +91 9501868775
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

