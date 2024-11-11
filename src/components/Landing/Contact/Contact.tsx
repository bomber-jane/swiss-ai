import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F4F6F9] py-16">
      <div className="mycontainer">
        <div className="px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#3B3F67] mb-8">
            Get in Touch
          </h2>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Contact Information */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#3B3F67]">
                Contact Information
              </h3>
              <p className="text-lg text-[#2E2E2E]">
                Whether you have questions, need assistance, or just want to
                learn more about Swiss AI, we&apos;re here to help. Reach out to us
                through any of the methods below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[#28C76F]" />
                  <p className="text-[#2E2E2E]">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#28C76F]" />
                  <p className="text-[#2E2E2E]">support@swissai.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[#28C76F]" />
                  <p className="text-[#2E2E2E] text-left">
                    123 Swiss AI Street, Zurich, Switzerland
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-[#3B3F67] font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-[#F4F6F9] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28C76F]"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#3B3F67] font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-[#F4F6F9] border border-gray-300 rounded-lg focus:outline-none focus:border-[#28C76F]"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#3B3F67] font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-3 bg-[#F4F6F9] border border-gray-300 rounded-lg focus:outline-none focus:border-[#28C76F]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#28C76F] text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-[#4A90E2] hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
