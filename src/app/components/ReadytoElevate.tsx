"use client";
import Section from "@/app/components/Section";
import { countries } from "@/utils/countryCode";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
        router.push("/thank-you");
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
    <Section className="lg:pt-10 lg:pb-20" id="ScheduleCall">
      <div className="max-w-[1150px] mx-auto lg:px-0 px-10">
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
                  placeholder="Pranav"
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
                  placeholder="k&khotels@gmail.com"
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
                  placeholder="K&K Hotels"
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
