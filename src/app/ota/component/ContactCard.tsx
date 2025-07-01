"use client";
import { contactCardType } from "@/@type/@type";
import { PopupForm } from "@/components";
import SectionWithContainer from "@/components/SectionWithContainer";
import { useState } from "react";

const ContactCard: React.FC<contactCardType> = ({ title, lists, links }) => {
  const [show, setShow] = useState(false);
  return (
    <SectionWithContainer sectionClassName="bg-[#FFF]">
      <div className="w-full rounded-3xl bg-[#F5F5F5] border border-orange-primary box-shadow2 px-4">
        <div className="max-w-[65rem] mx-auto md:py-14 py-6">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-8">
            <div className="md:col-span-3 col-span-1 space-y-6">
              <h2
                className="text-blue-dark md:text-3xl text-2xl text-color"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <ul className="flex md:items-center max-md:flex-col gap-6">
                {lists.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="">{item.icon}</span>
                    <span className="text-lg text-blue-dark line-through">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 col-span-1 flex items-center md:justify-end">
              <button
                type="button"
                onClick={() => setShow(true)}
                className="flex items-center gap-4 bg-orange-primary text-white hover:bg-white hover:text-orange-primary border border-orange-primary hover:scale-95 transition-all duration-300 ease-in-out active:scale-100 text-lg md:py-4 py-3 px-6 rounded-lg w-fit"
              >
                {links[0].title}
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && <PopupForm setShowModal={setShow} showModal={show} />}
    </SectionWithContainer>
  );
};

export default ContactCard;
