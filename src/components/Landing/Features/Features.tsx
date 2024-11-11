import React from "react";
import { FaChartLine, FaShieldAlt, FaRobot, FaBolt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#3B3F67] pt-[30px] pb-[120px]" id="features">
      <div className="mycontainer">
        <div className="px-4">
            
          <h2 className="text-center text-2xl md:text-3xl md:text-4xl font-bold text-[#28C76F] mb-12">
            Why Choose Swiss AI?
          </h2>

          <div className="md:mt-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#28C76F] text-4xl mb-4 flex justify-center">
                <FaChartLine />
              </div>
              <h3 className="text-[16px] font-semibold text-[#3B3F67] mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-[#2E2E2E]">
                Stay ahead of the market with real-time data analytics that
                provide actionable insights.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#28C76F] text-4xl mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-[16px] font-semibold text-[#3B3F67] mb-2">
                Advanced Security
              </h3>
              <p className="text-[#2E2E2E]">
                Your data and trades are protected with cutting-edge security
                protocols and encryption.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#28C76F] text-4xl mb-4 flex justify-center">
                <FaRobot />
              </div>
              <h3 className="text-[16px] font-semibold text-[#3B3F67] mb-2">
                AI-Powered Decisions
              </h3>
              <p className="text-[#2E2E2E]">
                Let AI handle complex trading strategies and make informed
                decisions on your behalf.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#28C76F] text-4xl mb-4 flex justify-center">
                <FaBolt />
              </div>
              <h3 className="text-[16px] font-semibold text-[#3B3F67] mb-2">
                Lightning-Fast Execution
              </h3>
              <p className="text-[#2E2E2E]">
                Execute trades instantly with minimal latency to capture market
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
