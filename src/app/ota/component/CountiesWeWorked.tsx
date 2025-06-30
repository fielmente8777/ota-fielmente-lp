"use client";
import { SwiperCarousel } from "@/components";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";

interface CountiesWeWorkedProps {
  title: string;
  subTitle: string;
  cards: {
    src: string;
    alt: string;
  }[];
}

const CountiesWeWorked = ({
  title,
  subTitle,
  cards: items,
}: CountiesWeWorkedProps) => {
  return (
    <Section className="bg-[#F5F5F5]">
      <div className="grid lg:grid-cols-11 grid-cols-1 items-center gap-1">
        <div className="lg:col-span-4 col-span-1 lg:rounded-r-[24px] md:rounded-none rounded-b-3xl bg-orange-primary md:py-12 md:px-9 max-md:p-8">
          <div className="max-w-[365px] space-y-4 poppins md:ml-auto">
            <h2 className="w-fit bg-[#FFE7DE] text-blue-dark px-2 rounded-full">
              {title}
            </h2>
            <h3 className="md:text-4xl text-2xl text-white">{subTitle}</h3>
          </div>
        </div>

        <div className="lg:col-span-7 col-span-1 md:px-32 px-6 md:py-11 py-6 md:w-full w-80 md:rounded-none rounded-b-2xl mx-auto bg-blue-dark">
          <SwiperCarousel
            data={items}
            speed={2000}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 48,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            loop={true}
            renderSlide={(item, index) => (
              <div key={index}>
                <div className="text-white">
                  <div className="relative w-full md:aspect-[4/2] aspect-[4/2.3]">
                    <Image
                      src={item?.src}
                      alt={item?.alt}
                      fill
                      className="rounded-lg"
                    />
                  </div>

                  <h3 className="text-center mt-2 poppins uppercase">
                    {item?.alt}
                  </h3>
                </div>
              </div>
            )}
            className="w-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default CountiesWeWorked;
