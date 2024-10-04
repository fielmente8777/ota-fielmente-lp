"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import popupimg from "../../../public/images/popup_img.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const PopupForm = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // useRef to store intervalId
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 60000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length > 10) {
      alert("Phone number should not exceed 10 digits.");
      setLoader(false);
      setFormRes(false);
      return;
    }

    try {
      setLoader(true);
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/e6KjRouX#generic-webhook`, //abhijeet
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        {
          // Domain: "fielmente",
          // Domain: "abhijeet",
          // email: userEmail,
          // Name: userName,
          // Contact: `${countryCode}${userPhone}`,
          // Description: userMessage,
          email: userEmail,
          name: userName,
          phone: `${userPhone}`,
          message: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setLoader(false);
        router.push("/thank-you");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };

  interface data_Type {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const form: data_Type[] = [
    {
      type: "text",
      placeholder: "Full Name",
      value: userName,
      onChange: (e) => setUserName(e.target.value),
    },
    {
      type: "email",
      placeholder: "Email",
      value: userEmail,
      onChange: (e) => setUserEmail(e.target.value),
    },
    {
      type: "number",
      placeholder: "Phone",
      value: userPhone,
      onChange: (e) => setUserPhone(e.target.value),
    },
  ];

  return (
    <>
      {showModal && (
        <section className="fixed w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50">
          <article className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-3 max-w-[400px] border shadow-2xl p-4 relative rounded-md bg-white">
              <button
                onClick={closeModal}
                className="absolute top-[-15px] right-[-15px] w-12 h-12 flex justify-center items-center text-lg rounded-full bg-red-500"
              >
                X
              </button>
              <div className="relative w-full h-[300px] aspect-[4/4]">
                <Image
                  src={popupimg}
                  alt="Hospitality Marketing"
                  fill
                  className="object-cover rounded-lg"
                  priority={true}
                />
              </div>
              <form
                className="flex flex-col gap-3 w-full px-2"
                onSubmit={submit}
              >
                {form.map((item, index) => (
                  <div className="px-2 py-3 border border-sky-400 rounded-lg" key={index}>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      value={item.value}
                      onChange={item.onChange}
                      required
                      className="w-full no-spinner rounded-lg outline-none focus:outline-none text-lg text-slate-800 placeholder:text-slate-500"
                    />
                  </div>
                ))}
                <div className="px-2 py-3 border border-sky-400 rounded-lg">
                  <textarea
                    placeholder="Message"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="w-full outline-none rounded-lg focus:outline-none text-lg resize-none text-slate-800 placeholder:text-slate-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-sky hover:bg-sky-800 transition w-full py-3 flex-auto flex justify-center items-center text-lg rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default PopupForm;
