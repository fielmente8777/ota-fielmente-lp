"use client";
import Section from "@/app/components/Section";
import { countries } from "@/utils/countryCode";
import { useState } from "react";

const ReadytoElevate = () => {
  const host = ""; //********update this
  const [fullName, setFullName] = useState("");

  const [countryCode, setCountryCode] = useState("+91");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [hotelName, setHotelName] = useState("");

  const [location, setLocation] = useState("");

  const [numberOfProperties, setNoOfProperties] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      fullName: fullName,

      Number: phone,

      Email: email,

      Business_Name: hotelName,

      location: location,

      numberOfProperties: numberOfProperties,

      countryCode: countryCode,
    };

    setFullName("");

    setHotelName("");

    setEmail("");

    setPhone("");

    setLocation("");

    setNoOfProperties("");

    setCountryCode("+91");

    try {
      const response = await fetch(host, {
        method: "POST",

        headers: {
          Accept: "application/json, text/plain, */*",

          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.log("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log("Error:", error);

      console.log("An error occurred. Please try again later.");
    }
  };

  const getShortCountryName = (name: string) => {
    return name.slice(0, 2).toUpperCase();
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
            <form className="flex flex-col gap-4 p-6 border border-blue-sky rounded-2xl shadow-xl max-w-5xl">
              <div>
                <label
                  htmlFor="name"
                  className="text-blue-sky text-xl font-medium"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Pranav"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full outline-none focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="Phone"
                  className="text-blue-sky text-xl font-medium"
                >
                  Phone
                </label>
                <div className="flex gap-2">
                  <div>
                    <select
                      id="country"
                      required
                      name="country"
                      //   value={countryCode}
                      //   onChange={(e) => setCountryCode(e.target.value)}
                      className="flex w-40 gap-1 justify-between px-2 py-4 text-xl focus:outline-none leading-5 bg-gray-200 rounded-lg text-[#333333] "
                    >
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          value={country.code}
                          className="text-black bg-gray-200"
                        >
                          {`${getShortCountryName(country.name)}(${
                            country.code
                          })`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="number"
                    id="Phone"
                    pattern="[0-9]*"
                    placeholder="99999-99999"
                    value={phone}
                    className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] no-spinner text-black bg-[#E8E8E8] w-full focus:outline-none"
                    onChange={(e) => {
                      const enteredValue = e.target.value.replace(/\D/g, "");
                      const truncatedValue = enteredValue.slice(0, 10);
                      setPhone(truncatedValue);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="text-blue-sky text-xl font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="k&khotels@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="Hotel-Name"
                  className="text-blue-sky text-xl font-medium"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="Hotel-Name"
                  placeholder="K&K Hotels"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="Location"
                  className="text-blue-sky text-xl font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="Location"
                  placeholder="Chandigarh"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded-md px-5 py-2 text-xl placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="properties"
                  className="text-blue-sky text-xl font-medium"
                >
                  Number of properties
                </label>
                <input
                  id="properties"
                  type="number"
                  placeholder="10"
                  value={numberOfProperties}
                  onChange={(e) => setNoOfProperties(e.target.value)}
                  className="rounded-md px-5 py-2 text-xl no-spinner placeholder:text-[#5E5E5E40] text-black bg-[#E8E8E8] w-full focus:outline-none"
                />
              </div>
              <div>
                <button
                  className="inline-flex items-center text-xl mt-3 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-dark rounded-lg w-full hover:bg-blue-dark/70 transition-colors duration-300 ease-in-out
                "
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
