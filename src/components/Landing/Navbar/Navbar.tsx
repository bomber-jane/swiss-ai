"use client";
import React, { useState } from "react";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[70px] px-[24px] bg-[#3B3F67] relative">
      <div className="h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl">
          <span className="text-white tracking-wide">Swiss</span>
          <span className="text-[#28C76F] ml-1 font-extrabold">AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-4 items-center text-white">
            <li>
              <a
                href="#features"
                className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="items-center gap-4 group hidden md:flex">
          <div className="bg-[#28C76F] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
            <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
          </div>
          <div>
            <a href="#">
              <button className="bg-[#28C76F] text-white group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] font-semibold px-4 py-2 rounded-[20px] transition-colors duration-300">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#3B3F67] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="flex items-center font-bold text-2xl">
            <span className="text-white tracking-wide">Swiss</span>
            <span className="text-[#28C76F] ml-1 font-extrabold">AI</span>
          </div>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-white">
          <li>
            <a
              href="#"
              className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#28C76F] transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
          </li>
        </ul>

        <div className="items-center gap-4 group flex p-6">
          <div className="bg-[#28C76F] group-hover:bg-[#F4F6F9] rounded-full p-2 flex items-center justify-center transition-colors duration-300">
            <FaArrowRightLong className="text-white group-hover:text-[#3B3F67]" />
          </div>
          <div>
            <a href="#">
              <button className="bg-[#28C76F] text-white group-hover:bg-[#F4F6F9] group-hover:text-[#3B3F67] font-semibold px-4 py-2 rounded-[20px] transition-colors duration-300">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
