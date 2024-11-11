"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="bg-[#F4F6F9] py-16">
      <div className="mycontainer">
        <div className="px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#3B3F67] mb-12">
            What Our Users Are Saying
          </h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper bg-transparent"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg">
                <FaQuoteLeft className="text-[#28C76F] text-3xl mb-4" />
                <p className="text-[#2E2E2E] mb-4">
                  “Swiss AI has completely transformed my trading experience.
                  The real-time insights are invaluable, and the AI-driven
                  decisions are spot on!”
                </p>
                <h4 className="font-semibold text-[#3B3F67]">John D.</h4>
                <p className="text-[#2E2E2E] text-sm">Professional Trader</p>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg">
                <FaQuoteLeft className="text-[#28C76F] text-3xl mb-4" />
                <p className="text-[#2E2E2E] mb-4">
                  “The security and support from Swiss AI make it a no-brainer
                  for any serious trader. I feel confident and secure with every
                  trade.”
                </p>
                <h4 className="font-semibold text-[#3B3F67]">Sarah K.</h4>
                <p className="text-[#2E2E2E] text-sm">
                  Entrepreneur & Investor
                </p>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg">
                <FaQuoteLeft className="text-[#28C76F] text-3xl mb-4" />
                <p className="text-[#2E2E2E] mb-4">
                  “Swiss AI’s analytics are top-notch. I love how it simplifies
                  data into actionable insights. Highly recommended for all
                  levels of traders!”
                </p>
                <h4 className="font-semibold text-[#3B3F67]">Michael P.</h4>
                <p className="text-[#2E2E2E] text-sm">Data Analyst</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
