"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Section from "./Section";
import Container from "./Container";
interface Props {
  icon: string;
  number: string;
  title: string;
}
const MIleStonesNew = () => {
  const pathName = usePathname();
  const data: Props[] = [
    {
      icon: "/icon/hotelassociated.gif",
      number: "100+",
      title: `${pathName === "/resort/"
        ? "Resort"
        : pathName === "/hospitality/"
          ? "Hospitality"
          : pathName === "/landing-page/"
            ? "Hotel"
            : "Hospitality"} ASSOCIATED`,
    },
    {
      icon: "/icon/restaurantass.gif",
      number: "160+",
      title: "RESTAURANTS ASSOCIATED",
    },
    { icon: "/icon/countries.gif", number: "5+", title: "COUNTRIES PRESENCE" },
    {
      icon: "/icon/yearofexp.gif",
      number: "10+",
      title: "YEARS OF EXPERIENCE",
    },
  ];
  return (
    <Section className="bg-white lg:py-20 py-10">
      {/* <div className="mb-16">
        <h2 className="text-center md:text-4xl/[2.8rem] text-blue-dark text-[1.2rem]/[2rem] last-word md:w-[85%] mx-auto">
          Transforming{" "}
          {pathName === "/resort/"
            ? "Resort"
            : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/"
            ? "Hotel"
            : "hotel, resort & restaurants"}{" "}
          into thriving destinations with our expert {" "}
          <b>
            Hospitality Marketing Solutions &{" "}
            {pathName === "/resort/"
              ? "Resort"
              : pathName === "/hospitality/"
              ? "Hospitality"
              : pathName === "/landing-page/"
              ? "Hotel"
              : "hotel, resort & restaurants"}{" "}
            Marketing Agency.
          </b>
        </h2>
      </div> */}
      <Container>
        <div className="border border-[#F2B203] w-full px-10 py-4 lg:grid hidden grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={item.icon}
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-4 justify-center">
                <h3 className="text-blue-dark text-[2.5rem] font-semibold">
                  {item.number}
                </h3>
                <p className="text-blue-dark text-[1.2rem] uppercase">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#F2B203] w-full px-5 py-4 lg:hidden ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
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
            }}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-[100px] h-[100px] relative">
                    <Image
                      src={item.icon}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 justify-center">
                    <h3 className="text-blue-dark text-4xl font-semibold">
                      {item.number}
                    </h3>
                    <p className="text-blue-dark text-base uppercase">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default MIleStonesNew;
