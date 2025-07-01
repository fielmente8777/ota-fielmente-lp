import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { OutLineMail, OutLinePhone } from "@/icons/icons";

const Header2 = () => {
  const navLinks = [
    {
      name: "sachin@fielmente.com",
      href: "mailto:sachin@fielmente.com",
      icon: <OutLineMail />,
    },
    {
      name: "+91 95018 68775",
      href: "tel:+91 9501868775",
      icon: <OutLinePhone />,
    },
  ];
  return (
    <header className="max_screen">
      <Container>
        <nav className="flex justify-between items-center md:py-4 py-2">
          <button className="relative h-[65px] aspect-[4/1.9]">
            <Image
              src="/images/logo.webp"
              alt="alt"
              priority={true}
              fill
              className="object-contain"
            />
          </button>
          <ul className="flex gap-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 ${index === 0? "text-[#363636]": "text-orange-primary group border border-orange-primary rounded-lg hover:bg-orange-primary hover:text-white"} text-lg poppins md:px-5 px-3 md:py-4 py-2`}
                >
                  <span className="sr-only">{link.name}</span>
                  <span className="text-orange-primary group-hover:text-white">{link.icon}</span>
                  <span className="md:block hidden">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header2;
