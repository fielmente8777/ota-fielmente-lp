"use client";
import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import makemytrip from "../../../public/images/landingPage4/makemytrip-logo.png";
import cleartrip from "../../../public/images/landingPage4/cleartrip-logo.png";
import goibibo from "../../../public/images/landingPage4/goibibo-logo.png";
import agoda from "../../../public/images/landingPage4/agoda-logo.png";
import razorpay from "../../../public/images/landingPage4/razorpay-logo.png";
import airbnb from "../../../public/images/landingPage4/airbnb-logo.png";


const OurOTAPartners = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <h2 className="lg:text-5xl text-3xl font-semibold text-[#0A3A75] text-center lg:mb-9 mb-5">
          Our OTA Partners
        </h2>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={2}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {OtaImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={"/"}
                  className="relative w-full lg:aspect-[3/1.9] aspect-[4/4] h-[15rem] rounded-md flex justify-center items-center"
                >
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    // width={100}
                    // height={100}
                    fill
                    priority={true}
                    className="object-contain w-full h-full rounded-md p-3 bg-white"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
      </Container>
    </Section>
  );
};

export default OurOTAPartners;

const OtaImages = [
  {
    src: makemytrip,
    alt: "make my trip",
  },
  {
    src: cleartrip,
    alt: "clear trip",
  },
  {
    src: airbnb,
    alt: "airbnb",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
  {
    src: agoda,
    alt: "agoda",
  },
  {
    src: razorpay,
    alt: "razorpay",
  },
  {
    src: makemytrip,
    alt: "make my trip",
  },
  {
    src: cleartrip,
    alt: "clear trip",
  },
  {
    src: airbnb,
    alt: "airbnb",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
  {
    src: agoda,
    alt: "agoda",
  },
  {
    src: razorpay,
    alt: "razorpay",
  }

]