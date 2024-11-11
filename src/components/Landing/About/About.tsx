import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-[#F4F6F9] py-16">
      <div className="mycontainer">
        <div className="px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#3B3F67] mb-8">
            About Swiss AI
          </h2>

          <div className="mt-[90px] md:mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Image or Illustration */}
            <div className="md:w-1/2 animate-bounce">
              <img
                src="botm.png" // Replace with the actual image path
                alt="About Swiss AI"
              />
            </div>

            {/* Right Side: About Content */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <p className="text-lg text-[#2E2E2E]">
                Swiss AI is revolutionizing the trading industry by integrating
                advanced artificial intelligence with user-friendly tools for
                traders at all levels. Our platform empowers users with
                real-time analytics, AI-driven decisions, and enhanced security
                features.
              </p>
              <p className="text-lg text-[#2E2E2E]">
                Founded by industry experts, Swiss AI&apos;s mission is to make
                trading more accessible, reliable, and insightful. We are
                committed to providing the best tools and insights to help our
                users achieve success in the fast-paced world of trading.
              </p>
              <div className="items-center gap-4 group flex justify-center md:justify-start">
                <div className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
                  <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block relative font-semibold  rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <button className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] text-white font-semibold py-2 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform active:translate-y-1 active:shadow-none">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
