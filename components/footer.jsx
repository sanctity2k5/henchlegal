import Image from "next/image";
import React from "react";
import logo from "@/public/logo/logo-white-nobg.png";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#9a2002] flex flex-col items-center mt-4">
      <Image src={logo} className="w-20 h-20 mb-4 mt-4 xl:w-20 xl:h-20" alt="logo" />
      <nav>
        <div className="flex gap-6 text-white xl:text-[30px] xl:gap-8">
        <a href="/" className="relative group inline-block">
    <span className="text-white md:group-hover:text-[32px] transition-colors">Home</span>
    <span className="hidden md:flex absolute w-full h-1 top-11 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </a>
  <a href="/About" className="relative group inline-block">
    <span className="text-white md:group-hover:text-[32px] transition-colors">About Us</span>
    <span className="hidden md:flex absolute w-full h-1 top-11 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </a>
  <a href="/Contact" className="relative group inline-block">
    <span className="text-white md:group-hover:text-[32px] transition-colors">Contact Us</span>
    <span className="hidden md:flex absolute w-full h-1 top-11 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </a>
  <a href="/Services" className="relative group inline-block">
    <span className="text-white md:group-hover:text-[32px] transition-colors">Services</span>
    <span className="hidden md:flex absolute w-full h-1 top-11 left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </a>
        </div>
        <div className="flex gap-2 items-center justify-center w-full mt-2">
          <h1 className="hidden lg:flex text-white">Reach out on:</h1>
          <PiFacebookLogo
            className="xl:w-10 xl:h-10"
            style={{ color: "white", padding: "10px", borderRadius: "999px" }}
          />
          <PiTwitterLogoFill
            className="xl:w-10 xl:h-10"
            style={{ color: "white", padding: "10px", borderRadius: "999px" }}
          />
          <PiWhatsappLogoLight
            className="xl:w-10 xl:h-10"
            style={{ color: "white", padding: "10px", borderRadius: "999px" }}
          />
          <RiMailLine
            className="xl:w-10 xl:h-10"
            style={{ color: "white", padding: "10px", borderRadius: "999px" }}
          />
        </div>
        <hr className="w-full absolute left-0 mt-0" />

        <div className="flex gap-2 mt-2 text-[12px] justify-center w-full text-white mb-1 xl:mt-6">
          <a href="/Disclaimer" className="hover:underline">Disclaimer</a>
          <a href="/Privacy" className="hover:underline">Privacy Policy</a>
          <a href="/Terms" className="hover:underline">Terms and Conditions</a>
        </div>
      </nav>
      <p className="text-[12px] text-white mb-2">
        copyrights © 2023. A-Team Tech
      </p>
    </div>
  );
}

export default Footer;
