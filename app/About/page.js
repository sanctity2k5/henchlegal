"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/nav";
import BannerSection from "@/components/banner-section";
import PageContents from "@/components/pageContents";
import banner from "@/public/images/about-banner.png";
import logoRed from "@/public/logo/logo-red-nobg.png";
import { aimsObject } from "@/constants";
import storyImgOne from "@/public/images/story-one.jpg";
import storyImgTwo from "@/public/images/story-two.jpg";
import storyImgThree from "@/public/images/story-three.jpg";
import { servicesObject } from "@/constants";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "@/components/footer";

function About() {
  const [content, setContent] = useState(null);

  const toggleContent = (index) => {
    if (content === index) {
      setContent(null);
    } else {
      setContent(index);
    }
  };

  return (
    <div className="font-poppins">
      <NavBar />
      <BannerSection
        image={banner}
        genericTitle="ABOUT US"
        subtitle='"The law is the witness and external deposit of our moral life. Its history is the history of the moral development of the race. "- Oliver Wendell Holmes Jr.'
      />

      <div className="lg:px-20">
        <PageContents
          logo={logoRed}
          title="ABOUT US"
          subtitle="Hench Legal: Powerful Advocates for Your Legal Needs"
          content="				Founded in 1990, Hench Legal has established itself as a distinguished and highly respected legal firm, renowned for providing exceptional legal services nationwide. With a team of seasoned attorneys boasting a wealth of expertise accumulated over three decades, we offer specialized counsel across a wide range of legal domains, including corporate law, criminal defense, intellectual property, family law, and estate planning.

        At Hench Legal, our clients’ interests take precedence, and we are dedicated to delivering comprehensive, practical, and cost-effective legal solutions. We approach each case with meticulous attention to detail, leveraging our extensive knowledge and experience to craft strategies that best serve our clients’ objectives. We understand the complexities of the legal landscape and work closely with our clients to guide them through every step of the legal process.
        
        Integrity, empathy, and professionalism are the cornerstones of our practice. We take immense pride in conducting ourselves with the utmost integrity, adhering to the highest ethical standards. Our team of attorneys is not only skilled and knowledgeable but also compassionate and understanding. We recognize that legal matters can be emotionally challenging, and we strive to provide our clients with the support and guidance they need during such times.
        
        At Hench Legal, we value long-term relationships built on trust and confidentiality. We understand that each client is unique, and we take the time to listen attentively, gaining a deep understanding of their needs and concerns. This personalized approach allows us to tailor our legal strategies to achieve optimal outcomes for our clients. We believe in open and transparent communication, keeping our clients informed at every stage of their case.
        
        Our track record of success speaks volumes about our commitment to excellence. We have consistently delivered favorable results for our clients, earning their trust and confidence. Whether representing individuals, businesses, or organizations, we are dedicated to protecting our clients’ rights and ensuring their best interests are served.
        
        When you choose Hench Legal, you can expect a team of skilled attorneys who are passionate about their craft and relentless in their pursuit of justice. We are committed to providing exceptional legal representation and securing favorable outcomes for our clients. Contact us today to discover how Hench Legal can assist you with your legal needs."
        />
      </div>

      <section className="mt-5 px-4 md:px-20 md:mt-8">
        <h1 className="text-[23px] w-full text-center font-poppins text-[#9a2002] font-semibold md:text-[30px]">
          OUR AIMS AND OBJECTIVES
        </h1>
        {aimsObject &&
          aimsObject.map((aim, index) => (
            <div key={index} className="mt-5 lg:px-20">
              <span className="flex text-[20px] font-p-posts text-black font-semibold gap-2">
                <h1 className="lg:text-[24px]">{aim.id}.</h1>
                <h1 className="underline lg:text-[24px]">{aim.title}</h1>
              </span>
              <p className="text-[16px] font-p-posts text-black mt-2 lg:text-[20px]">
                {aim.content}
              </p>
            </div>
          ))}
      </section>

      <section className="px-4 md:px-20 md:mt-10">
        <div className="flex flex-col items-center md:flex-row lg:w-full lg:justify-center lg:px-80 xl:px-20">
          <Image
            src={storyImgOne}
            className="hidden md:flex rounded-xl md:w-[200px] md:h-[150px] lg:w-52 lg:h-40 xl:w-80 xl:h-52 md:mt-8"
            alt="story-img"
          />
          <div className="flex flex-col text-center">
            <h1 className="text-[23px] w-full text-center font-poppins text-[#9a2002] font-semibold md:text-[26px] mt-6 mb-2 md:mb-0 lg:text-[30px] lg:-mb-4">
              OUR STORY
            </h1>
            <p className="mb-4 md:mb-0 lg:w-60 lg:text-[20px] lg:m-4 xl:w-80 xl:text-[24px]">
              Envisioning a society with basic needs met and social justice,
              tackling poverty, hunger, education and healthcare
            </p>
          </div>
          <Image
            src={storyImgTwo}
            className="rounded-xl md:w-[200px] h-[180] md:mt-8 lg:w-52 lg:h-40 xl:w-80 xl:h-52"
            alt="story-img"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:-ml-5 lg:w-full lg:justify-center lg:ml-0 lg:mt-2">
          <div className="flex flex-col text-center">
            <h1 className="text-[23px] w-full text-center font-poppins text-[#9a2002] font-semibold md:text-[26px] mt-6 mb-2 lg:text-[30px] lg:-mb-1 lg:mt-10">
              OUR VISION
            </h1>
            <p className="mb-4 lg:w-60 lg:text-[20px] xl:text-[24px] xl:w-80">
              Striving for a sustainable future: Harmony with the environment,
              climate mitigation, biodiversity preservation, and a better world
              for future generations.
            </p>
          </div>
          <Image
            src={storyImgThree}
            className="rounded-xl md:w-[200px] h-[180px] md:m-2 lg:w-60 lg:h-48 lg:m-4 xl:w-80 xl:h-60"
            alt="story-img"
          />
          <div className="flex flex-col text-center">
            <h1 className="text-[23px] w-full text-center font-poppins text-[#9a2002] font-semibold md:text-[26px] mt-6 mb-2 lg:text-[30px] lg:-mb-1 lg:mt-0">
              OUR MISSION
            </h1>
            <p className="mb-4 lg:w-60 lg:text-[20px] xl:text-[24px] xl:w-80">
              Seeking financial security and independence: Saving, wise
              investments, and the path to financial freedom for needs and
              dreams.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 lg:px-20 mb-10">
        <PageContents
          title="SERVICES"
          subtitle="Hench Legal Services at Your Command"
          content="Financial Security and Independence: People often strive for financial stability and independence. This includes goals such as saving money, investing wisely, and achieving financial freedom to meet their needs and achieve their dreams."
        />
        {servicesObject.map((service, i) => {
          return (
            <div className="px-4 mt-4 w-full md:px-20 lg:flex" key={i}>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleContent(i)}
              >
                <h1 className="font-medium underline lg:text-[20px]">
                  {service.title}
                </h1>
                <span>
                  {content === i ? (
                    <AiFillCaretDown className="w-4 h-8" />
                  ) : (
                    <AiFillCaretRight className="w-4 h-8" />
                  )}
                </span>
              </button>
              <span>
                {content === i && (
                  <p className="lg:text-[18px]">{service.content}</p>
                )}
              </span>
            </div>
          );
        })}
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default About;
