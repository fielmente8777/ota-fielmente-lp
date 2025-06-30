"use client";
import {
  FillFacebook,
  FillInstagram,
  FillLinkedin,
  FillLocationIcon,
  FillMail,
  FillTwitter,
  OutLinePhone,
} from "@/icons/icons";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import PopupForm from "../PopupForm";
import { useState } from "react";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    {
      title: "Follow Us",
      links: [
        {
          title: "Facebook",
          href: "https://www.facebook.com/Fielmentemarketing/",
          icon: <FillFacebook />,
        },
        {
          title: "Twitter",
          href: "https://x.com/fieladvisors?lang=en",
          icon: <FillTwitter />,
        },
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/company/fielmente/",
          icon: <FillLinkedin />,
        },
        {
          title: "Instagram",
          href: "https://www.instagram.com/fielmente_hospitality/",
          icon: <FillInstagram />,
        },
      ],
    },
    {
      title: "Offices",
      links: [
        {
          title:
            "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122005",
          href: "#",
          icon: <FillLocationIcon />,
        },
        {
          title:
            "Ground Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304",
          href: "#",
          icon: <FillLocationIcon />,
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          title: "+91 95018 68775",
          href: "tel:+91 9501868775",
          icon: <OutLinePhone className="w-5 aspect-square" />,
        },
        {
          title: "Sachin@fielmente.com",
          href: "mailto:Sachin@fielmente.com",
          icon: <FillMail />,
        },
      ],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="bg-blue-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-7 md:py-14 py-6 justify-between">
          {links.map((item, index) => (
            <div key={index} className={`space-y-4 md:last:ml-auto`}>
              {index === 0 && (
                <div className="max-w-[116.13px] max-sm:mx-auto w-full md:aspect-[4/1.5] aspect-[3/1]  relative mb-8">
                  <Image src="/logo.png" alt="Fielmente" fill />
                </div>
              )}
              <h3 className={`text-white font-semibold text-2xl ${index === 0 ? "max-md:text-center" : ""}`}>
                {item.title}
              </h3>
              <ul
                className={`flex ${
                  index === 0 ? "flex-row gap-6 max-md:items-center max-md:justify-center" : "flex-col gap-4"
                }`}
              >
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-orange-primary flex  gap-2 text-base"
                    >
                      <span
                        className={
                          index === 0
                            ? "bg-orange-primary w-8 aspect-square flex items-center justify-center rounded-sm hover:bg-white hover:text-orange-primary hover:shadow-md transition duration-300 ease-in-out"
                            : "px-1 mt-px"
                        }
                      >
                        {link.icon}
                      </span>
                      {index === 0 ? (
                        <span className="sr-only">{link.title}</span>
                      ) : (
                        <span>{link.title}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="h-px w-full mx-auto max-w-[90rem] bg-gradient-to-r from-[#110D3C] via-[#FFFFFF] to-[#110D3C]" />
      <Container>
        <div className="w-full">
          <p className="py-4 text-center text-white">
            © {currentYear} Fielmente • All Rights Reserved
          </p>
        </div>
      </Container>
      <PopupForm setShowModal={setShowModal} showModal={showModal} />
    </footer>
  );
};

export default Footer2;
