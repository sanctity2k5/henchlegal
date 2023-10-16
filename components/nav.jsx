"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/logo/logo-white-nobg.png";
import logoRed from "@/public/logo/logo-red-nobg.png";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { RiMailLine } from "react-icons/ri";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#9a2002] p-4 sm:px-20">
      <div className="flex items-center justify-between lg:px-20">
        <div className="">
          <Image
            src={logoWhite}
            className=" w-12 h-12 md:w-16 md:h-20 px-0 py-0"
            alt="logo"
          />
        </div>
        <button
          className="md:hidden text-white z-1 relative"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-5 text-[20px]">
          <Link href="/" className="relative group inline-block">
            <span className="text-white group-hover:text-[22px] transition-colors">
              Home
            </span>
            <span className="absolute w-full h-1 top-8 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/About" className="relative group inline-block">
            <span className="text-white group-hover:text-[22px] transition-colors">
              About Us
            </span>
            <span className="absolute w-full h-1 top-8 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/Contact" className="relative group inline-block">
            <span className="text-white group-hover:text-[22px] transition-colors">
              Contact Us
            </span>
            <span className="absolute w-full h-1 top-8 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/Services" className="relative group inline-block">
            <span className="text-white group-hover:text-[22px] transition-colors">
              Services
            </span>
            <span className="absolute w-full h-1 top-8 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } w-screen z-1`}
      >
        <ul className="bg-white flex flex-col items-start px-0 w-screen h-screen absolute left-0 -top-1 z-10">
          <button
            className="flex justify-between items-center w-full h-10 mt-5 mb-2"
            onClick={toggleMobileMenu}
          >
            <Image src={logoRed} className="w-32 h-28 pl-2" alt="logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <hr className="w-full" />
          <li className="w-full">
            <Link
              href="/"
              className="block text-[#666666] py-2 px-4 mt-4 active:text-white active:w-[90%] -ml-2 active:bg-[#9a2002] active:rounded-lg focus:bg-[#9a2002] focus:rounded-lg focus:w-[90%] focus:text-white"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/About"
              className="block text-[#666666] py-2 px-4 active:text-white active:w-[90%] -ml-2 active:bg-[#9a2002] active:rounded-lg focus:bg-[#9a2002] focus:rounded-lg focus:w-[90%] focus:text-white"
            >
              About Us
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/Contact"
              className="block text-[#666666] py-2 px-4 active:text-white active:w-[90%] -ml-2 active:bg-[#9a2002] active:rounded-lg focus:bg-[#9a2002] focus:rounded-lg focus:w-[90%] focus:text-white"
            >
              Contact Us
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/Services"
              className="block text-[#666666] py-2 px-4 active:text-white active:w-[90%] -ml-2 active:bg-[#9a2002] active:rounded-lg focus:bg-[#9a2002] focus:rounded-lg focus:w-[90%] focus:text-white"
            >
              Services
            </Link>
          </li>

          <hr className="w-full mt-10" />
          <h1 className="text-black text-center w-full text-[24px] mt-2">
            Reach out on:
          </h1>
          <div className="flex gap-2 items-center justify-center w-full">
            <PiFacebookLogo
              className="w-16 h-16"
              style={{ color: "blue", padding: "10px", borderRadius: "999px" }}
            />
            <PiTwitterLogoFill
              className="w-16 h-16"
              style={{
                color: "skyblue",
                padding: "10px",
                borderRadius: "999px",
              }}
            />
            <PiWhatsappLogoLight
              className="w-16 h-16"
              style={{ color: "green", padding: "10px", borderRadius: "999px" }}
            />
            <RiMailLine
              className="w-16 h-16"
              style={{ color: "red", padding: "10px", borderRadius: "999px" }}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
