import NavBar from '@/components/nav';
import PageContents from '@/components/pageContents';
import BannerSection from '@/components/banner-section';
import privacy from '@/public/images/privacy.png';
import logoRed from "@/public/logo/logo-red-nobg.png";
import Footer from '@/components/footer';

function Privacy() {
  return (
    <div className="font-poppins bg-white">
        <NavBar />
        <BannerSection
        image={privacy}
        title="Your personal information is your property, and we are committed to keeping it safe."
        // subtitle="NIGERIA'S MOST TRUSTED LEGAL PRACTITIONERS"
        genericTitle="Privacy Policy"
        // moTitle="Hench Legal"
        // MoSubtitle="Justice is our expertise, your rights are our mission."
        // buttonText="Read More..."
      />
       <div className="md:px-20 xl:px-40">
  <PageContents
    logo={logoRed}
    title="PRIVACY POLICY"
    subtitle="Privacy Policy for Hench Legal Law Firm"
    content={
      <div>
        <h2 className='lg:text-3xl font-semibold'>1. Introduction</h2>
        <p>
          Hench Legal Law Firm is committed to protecting the
          privacy of our website visitors. This Privacy Policy outlines how we
          collect, use, disclose, and protect your personal information.
        </p>

        <h2 className='lg:text-3xl font-semibold'>2. Information We Collect</h2>
        <p>
          2.1. <strong>Personal Information</strong>
          <br />
          - We may collect personal information such as your name, contact
          details, email address, and other identifiable information when you
          contact us, request information, or sign up for newsletters.
        </p>
        <p>
          2.2. <strong>Non-Personal Information</strong>
          <br />
          - We may collect non-personal information about your visit to our
          website, including but not limited to your IP address, browser type,
          device information, and website usage statistics.
        </p>


        <h2 className='lg:text-3xl font-semibold'>3. How We Use Your Information</h2>
        <p>
          3.1. <strong>We use personal information for the following purposes:</strong>
          <br />
          <ul>
            <li>    To respond to your inquiries.
    </li>
    <li>To send you information about our services.
   </li>
   <li> To improve our website and services.
    </li>
    <li>To comply with legal obligations.</li>
          </ul>
        </p>
        <p>
          3.2. <strong> Non-personal information may be used for website analytics and to enhance user experience.</strong>
        </p>
        
        <h2 className='lg:text-3xl font-semibold'>4. Sharing Your Information</h2>
        <p>
          4.1. <strong>We do not sell or rent your personal information to third parties. However, we may share your information with trusted third parties for the following purposes:</strong>
          <br />
          <ul>
            <li>        To provide services on our behalf.
    
    </li>
    <li>To comply with legal requirements.
    
   </li>
   <li> To protect our rights and interests.
    </li>
    </ul>
        </p>

        <h2 className='lg:text-3xl font-semibold'>5.  Cookies and Similar Technologies</h2>
        <p>
        Our website may use cookies and similar technologies to improve user experience. You can manage cookie preferences through your browser settings.
        </p>

        <h2 className='lg:text-3xl font-semibold'>6.  Security</h2>
        <p>
        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className='lg:text-3xl font-semibold'>7.  Your Choices</h2>
        <p>
        You may choose to opt-out of receiving marketing communications from us. You can also access, update, or request the deletion of your personal information by contacting us.
        </p>

        <h2 className='lg:text-3xl font-semibold'>8.  Links to External Sites</h2>
        <p>
        Our website may contain links to external websites. We are not responsible for the content or privacy practices of these websites.
        </p>

        <h2 className='lg:text-3xl font-semibold'>9.  Changes to this Privacy Policy</h2>
        <p>
        We may update this Privacy Policy periodically. The latest version will be posted on this page with the "Last Updated" date.
        </p>
      </div>
    
      
    }
  />
</div>

<Footer />

    </div>
  )
}

export default Privacy