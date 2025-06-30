"use client";
import Link from "next/link";

import {
  FillFacebook,
  FillInstagram,
  FillLinkedin,
  FillTwitter,
  Google,
  TrustPiolet,
} from "@/icons/icons";
import Container from "../Container";
import PopupForm from "../PopupForm";
import { useState } from "react";

const Footer1 = () => {
    const currentYear = new Date().getFullYear();

  const [showModal, setShowModal] = useState(false);
  const aboutLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "reviews",
      link: "#reviews",
    },
  
    {
      title: "case studies",
      link: "#",
    },
  ];
  const services = [
    {
      title: "OTA Listing",
      link: "#services",
    },
    
    {
      title: "Online Reputation Management",
      link: "#services",
    },
    {
      title: "Search Engine Optimization",
      link: "#services",
    },
    {
      title: "Channel Optimization",
      link: "#services",
    },
  ];
  const contactLinks = [
    {
      title: "Call: +91 95018 68775",
      link: "tel:+919501868775",
    },
    {
      title: "Mail: Sachin@fielmente.com",
      link: "mailto:sachin@fielmente.com",
    },
    {
      title: "Contact",
      link: "#contactForm",
    },
    {
      title: "Free Consultation",
      link: "#contactForm",
    },
    {
      title: "Schedule A Demo",
      link: "#contactForm",
    },
  ];

  const socialLinks = [
    {
      icon: <FillFacebook />,
      link: "https://www.facebook.com/fielmentebusiness?mibextid=ViGcVu",
    },
    {
      icon: <FillTwitter />,
      link: "https://x.com/fieladvisors?lang=en",
    },
    {
      icon: <FillLinkedin />,
      link: "https://www.linkedin.com/company/fielmente",
    },
    {
      icon: <FillInstagram />,
      link: "https://www.instagram.com/fielmente_hospitality/?hl=en",
    },
  ];
  return (
    <footer className="pb-4 bg-blue-dark mx-auto mt-10 lg:mt-20">
      <section
        className="lg:py-11 max-md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/images/footer-bg.webp')]"
        style={{ backgroundSize: "100% 95%" }}
      >
        <Container>
          <div className="flex flex-col items-start gap-10">
            <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {/* About */}
              <div>
                <h2 className="text-2xl text-orange-primary font-semibold mb-4">
                  About
                </h2>
                <ul className="flex flex-col gap-5">
                  {aboutLinks.map((item, index) => (
                    <li
                      className="text-[16px] text-[#787878] capitalize"
                      key={index}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl text-orange-primary font-semibold mb-4">
                  Services
                </h2>
                <ul className="flex flex-col gap-5">
                  {services.map((item, index) => (
                    <li
                      className=" text-[#787878] capitalize text-[16px]"
                      key={index}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl text-orange-primary font-semibold mb-4">
                  Get in Touch
                </h2>
                <ul className="flex flex-col gap-5">
                  {contactLinks.map((item, index) => (
                    <li className="text-[16px] text-[#787878] " key={index}>
                      {item.link ? (
                        <Link href={item.link}>{item.title}</Link>
                      ) : (
                        <p>{item.title}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex max-md:flex-col gap-6 lg:items-center justify-between w-full lg:mt-4">
              <div className="flex items-center gap-5">
                <div className="">
                  <TrustPiolet />
                </div>
                <div className="">
                  <Google />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="h-[1px] w-full bg-[#3B3B3B] mb-4"></div>
        <div className="flex items-center gap-3 justify-center w-full">
          <p className="text-[16px] text-[#787878] max-md:text-center">
            © {currentYear} Fielmente Marketing Agency. All Rights Reserved
          </p>
        </div>
      </Container>
      <PopupForm setShowModal={setShowModal} showModal={showModal} />
    </footer>
  );
};

export default Footer1;