// components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3B3F67] text-[#F5F5F5] py-10">
      <div className="mycontainer">
        <div className="px-4 border-t border-[#28C76F] pt-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center font-bold text-2xl">
                <span className="text-white tracking-wide">Swiss</span>
                <span className="text-[#28C76F] ml-1 font-extrabold">AI</span>
              </div>
              <p className="text-sm leading-relaxed">
                Swiss AI offers cutting-edge solutions for AI-driven trading,
                empowering traders with insightful analytics and market
                precision.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-[#F5841F]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#F5841F]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-[#F5841F]">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#F5841F]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F5841F]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info & Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-sm leading-relaxed">
                Email: support@swissai.com <br />
                Phone: +41 22 123 4567
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[#F5841F] hover:text-[#FFF]"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-[#F5841F] hover:text-[#FFF]"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-[#F5841F] hover:text-[#FFF]"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom: Divider & Copyright */}
          <div className="border-t border-[#28C76F] mt-10 pt-4">
            <p className="text-center text-xs">
              &copy; 2024 Swiss AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
