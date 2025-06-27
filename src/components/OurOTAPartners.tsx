"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


const OurOTAPartners = () => {
  return (
    <Section className="lg:py-16">
      <Container>
        <h2 className="lg:text-5xl text-3xl font-semibold text-[#0A3A75] text-center lg:mb-16 mb-5">
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
          {[...OtaImages, ...OtaImages].map((item, index) => (
            <SwiperSlide key={index} className="p-5">
              <Link
                href={"/"}
                className="relative w-full lg:aspect-[3/1.5] aspect-[4/4] h-[8rem] rounded-xl flex justify-center items-center hover:shadow-lg shadow-slate-300 transition "
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
    src: "/images/landingPage4/makemytrip-logo.png",
    alt: "make my trip",
  },
  {
    src: "/images/landingPage4/cleartrip-logo.png",
    alt: "clear trip",
  },
  {
    src: "/images/landingPage4/airbnb-logo.png",
    alt: "airbnb",
  },
  {
    src: "/images/landingPage4/goibibo-logo.png",
    alt: "goibibo",
  },
  {
    src: "/images/landingPage4/agoda-logo.png",
    alt: "agoda",
  },
  {
    src: "/images/landingPage4/razorpay-logo.png",
    alt: "razorpay",
  },
];
