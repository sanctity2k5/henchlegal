import Image from 'next/image';
import React from 'react';
import logo from "@/public/logo/logo-white-nobg.png";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='bg-[#9a2002] flex flex-col items-center mt-4'>
        <Image src={logo} className='w-28 h-28 mt-4 xl:w-40 xl:h-40' alt='logo' />
        <h1 className='text-[25px] text-center text-white font-semibold -mt-2 mb-4 xl:text-[40px]'>Justice is our expertise, your rights are our mission.</h1>
        <nav>
            <ul className='flex gap-6 text-white xl:text-[30px] xl:gap-8'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Services</li>
            </ul>
            <div className='flex gap-2 justify-center w-full mt-4'>
            <PiFacebookLogo className='xl:w-20 xl:h-20' style={{  color:'white', padding:'10px', borderRadius:'999px' }} />
      <PiTwitterLogoFill className='xl:w-20 xl:h-20' style={{  color:'white', padding:'10px', borderRadius:'999px' }} />
      <PiInstagramLogoThin className='xl:w-20 xl:h-20' style={{  color:'white', padding:'10px', borderRadius:'999px' }} />
      <RiMailLine className='xl:w-20 xl:h-20' style={{  color:'white', padding:'10px', borderRadius:'999px' }} />

            </div>

            <ul className='flex gap-2 text-[12px] justify-center w-full text-white mb-4 xl:mt-6'>
                <li>Disclaimer</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </nav>
        <p className='text-[12px] text-white mb-4'>copyrights © 2023. A-Team Tech</p>
    </div>
  )
}

export default Footer;