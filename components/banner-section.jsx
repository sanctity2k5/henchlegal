"use client";
import Image from "next/image";

function BannerSection({ image, title, subtitle, moTitle, MoSubtitle, buttonText, genericTitle }) {
  return (
    <div className="relative font-poppins z-0">
      <span className="z-0">
        <Image
          src={image}
          className="w-full h-[250px] md:h-[350px] xl:h-[600px] object-cover"
          alt="banner"
        />
      </span>
      <div className="absolute top-1/3 text-center text-white px-4 flex flex-col items-center w-full justify-center md:px-20 lg:px-40">
        {genericTitle && <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">{genericTitle}</h1>}
        <h3 className="hidden md:flex text-[20px] font-bold xl:text-[36px]">{subtitle}</h3>
        <h1 className="hidden md:flex md:text-[20px] mt-4 md:font-normal xl:text-[28px]">
          {title}
        </h1>
        <h1 className=" flex items-center justify-center text-4xl md:text-4xl w-full text-[36px] font-bold md:hidden">
          {moTitle}
        </h1>
        <h3 className="text-xl md:text-3xl md:hidden">
          {MoSubtitle}
        </h3>

        {buttonText && <button className="mt-4 p-2 rounded-lg bg-[#9a2002] font-medium md:w-32 xl:w-44 xl:text-[24px]">{buttonText}</button>}
      </div>
    </div>
  );
}

export default BannerSection;
