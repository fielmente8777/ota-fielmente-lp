"use client";
import Section from "@/components/Section";
import { countries } from "@/utils/countryCode";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";

const ReadytoElevate = () => {
  const router = useRouter();

  const host = "https://nexon.eazotel.com/eazotel/addEazotelClientQuery"; //********update this

  const [formData, setFormData] = useState({
    fullName: "",
    // countryCode: "+91", // Defaulting to India's code
    countryCode: "+91", // Defaulting to India's code
    phone: "",
    email: "",
    hotelName: "",
    location: "",
    numberOfProperties: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value.replace(/\D/g, "");
    const truncatedValue = enteredValue.slice(0, 10);
    setFormData((prevData) => ({
      ...prevData,
      phone: truncatedValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      fullName,
      phone,
      email,
      hotelName,
      location,
      numberOfProperties,
      countryCode,
    } = formData;

    try {
      // const response = await axios.post(host, {
      //   fullName,
      //   Number: phone,
      //   Email: email,
      //   Business_Name: hotelName,
      //   location,
      //   numberOfProperties,
      //   countryCode,
      // });
      const response = await axios.post(
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/e6KjRouX#generic-webhook`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        {
          fullName,
          Number: phone,
          Email: email,
          Business_Name: hotelName,
          location,
          numberOfProperties,
          countryCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form submitted successfully!");
        router.push("/thank-you/");
        setFormData({
          fullName: "",
          countryCode: "+91", // Resetting to India's code
          phone: "",
          email: "",
          hotelName: "",
          location: "",
          numberOfProperties: "",
        });
      } else {
        console.log("An error occurred. Please try again later.");
        alert("An error. Please try again later");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Section className="lg:pt-10 lg:pb-20" id="reviews">
      <div className="max-w-[1150px] mx-auto lg:px-0 px-10" >
        <div className="lg:grid grid-cols-2 gap-4">
          <div>
            <h2 className="lg:text-5xl text-3xl text-black font-medium">
              Ready to Elevate your{" "}
              <span className="text-orange-primary">Hotel Business</span>
            </h2>
            <p className="text-black lg:text-3xl text-xl mb-5 font-medium mt-2">
              Join hands with{" "}
              <span className="text-orange-primary">Fielmente Now!</span>
            </p>
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
          </div>
          <div className="flex items-center lg:justify-end justify-center">
            <form
              className="flex flex-col gap-4 p-6 border border-blue-sky rounded-2xl shadow-xl max-w-5xl"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="text-blue-sky text-xl font-medium"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name*"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full outline-none focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-blue-sky text-xl font-medium"
                >
                  Phone
                </label>
                <div className="flex gap-2">
                  <div>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="flex justify-between text-center py-4 text-xl focus:outline-none bg-gray-200 rounded-lg text-[#333333]"
                      style={{
                        inlineSize: `${formData.countryCode.length + 2}ch`,
                      }}
                    >
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          value={country.code}
                          className="text-black bg-gray-200 p-0"
                        >
                          {`${country.code}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    required
                    placeholder="99999-99999"
                    value={formData.phone}
                    className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] no-spinner text-black bg-[#E8E8E8] w-full focus:outline-none"
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-blue-sky text-xl font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email*"
                  // placeholder="k&khotels@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="hotelName"
                  className="text-blue-sky text-xl font-medium"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  placeholder="Enter hotel name*"
                  // placeholder="K&K Hotels"
                  value={formData.hotelName}
                  required
                  onChange={handleChange}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              {/* <div>
                <label
                  htmlFor="location"
                  className="text-blue-sky text-xl font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Chandigarh"
                  value={formData.location}
                  onChange={handleChange}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div> */}
              {/* <div>
                <label
                  htmlFor="numberOfProperties"
                  className="text-blue-sky text-xl font-medium"
                >
                  Number of properties
                </label>
                <input
                  id="numberOfProperties"
                  name="numberOfProperties"
                  type="number"
                  placeholder="10"
                  value={formData.numberOfProperties}
                  onChange={handleChange}
                  className="rounded-md px-5 py-2 text-xl no-spinner placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div> */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center text-xl mt-3 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-dark rounded-lg w-full hover:bg-blue-dark/70 transition-colors duration-300 ease-in-out"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ReadytoElevate;

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
              <h3 className="text-black font-bold text-xl">{title}</h3>
              {/* <span className="text-sm">CEO</span> */}
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-black text-lg">{subtitle}</p>
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