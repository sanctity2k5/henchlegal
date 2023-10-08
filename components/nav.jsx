"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logoRed from "@/public/logo/logo-white-nobg.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#9a2002] p-4 sm:px-20">
      <div className="flex items-center justify-between md:px-20">
        <div className=""><Image src={logoRed} className=' w-12 h-16 md:w-16 md:h-20 px-0 py-0' alt="logo" /></div>
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
        <ul className={`hidden md:flex space-x-4`}>
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/About" className="text-white">About Us</a></li>
          <li><a href="/Contact" className="text-white">Contact Us</a></li>
          <li><a href="/Services" className="text-white">Services</a></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex justify-end z-1`}>
  <ul className="bg-white flex flex-col items-start w-60 h-80 absolute left-40 -top-2 z-10">
    <button className='flex justify-end items-end w-52 mt-6' onClick={toggleMobileMenu}>
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
    <li>
      <a href="/" className="block text-[#666666] py-2 px-4 hover:text-red-500">Home</a>
    </li>
    <li>
      <a href="/About" className="block text-[#666666] py-2 px-4 hover:text-red-500">About Us</a>
    </li>
    <li>
      <a href="/Contact" className="block text-[#666666] py-2 px-4 hover:text-red-500">Contact Us</a>
    </li>
    <li>
      <a href="/Services" className="block text-[#666666] py-2 px-4 hover:text-red-500">Services</a>
    </li>
  </ul>
</div>

    </nav>
  );
}

export default NavBar;
