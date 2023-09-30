import NavBar from '@/components/nav';
import BannerSection from '@/components/banner-section';
import banner from "@/public/images/contact-banner.png"
import PageContents from '@/components/pageContents';
import logoRed from "@/public/logo/logo-red-nobg.png";
import GetInTouch from '@/components/getInTouch';
import Footer from '@/components/footer';

function Contact() {
  return (
    <div>
        <section>
            <NavBar />
            <BannerSection
        image={banner}
        genericTitle="CONTACT US"
        subtitle={<span dangerouslySetInnerHTML={{ __html: 'Need legal assistance or have questions? <br /> Contact us today, and let us be your bridge to justice'}}/>} />

<PageContents
          logo={logoRed}
          content="Welcome to the Contact Us page of HenchLegal Firm. We value your interest and are thrilled to assist you. Whether you’re seeking legal advice, have inquiries about our services, or wish to discuss a potential collaboration, we’re here to help. Feel free to get in touch with us using the provided contact details or the convenient contact form below."
        />
        </section>

        <section>
            <GetInTouch />
            <Footer />
        </section>
    </div>
  )
}

export default Contact;