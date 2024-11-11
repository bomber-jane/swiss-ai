import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="bg-[#3B3F67] py-16">
      <div className="mycontainer">
        <div className="px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#28C76F] mb-12">
            Choose Your Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#3B3F67] mb-4">
                Basic
              </h3>
              <p className="text-[#2E2E2E] mb-6">
                Perfect for beginners starting their AI trading journey.
              </p>
              <p className="text-4xl font-bold text-[#3B3F67] mb-4">
                $29<span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="text-[#2E2E2E] mb-6 space-y-2">
                <li>Real-time Market Data</li>
                <li>Basic Analytics</li>
                <li>Email Support</li>
              </ul>
              <div className="items-center gap-4 group flex justify-center">
                <div className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
                  <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block relative font-semibold  rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <button className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] text-white font-semibold py-2 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform active:translate-y-1 active:shadow-none">
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 transform scale-105">
              <h3 className="text-2xl font-semibold text-[#3B3F67] mb-4">
                Pro
              </h3>
              <p className="text-[#2E2E2E] mb-6">
                For traders ready to step up with advanced features.
              </p>
              <p className="text-4xl font-bold text-[#3B3F67] mb-4">
                $59<span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="text-[#2E2E2E] mb-6 space-y-2">
                <li>All Basic Features</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
              </ul>
              <div className="items-center gap-4 group flex justify-center">
                <div className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
                  <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block relative font-semibold  rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <button className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] text-white font-semibold py-2 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform active:translate-y-1 active:shadow-none">
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#3B3F67] mb-4">
                Premium
              </h3>
              <p className="text-[#2E2E2E] mb-6">
                For professionals needing complete AI-powered solutions.
              </p>
              <p className="text-4xl font-bold text-[#3B3F67] mb-4">
                $99<span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="text-[#2E2E2E] mb-6 space-y-2">
                <li>All Pro Features</li>
                <li>Custom Analytics</li>
                <li>24/7 Dedicated Support</li>
              </ul>
              <div className="items-center gap-4 group flex justify-center">
                <div className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
                  <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block relative font-semibold  rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <button className="bg-[#28C76F] group-hover:border-[#3B3F67] group-hover:border-[2px] group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] text-white font-semibold py-2 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform active:translate-y-1 active:shadow-none">
                      Get Started
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

export default Pricing;
