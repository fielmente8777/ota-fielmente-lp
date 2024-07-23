"use client";
import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import React from "react";
import LinkBtn from "../landingpage2/component/LinkBtn";
import img1 from "../../../public/images/landingPage2/dgmarkitingagc.png";
import img2 from "../../../public/images/landingPage2/trustpilot.png";
import Image from "next/image";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import { testimonial } from "@/utils/cardData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { usePathname } from "next/navigation";

const Testimonial = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/landingpage2" && (
        <Section className="lg:py-10">
          <Container>
            <div className="bg-blue-dark rounded-2xl">
              <div className="flex lg:flex-row flex-col items-center justify-center rounded-2xl lg:px-0 px-4 bg-blue-dark gap-10 lg:gap-14 py-8 lg:py-12 max-w-4xl mx-auto">
                <div className="lg:flex items-center justify-center gap-10 ">
                  {img.map((item, index) => (
                    <div
                      className="flex items-center justify-center gap-10 mb-5"
                      key={index}
                    >
                      <Image src={item} alt="alt" width={280} height={133} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center lg:items-start items-center gap-3">
                  <h2 className="text-3xl lg:text-start text-center">
                    You can find out more reviews here
                  </h2>
                  <LinkBtn
                    href="#"
                    className="border border-white test-white text-lg px-10 py-3 w-max hover:bg-white rounded-full hover:text-blue-dark shadow-2xl"
                    name="View More"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}
      <Section className="lg:py-10">
        <Container>
          <div
            className={`${
              pathname === "/landingpage2"
                ? "justify-between"
                : "justify-center"
            } flex items-center py-8`}
          >
            <h2 className="text-[2rem] font-bold text-black">
              What our clients say about us
            </h2>
            {pathname === "/landingpage2" && (
              <div className=" flex items-center justify-center gap-5">
                <button className="px-4 py-1 prev-testimonial">
                  <PrevBtnIcon />
                </button>
                <button className="px-4 py-1 next-testimonial">
                  <NextBtnIcon />
                </button>
              </div>
            )}
          </div>
          <div>
            {/* <TestimonialSlider /> */}
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-testimonial",
                nextEl: ".next-testimonial",
              }}
              modules={[Autoplay, Navigation]}
              // slidesPerView={2}
              // spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {testimonial.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="p-8 flex flex-col gap-5 items-center justify-center border shadow-md">
                    {pathname === "/landingpage2" && <div>{item.icon}</div>}
                    <div className="mt-4 min-h-[30rem]">
                      <p className="text-center text-lg text-black ">
                        {item.description}
                      </p>
                    </div>
                    <hr className="w-full mt-8" />
                    <div className="flex items-center gap-5 min-h-[4rem]">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className=" text-xl font-medium text-black">
                          {item.name}
                        </h3>
                        <p className=" text-lg text-black">{item.roll}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Testimonial;

const img = [img1, img2];
