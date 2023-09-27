import React from 'react'
import NavBar from "@/components/nav";
import BannerSection from "@/components/banner-section";
import banner from "@/public/images/about-banner.png"

function About() {
  return (
    <div>
      <NavBar />
      <BannerSection
        image={banner}
        // title="Choose our law firm and experience the power of unwavering advocacy"
        subtitle="ABOUT US"
        moTitle="ABOUT US"
        // MoSubtitle="Justice is our expertise, your rights are our mission."
        // buttonText="Read More..."
      />

    </div>
  )
}

export default About;