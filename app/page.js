"use client"
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/nav";
import BannerSection from "@/components/banner-section";
import banner from "@/public/images/home-banner.png";
import PageContents from "@/components/pageContents";
import overlay from "@/public/images/home-overlay.jpg";
import { servicesObject } from "@/constants";
import { teamObject } from "@/constants";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import GetInTouch from "@/components/getInTouch";
import Footer from "@/components/footer";
import ServicesCard from "@/components/servicesCard";
import overlayTwo from "@/public/images/background-two.jpeg";

function Home() {
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
    <div className="font-poppins bg-white">
      <NavBar />
      <BannerSection
        image={banner}
        title="Choose our law firm and experience the power of unwavering advocacy"
        subtitle="NIGERIA'S MOST TRUSTED LEGAL PRACTITIONERS"
        moTitle="Hench Legal"
        MoSubtitle="Justice is our expertise, your rights are our mission."
        buttonText="Read More..."
      />
      <div className="mt-20 md:px-20 xl:px-40">
        <PageContents
          // logo={logoRed}
          title="ABOUT US"
          subtitle="Your Trusted Partner in Legal Matters"
          content="Our team of skilled attorneys brings a wealth of experience and expertise across a wide range of legal disciplines. We have cultivated a dynamic and collaborative environment that encourages creativity, critical thinking, and out-of-the-box problem-solving. With our comprehensive understanding of the law and a commitment to staying up-to-date with the latest industry trends, we are well-equipped to handle complex legal matters efficiently and effectively."
        />
      </div>

      <section className="relative mt-10">
        <Image
          src={overlay}
          alt="overlay"
          className="w-full h-[700px] md:h-[500px]"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white md:mt-5 md:px-20 lg:px-40">
          <div className="px-4">
          <h1 className="text-4xl lg:text-6xl mt-10 font-bold">
            Why Choose Us?
          </h1>
          <h3 className="text-xl lg:text-3xl mt-2 font-semibold mb-4">
            Personalized attention, keeping you informed and providing guidance
            throughout the legal process
          </h3>
          <ul className="px-4 list-decimal list-inside flex flex-col gap-4 md:px-20 xl:text-[20px]">
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
        </div>
      </section>

      <section className="relative mt-28">
        <Image
          src={overlayTwo}
          alt="overlay"
          className="w-full hidden lg:flex lg:h-[1400px] xl:h-[1100px]"
        />
        <div className="lg:absolute top-0 left-0">
          <section className="mt-20 px-4 lg:px-20 lg:mt-28">
            <PageContents
              title="SERVICES"
              subtitle="An Overview of the services we offer at Hench Legal"
            />
          </section>
          <ServicesCard href="/Services#service" content={content} onContentChange={handleContentChange} setContent={setContent} />
        </div>
      </section>

      <section className="pt-20 pb-10 mt-10 bg-gray-300 md:px-40 lg:px-60 xl:px-40 xl:w-full">
        <div className="px-2">
        <div className="mt-10 xl:-mt-20">
          <PageContents title="OUR TEAM" />
        </div>
        <div className="px-4 md:px-0 xl:flex xl:gap-16">
          {teamObject &&
            teamObject.map((team, index) => (
              <div
                key={index}
                className="bg-[#dad8db] h-[450px] mb-6 flex flex-col items-center px-4 rounded-2xl shadow-xl hover:bg-white md:h-[600px] lg:px-12 xl:mt-10 xl:w-[500px]"
              >
                <Image
                  src={team.image}
                  className="rounded-[999px] mb-4 mt-8 w-36 h-[150px] md:w-48 md:h-48 md:mt-12"
                  alt={team.title}
                />
                <h1 className=" font-bold text-[24px] md:text-[28px] text-black">
                  {team.title}
                </h1>
                <p className="text-[17px] text-[#7a7a7a] text-center md:text-[20px]">
                  {team.content}
                </p>
                <div className="flex gap-2">
                  <PiFacebookLogo
                    className="w-10 h-10 md:w-16 md:h-16 mt-6"
                    style={{
                      backgroundColor: "black",
                      color: "red",
                      padding: "10px",
                      borderRadius: "999px",
                    }}
                  />
                  <PiTwitterLogoFill
                    className="w-10 h-10 md:w-16 md:h-16 mt-6"
                    style={{
                      backgroundColor: "black",
                      color: "red",
                      padding: "10px",
                      borderRadius: "999px",
                    }}
                  />
                  <PiInstagramLogoThin
                    className="w-10 h-10 md:w-16 md:h-16 mt-6"
                    style={{
                      backgroundColor: "black",
                      color: "red",
                      padding: "10px",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
        </div>
      </section>

      <div>
        <GetInTouch />
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
