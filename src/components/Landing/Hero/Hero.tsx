import React from "react";
import Image from "next/image";
import botImage from "/mnt/data/ai-bot1.jpg"; // Update path as needed for your project structure
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-[#F4F6F9] pt-32 lg:pt-[250px] lg:pb-[250px] pb-[128px] flex items-center' id='home'">
      {/* Hero Text */}
      <div className="mycontainer">
        <div className="flex-col-reverse px-4 gap-14 lg:gap-16 lg:flex-row flex items-center justify-center">
          <div className="lg:flex-1 flex flex-col gap-7 items-center lg:items-start">
            <h1 className="text-3xl md:text-4xl text-center md:text-left md:text-[50px] font-bold text-[#3B3F67]">
              Welcome to Swiss AI
            </h1>
            <p className="text-lg md:text-[23px] text-[#2E2E2E] text-center md:text-left">
              Revolutionizing the way you trade with AI-powered insights and
              tools. Experience the future of trading today.
            </p>
            <div className="items-center gap-4 group flex">
              <div className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] rounded-full p-3 flex items-center justify-center transition-colors duration-300">
                <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block relative font-semibold  rounded-lg transition-transform duration-300 hover:scale-105"
                >
                  <button className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] text-white font-semibold py-3 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform active:translate-y-1 active:shadow-none">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:block  lg:flex-1">
            <div className="animate-bounce">
              <img src="/bot1.png" alt="AI Trading Bot" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
