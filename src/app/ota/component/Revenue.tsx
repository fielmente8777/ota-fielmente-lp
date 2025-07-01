"use client";
import { PopupForm } from "@/components";
import SectionWithContainer from "@/components/SectionWithContainer";
import Image from "next/image";
import { useState } from "react";

interface RevenueProps {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  links: {
    title: string;
    href: string;
  }[];
}
const Revenue: React.FC<RevenueProps> = ({
  title,
  description,
  image,
  icon,
  links,
}) => {
  const [show, setShow] = useState(false);
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:py-14 py-10">
        <div className="relative w-full aspect-[4/3.5] md:block hidden">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="max-w-xl flex flex-col gap-6 w-full">
          <span className="max-md:mx-auto">{icon}</span>
          <h2 className="md:text-[2.5rem]/[3rem] text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-dark to-orange-primary max-md:text-center">
            {title}
          </h2>
          <div className="relative w-full aspect-[4/3.5] md:hidden">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
          <p className="md:text-lg text-[#6F6F6F]">{description}</p>
          <button
            onClick={() => setShow(true)}
            className="bg-orange-primary border border-orange-primary text-white text-lg md:py-4 py-3 px-6 rounded-lg w-fit hover:bg-white hover:text-orange-primary border border-orange-primary hover:scale-x-95 transition-all duration-300 ease-in-out active:scale-100"
          >
            {links[0].title}
          </button>
        </div>
      </div>
      {show && <PopupForm setShowModal={setShow} showModal={show} />}
    </SectionWithContainer>
  );
};

export default Revenue;
