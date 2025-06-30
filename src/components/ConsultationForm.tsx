"use client";
import Container from "./Container";
import Section from "./Section";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Form from "./Form";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

const ConsultationForm = () => {
  const pathName = usePathname();
  return (
    <Section className="bg-blue-dark md:py-10" id={"reviews"}>
      <Container>
        <div className="lg:grid grid-cols-3 gap-6 items-center" id="testimonials">
          <div className="col-span-2">

            <div className="text-white text-3xl">
              <h2>
                Client{" "}
                <b className="text-orange-primary lg:block inline">
                  Testimonials
                </b>
              </h2>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              speed={900}
              autoplay={{
                delay: 4000,
              }}
              pagination={{
                clickable: true,
                el: ".pagination",
              }}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="py-4">
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="pagination mt-10 flex justify-center items-center gap-1"></div> */}
          </div>
          <div className="" id="contactForm">
            <Form />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ConsultationForm;

const Card = ({
  src,
  alt,
  title,
  subtitle,
}: {
  src?: string | StaticImageData;
  alt?: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="rounded-3xl bg-[#F5F5F5]">
      <div className="flex flex-col gap-5 py-8 px-7">
        <div className="flex gap-4 items-center justify-betwee">
          <div className="flex gap-4 items-center">
            {/* <Image
              src={src}
              alt={alt}
              width={90}
              height={90}
              className="rounded-full border-8 border-white"
            /> */}
            <div className="flex flex-col gap-1">
              <h3 className="text-black font-semibold text-lg">{title}</h3>
              {/* <span className="text-sm">CEO</span> */}
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-black">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

interface cradData_type {
  src?: string | StaticImageData;
  alt?: string;
  title: string;
  subtitle: string;
}

const data: cradData_type[] = [
  {
    src: "/images/user.png",
    alt: "antinder bajwa",
    title: "Siddhi Vinayak Inn",
    subtitle: `Ezotel's services are very impressive and quick. In the beginning, we had some problems due to OYO with the listing of the property on MakeMyTrip. However, upon working with Ezotel, I was able to get my property live and bookable in only three working days! Thanks to Mr. Yadav for helping me. I highly recommend Ezotel for their smooth and fast services.`,
  },
  {
    src: "/images/user.png",
    alt: "Food Flatters",
    title: "Vythiri Tea Valley",
    subtitle: `We are Really happy with the service of Eazotel, especially Mr Alok Yadav from Eazotel has been a great help with the services that they provide . He is always helpful and very polite while communicating and Its been a pleasure to work with him. You can really count on them for the services that they provide.
Thank you`,
  },
  {
    src: "/images/user.png",
    alt: "naveen sanga",
    title: "ward wayanad",
    subtitle: `"We are truly impressed with Eazotel’s services, particularly the outstanding support from Mr. Alok Yadav. His friendly demeanor and willingness to assist have made our collaboration enjoyable. We can always trust Eazotel for dependable service. Thank you!".`,
  },
  {
    title: "Tino Frangline",
    subtitle: `Eazotel was an excellent choice for my organisation and team.
The ease of use, intuitive design and feature rich tools are absolutely top tier.`,
  },
  {
    title: "Unnati Stayinn",
    subtitle: `We are extremely satisfied with the services provided by Eazotel Technologies Pvt. Ltd. Their excellent customer service and 24/7 support have been invaluable to our business. Through their OTA listing, optimization, and revenue management services, we have seen significant growth in our revenue. Additionally, they have helped improve our ratings and rankings, making a notable impact on our online presence. We highly recommend Eazotel for their professionalism and expertise.`,
  },
  {
    title: "Abhishek Mishra",
    subtitle: `Amazing organisation & love to recommend 100%.`,
  },
  {
    title: "Jaya Lakshminarayanan",
    subtitle: `Thank you, Rajiv and team. It has been a great 3 days workshop. Though I thought it would be stressful when I started this, it was fun and interactive. I clearly understood where I stood and our business stood. From there to which direction I need to go and what strategies are needed so that the business is on the right track towards success.`,
  },
  {
    title: "Naveen kumar Sanga",
    subtitle: `I have been working with FIELMENTE HOSPITALITY for only a few short time ,however not only have they been handling my all social media optimization, SEO for me , my website response has given me great marketing advice which has made a difference in my onlion conversions,they implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion.i was very happy thus for ,that i felt comfortable to have them redesign my SMM which is a huge improvement`,
  },
  {
    title: "Donald Wingell CFBE",
    subtitle: `Great team to work with. Adaptive as Ottawa is a very unique market and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.`,
  },
  {
    title: "Atinder Bajwa",
    subtitle: `We have used Fielmente for all our marketing and advertising needs since December 2021. It has been a very professional and smooth experience. They listen to our needs carefully and then plan accordingly. They also provide guidance and business knowledge to staff. Whether be it SEO, SEM or day to day advertisements, Fielmente provide a professinal service to your needs. Highly recommended.`,
  },
];
