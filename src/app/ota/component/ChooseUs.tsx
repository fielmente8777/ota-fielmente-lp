"use client";
import { ChooseUsType } from "@/@type/@type";
import { ChooseUsCard, SwiperCarousel } from "@/components";
import SectionWithContainer from "@/components/SectionWithContainer";
import { Autoplay, Pagination } from "swiper/modules";

const ChooseUs: React.FC<ChooseUsType> = ({ title, subTitle, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#FFF]">
      <div className="flex flex-col items-center md:gap-8 gap-4">
        <div className="md:max-w-[44rem] w-full mx-auto text-center space-y-2 poppins">
          <h2 className="bg-[#FFE7DE] uppercase text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
            {title}
          </h2>

          <h3
            className="md:text-[2.5rem]/[3rem] text-2xl font-medium text-blue-dark"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </div>
        <div className="lg:grid hidden grid-cols-3 md:gap-6">
          {cards.map((item, index) => (
            <ChooseUsCard key={index} {...item} index={index} />
          ))}
        </div>
        <div className="w-full space-y-6 lg:hidden block">
          <SwiperCarousel
            data={cards}
            speed={2000}
            className=""
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".choose-pagination",
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            }}
            renderSlide={(item, index) => (
              <ChooseUsCard key={index} {...item} index={index} />
            )}
          />
          <div className="choose-pagination flex items-center justify-center"></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ChooseUs;
