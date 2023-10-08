"use client";
import React, { useState } from "react";
import Image from 'next/image';
import BannerSection from '@/components/banner-section';
import Footer from '@/components/footer';
import NavBar from '@/components/nav';
import PageContents from '@/components/pageContents';
import ServicesCard from '@/components/servicesCard';
import ServicesComponent from '@/components/servicesComponent';
import banner from '@/public/images/services-banner.png';
import logoRed from "@/public/logo/logo-red-nobg.png";
import overlay from "@/public/images/home-overlay.jpg";
import overlayTwo from "@/public/images/background-two.jpeg";

function Services() {
  // Define and manage the content state in the parent component
  const [content, setContent] = useState([]);

  // Function to update the content state when a service is expanded
  const handleContentChange = (index) => {
    if (content.includes(index)) {
      setContent(content.filter((item) => item !== index));
    } else {
      setContent([...content, index]);
    }
  };


  return (
    <div className='font-poppins bg-white'>
        <section>
            <NavBar />
            <BannerSection
        image={banner}
        genericTitle="SERVICES"
        subtitle="Our commitment to excellence is at the heart of every service we provide." />
        <div className='lg:px-20'>
        <PageContents
          // logo={logoRed}
          title="SERVICES"
          content="At Hench Legal, we are committed to providing top-notch legal services tailored to meet your specific needs. Our team of experienced attorneys is dedicated to delivering the highest level of expertise and professionalism in every aspect of the law."
        />

          {/* Pass the content state and content change handler to ServicesCard */}
          <ServicesCard content={content} onContentChange={handleContentChange} setContent={setContent} href={`#service`} />
        </div>

        <section className="relative mt-10">
        <Image
          src={overlay}
          alt="overlay"
          className="w-full h-[600px] md:h-[500px]"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white px-4 md:mt-5 md:px-20 lg:px-40">
          <h1 className="text-4xl lg:text-6xl mt-10 font-bold">
            Why Choose Us?
          </h1>
          <h3 className="text-xl lg:text-3xl mt-2 font-semibold mb-4">
            Personalized attention, keeping you informed and providing guidance
            throughout the legal process
          </h3>
          <ul className="px-4 list-decimal list-inside flex flex-col gap-4 xl:text-[20px]">
            <li>
              Strong track record of achieving successful outcomes for clients.
            </li>
            <li>
              Wide range of practice areas, offering comprehensive legal
              services.
            </li>
            <li>
              Experienced legal professionals with extensive expertise in
              various areas of law.
            </li>
            <li>
              Client-centered approach focused on understanding and tailoring
              legal strategies to your unique needs.
            </li>
            <li>
              Cost-effective solutions, providing transparent fee structures and
              working within your budget.
            </li>
          </ul>
        </div>
      </section>
        <div className='relative'>
          <Image src={overlayTwo} className='w-full hidden lg:flex flex-col lg:h-[500px] xl:h-[500px]' alt='overlay' />
          <div className="lg:absolute top-0 left-0">
          <section className="mt-20 px-4 lg:px-20 lg:mt-28">
        {/* Pass the content state to ServicesComponent */}
              <ServicesComponent content={content} onContentChange={handleContentChange} />
        </section>
        </div>
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default Services