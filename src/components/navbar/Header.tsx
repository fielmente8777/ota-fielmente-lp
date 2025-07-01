"use client";
import Link from "next/link";
import Container from "@/components/Container";
import { CallOrangeIcon, MailIcon } from "@/icons/icons";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Header = () => {
   const pathname = usePathname();
  return (
    <header className={`${pathname === "/thank-you/" ? "py-10" : "pt-4"} max-w-[1600px] mx-auto bg-blue-sky`}>
      <Container>
        <nav className="flex justify-between items-center">
          <div className="relative h-[81px] lg:mx-0 mx-auto aspect-[4/2.1]">
            <Image
              src={"/images/logo2.png"}
              alt="alt"
              priority={true}
              fill
              className="object-contain"
            />
          </div>
          <ul className="lg:flex hidden gap-4 items-center">
            <li>
              <Link
                href={"mailto:sachin@fielmente.com"}
                className="flex items-center gap-1 text-white text-lg md:px-5 px-3 md:py-4 py-2"
              >
                <span className="sr-only">mail icon</span>
                <span><MailIcon /></span>
                sachin@fielmente.com
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
}

export default Header;