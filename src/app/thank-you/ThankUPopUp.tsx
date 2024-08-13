"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import src from "../../../public/images/thank-u.webp";
const ThankUPopUp = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };
  return (
    <section className="">
      <div className="max-w-[1900px] mx-auto">
        <div className="relative w-full h-screen aspect-[16/9]">
          <Image
            src={src}
            alt="hospitality marketing"
            fill
            className="object-cover"
          />
          <div className="absolute flex flex-col lg:items-start px-5 md:p-24 lg:justify-start justify-center h-screen w-full lg:bg-[rgba(225,225,225,0.2)] bg-[rgba(0,0,0,0.5)]">
            <h1 className="text-5xl font-bold lg:text-white mb-4">
              Thank You!
            </h1>
            <p className="text-[24px] text-white/80 mb-8 leading-12  text-start">
              Your submission has been received.
              <br className="hidden lg:block" />
              We will get back to you shortly.
            </p>
            <button
              className="bg-blue-dark text-white py-3 px-6 text-2xl rounded-md hover:bg-blue-800 transition duration-200"
              onClick={redirectToHome}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankUPopUp;


