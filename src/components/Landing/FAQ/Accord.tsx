import React from "react";

const Accord = () => {
  return (
    <div className="py-8 bg-[#3B3F67]" id="faq">
      <div className="mycontainer navConn">
        <div className="px-4">
          <div>
            <h2 className="text-center text-[#28C76F] text-[32px] lg:text-[64px] font-bold">
              FAQ
            </h2>

            <p className="text-center text-[#28C76F] text-[18px]">
              Here are some of our most frequently asked questions about Swiss AI.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium text-white">
                What is Swiss AI?
              </div>
              <div className="collapse-content text-white font-[400]">
                <p>
                  Swiss AI is an innovative platform focused on providing cutting-edge AI solutions tailored to businesses and individuals, aiming to simplify and optimize workflows with powerful machine learning and AI tools.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white">
                How does Swiss AI protect my data?
              </div>
              <div className="collapse-content text-white font-[400]">
                <p>
                  At Swiss AI, we prioritize the security and privacy of your data. We use robust encryption and follow industry-standard protocols to ensure that your data remains confidential and secure.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                How is Swiss AI different from other AI platforms?
              </div>
              <div className="collapse-content text-white font-[400]">
                <p>
                  Swiss AI is unique in its commitment to high customization and user-centric solutions. Our platform is designed to be flexible, allowing businesses to adapt AI technology to their specific needs and industry demands.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                What kind of support can I expect from Swiss AI?
              </div>
              <div className="collapse-content text-white font-[400]">
                <p>
                  Swiss AI offers dedicated support, including onboarding, integration assistance, and technical support. Our team is committed to helping you make the most of our AI platform to achieve your goals.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffffff0d] rounded-[10px]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-white ">
                Can Swiss AI solutions integrate with my existing systems?
              </div>
              <div className="collapse-content text-white font-[400]">
                <p>
                  Absolutely! Swiss AI is designed with flexibility in mind, allowing seamless integration with many existing business systems and software to enhance your current processes without disruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
