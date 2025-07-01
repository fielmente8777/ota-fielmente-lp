"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import { countries } from "@/utils/countryCode";
import { FillUser, FillPhone, FillMail, FillMessage } from '@/icons/icons';

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (name === "userEmail" && errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (name === "userPhone" && errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData(prev => ({ ...prev, userPhone: value }));
      setErrors(prev => ({
        ...prev,
        phone: value.length < 10 ? "Please enter a valid number" : ""
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!emailRegex.test(formData.userEmail)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.userPhone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        {
          email: formData.userEmail,
          name: formData.userName,
          phone: `${countryCode}${formData.userPhone}`,
          message: formData.userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // Reset form
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
          userPhone: "",
        });
        setCountryCode("+91");
        window.open("/thank-you/", "_blank");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      id: "userName",
      type: "text",
      placeholder: "Your Name*",
      value: formData.userName,
      onChange: handleChange,
    },
    {
      id: "phone",
      customContent: (
        <div className="flex gap-2 text-lg divide-x divide-[#D7D7D7]">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-transparent ps-2 w-fit text-[#333333] focus:outline-none"
            style={{ inlineSize: `${countryCode.length + 6.5}ch` }}
            aria-label="Country Code"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100 p-0"
              >
                {`${country.code}${country.name}`}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="userPhone"
            name="userPhone"
            max={"9999999999"}
            placeholder="Your Phone*"
            value={formData.userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent py-4 ps-2 placeholder:text-black-primary text-black no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      id: "userEmail",
      type: "email",
      placeholder: "Your Email*",
      value: formData.userEmail,
      onChange: handleChange,
    },
    {
      id: "userMessage",
      type: "textarea",
      placeholder: "Your Message*",
      value: formData.userMessage,
      onChange: handleChange,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-md:p-4 px-4 py-6  rounded-xl w-full bg-[#FFFFFF]"
      noValidate
    >
      <h2 className="text-2xl  font-semibold text-blue-dark">
        Get A FREE Consultation!
      </h2>

      {formFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1">
          <div className="flex gap-2 text-gray-primary border bg-white border-[#D7D7D7] rounded-lg">
            {field.customContent ? (
              field.customContent
            ) : field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                required
                rows={3}
                className="w-full bg-transparent no-spinner p-4 resize-none focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary"
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                name={field.id}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                required
                className="w-full bg-transparent no-spinner p-4 focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary"
              />
            )}
          </div>
          {errors[field.id as keyof typeof errors] && (
            <p className="text-sm text-red-500 mt-2">
              {errors[field.id as keyof typeof errors]}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-center bg-orange-primary text-white justify-center border-orange-primary text-xl px-8 py-2 font-semibold rounded-md hover:bg-white hover:text-orange-primary duration-300 active:scale-75 hover:scale-105 border border-blue-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;