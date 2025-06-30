"use client";
import { OurClientProps } from "@/@type/@type";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image, { StaticImageData } from "next/image";

import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";

const OurClients: React.FC<OurClientProps> = ({ clients, subTitle, title }) => {
  return (
    <Section className="bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h2 className="bg-[#FFE7DE] text-blue-dark text-sm rounded-full px-4 w-fit mx-auto py-2 poppins">
          {title}
        </h2>

        <h3 className="md:text-[2.5rem]/[3rem] text-2xl font-semibold text-blue-dark poppins">
          {subTitle}
        </h3>
      </div>

      {/* upper line gradient */}

      <div className="mt-10 space-y-4 bg-white">
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
        <Container>
          <div className="demo">
            <SwiperCarousel
              data={clients || []}
              speed={5000}
              loop={true}
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={2}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 6,
                  spaceBetween: 24,
                },
              }}
              renderSlide={(item, index) => (
                <div key={index} className="w-full relative aspect-[4/2.5]">
                  <Image
                    src={item?.src}
                    alt={item?.alt}
                    className="object-contain p-2 rounded-lg"
                    sizes="100%"
                    style={{ backgroundColor: item?.className }}
                    fill
                  />
                  {/* <div className="absolute inset-0 z-50 text-black  text-xl font-bold flex items-center justify-center ">
                      {item?.alt}
                    </div> */}
                </div>
              )}
            />
          </div>
        </Container>

        {/* lower line gradient */}
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
      </div>
    </Section>
  );
};

export default OurClients;
