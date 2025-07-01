"use client";
import { OtaAddType } from "@/@type/@type";
import { PopupForm } from "@/components";
import SectionWithContainer from "@/components/SectionWithContainer";
import { useState } from "react";

const OtaAdd: React.FC<OtaAddType> = ({ title, subTitle, links }) => {
  const [show, setShow] = useState(false);
  return (
    <SectionWithContainer sectionClassName="bg-[#F5F5F5] !pt-0">
      <div className="w-full max-w-lg mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-[40px]/[48px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-dark to-orange-primary">
          {title}
        </h2>
        <p className="text-lg text-[#6F6F6F]">{subTitle}</p>
        <div className="flex w-full items-center justify-center gap-4 relative after:absolute md:after:w-[55px] after:w-[40px] md:after:h-[72px] after:h-[60px] after:bg-[url('/bg.png')] after:bg-contain after:bg-no-repeat  md:after:top-[-55%] after:top-[-65%] md:after:left-[13.5%] after:-left-1">
          {links.map((item, index) => (
            <button
              onClick={() => setShow(true)}
              key={index}
              className="flex items-center gap-2 bg-orange-primary text-white text-lg md:py-4 py-3 px-6 rounded-lg w-fit hover:bg-white hover:text-orange-primary border border-orange-primary hover:scale-x-95 transition-all duration-300 ease-in-out active:scale-100"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
     {show && <PopupForm setShowModal={setShow} showModal={show}/>}
    </SectionWithContainer>
  );
};

export default OtaAdd;
