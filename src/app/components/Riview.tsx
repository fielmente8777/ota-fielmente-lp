"use client";
import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper/modules";

import s1 from "../../../public/images/Review/Screenshot 2024-11-14 142706.png"
import s2 from "../../../public/images/Review/Screenshot 2024-11-14 211359.png"
import s3 from "../../../public/images/Review/Screenshot 2024-11-14 211453.png"
import s4 from "../../../public/images/Review/Screenshot 2024-11-14 211544.png"
import s5 from "../../../public/images/Review/Screenshot 2024-11-14 211627.png"
import Link from "next/link";
import Image from "next/image";
const Riview = () => {
    return (
        <Section className="lg:py-16">
            <Container>
                <h2 className="lg:text-5xl text-3xl font-semibold text-[#0A3A75] text-center lg:mb-16 mb-5">
                    Our Reviews
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                    loop={true}
                    speed={900}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        // 640: {
                        //     slidesPerView: 2,
                        //     spaceBetween: 20,
                        // },
                        // 768: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 40,
                        // },

                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {OtaImages.map((item, index) => (
                        <SwiperSlide key={index} className="p-5">
                            <Link
                                href={"/"}
                                className="relative w-full lg:aspect-[3/1.5] aspect-[4/4] md:h-[40rem] rounded-xl flex justify-center items-center   "
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
    )
}

export default Riview

const OtaImages = [
    {
        src: s1,
        alt: "make my trip",
    },
    {
        src: s2,
        alt: "clear trip",
    },
    {
        src: s3,
        alt: "clear trip",
    },
    {
        src: s4,
        alt: "clear trip",
    },
    {
        src: s5,
        alt: "clear trip",
    },

];
