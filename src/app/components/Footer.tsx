"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo2.png";
import { useState } from "react";

import Section from "./Section";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import PopupForm from "./PopupForm";
import { FillFacebook, FillInstagram, FillLinkedin, FillTwitter, Google, TrustPiolet } from "@/icons/icons";
import Container from "./Container";

const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [formRes, setFormRes] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    try {
      setLoader(true);
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        {
          email: userEmail,
          name: userName,
          phone: `${userPhone}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setLoader(false);
        // // setPopupMsg("You information has been Received");
        router.push(`/thank-you/`);
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserPhone("");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };
  // const handleNewsletter = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const data = {
  //     // Domain: "abhijeet",
  //     Domain: "fielmente",
  //     email: email,
  //   };
  //   try {
  //     const response = await fetch(host, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setName("");
  //   setEmail("");
  // };
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
    // {
    //   title: "Blogs",
    //   link: "#",
    // },
    {
      title: "case studies",
      link: "#",
    },
  ];
  const services = [
    {
      title: "Website Development",
      link: "#services",
    },
    {
      title: "Social Media Marketing",
      link: "#services",
    },
    {
      title: "Search Engine Optimization",
      link: "#services",
    },
    {
      title: "Paid ad campaigns",
      link: "#services",
    },
  ];
  const contactLinks = [
    {
      title: "Call: +91 95018 68777",
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
    <footer className="pb-12 bg-blue-dark mx-auto mt-10 lg:mt-20">
      <section
        className="lg:py-11 max-md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/images/footer-bg.webp')]"
        style={{ backgroundSize: "100% 95%" }}
      >
        <Container>
          <div className="flex flex-col items-start gap-10">
            <div className="h-[7.625rem] relative aspect-[4/1.95]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
            <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
              {/* About */}
              <div>
                <h2 className="text-3xl text-orange-primary font-bold mb-4">
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
                <h2 className="text-3xl text-orange-primary font-bold mb-4">
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
                <h2 className="text-3xl text-orange-primary font-bold mb-4">
                  Get in Touch
                </h2>
                <ul className="flex flex-col gap-5">
                  {contactLinks.map((item, index) => (
                    <li
                      className="text-[16px] text-[#787878] "
                      key={index}
                    >
                      {item.link ? (
                        <Link href={item.link}>{item.title}</Link>
                      ) : (
                        <p>{item.title}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h2 className="text-3xl text-orange-primary font-bold mb-4">
                  Newsletter
                </h2>
                <div className="flex flex-col gap-4">
                  <form className="flex flex-col gap-6 text-[#3B3B3B]" onSubmit={handleSubmit}>
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-4 text-[16px]"
                      type="text"
                      placeholder="Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-4 text-[16px]"
                      type="email"
                      placeholder="Email"
                      value={userEmail}
                      onChange={handleEmailChange}
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-4 no-spinners text-[16px]"
                      type="number"
                      placeholder="Phone Number"
                      value={userPhone}
                      onChange={handlePhoneChange}
                    />
                    <button
                      className="bg-orange-primary text-[16px] text-white rounded-sm hover:bg-white hover:text-orange-primary border border-solid border-orange-primary py-4 w-full flex items-center justify-center font-medium"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-[#787878]">
                    By submitting this form you are confirming that you have
                    read and agree to Fielmente
                    <span className="text-[#F2B203]">Terms</span> &
                    <span className="text-[#F2B203]">Privacy Policy</span>.
                  </p>
                </div>
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
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-orange-primary">
                  Follow Us:
                </h3>
                <ul className="flex  items-center gap-4">
                  {socialLinks.map((item, index) => (
                    <li key={index} className="max-md:p-2 lg:pe-2 lg:py-2">
                      {/* <span href={item.link} target="_blank" rel="noreferrer"> */}
                      {item.icon} <span className="sr-only">icon</span>
                      {/* </span> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="h-[1px] w-full bg-[#3B3B3B] mb-10"></div>
        <div className="flex items-center gap-3 justify-center w-full">
          <p className="text-[16px] text-[#787878] max-md:text-center">
            © {currentYear} Fielmente Marketing Agency. All Rights
            Reserved
          </p>
          {/* <div className="flex items-center gap-4">
            <span
              // href={"/"}
              className="text-sm text-[#787878] "
            >
              Terms
            </span>
            <span
              // href={"/"}
              className="text-sm text-[#787878] "
            >
              Privacy Policy
            </span>
          </div> */}
        </div>
      </Container>

      {/* <PopupForm setShowModal={setShowModal} showModal={showModal} /> */}

    </footer>
  );
};

export default Footer;

