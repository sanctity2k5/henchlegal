import NavBar from "@/components/nav";
import PageContents from "@/components/pageContents";
import BannerSection from "@/components/banner-section";
import terms from "@/public/images/terms.png";
import logoRed from "@/public/logo/logo-red-nobg.png";
import Footer from "@/components/footer";

function Terms() {
  return (
    <div className="font-poppins bg-white">
      <NavBar />
      <BannerSection
        image={terms}
        title="Legal wisdom begins by disclaiming legal advice. Consult a qualified attorney for your specific needs."
        // subtitle="NIGERIA'S MOST TRUSTED LEGAL PRACTITIONERS"
        genericTitle="Terms and Conditions"
        // moTitle="Hench Legal"
        // MoSubtitle="Justice is our expertise, your rights are our mission."
        // buttonText="Read More..."
      />
      <div className="md:px-20 xl:px-40">
        <PageContents
          logo={logoRed}
          title="Terms and Conditions"
          subtitle="Legal order and ethics go hand in hand. Our terms and conditions uphold both principles."
          content={
            <div>
              <h2 className="lg:text-3xl font-semibold">1. Introduction</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your use of [Your
                Website Name] ("the Website") and any services provided through
                the Website. By accessing or using the Website, you agree to
                comply with these Terms. If you do not agree to these Terms,
                please refrain from using the Website.
              </p>

              <h2 className="lg:text-3xl font-semibold">2. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to amend or update these Terms at any time.
                Changes will be effective upon posting to the Website. You are
                responsible for reviewing these Terms regularly to stay informed
                of any modifications.
              </p>

              <h2 className='lg:text-3xl font-semibold'>3. Use of the Website</h2>
        <p>
          3.1. <strong> User Account</strong>
          <br />
          If registration is required, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.
        </p>
        <p>
          3.2. <strong> Content</strong>
          <br />
          Users may submit content, such as comments or reviews. You are solely responsible for any content you submit and must not violate applicable laws or infringe on any third-party rights.
        </p>

              <h2 className="lg:text-3xl font-semibold">
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on the Website, including but not limited to text,
                graphics, logos, images, audio, video, and software, is our
                property or the property of our licensors and protected by
                copyright, trademark, and other intellectual property laws. You
                may not use, reproduce, or distribute content without
                authorization.
              </p>

              <h2 className="lg:text-3xl font-semibold"> 5. Privacy</h2>
              <p className="mb-4">
                Please review our Privacy Policy to understand how we collect,
                use, and protect your personal information.
              </p>

              <h2 className="lg:text-3xl font-semibold">
                6. Limitations of Liability
              </h2>
              <p className="mb-4">
                We are not liable for any direct, indirect, special, incidental,
                or consequential damages arising out of your use of the Website
                or services.
              </p>

              <h2 className="lg:text-3xl font-semibold">7. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold us harmless from any claims,
                damages, losses, and expenses, including legal fees, arising
                from your use of the Website or any violation of these Terms.
              </p>

              <h2 className="lg:text-3xl font-semibold">8. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate your access to the Website
                without notice for any violation of these Terms or for any
                reason.
              </p>

              <h2 className="lg:text-3xl font-semibold">9. Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by and construed in accordance with the
                laws of [Your Jurisdiction], and you agree to submit to the
                exclusive jurisdiction of the [Your Jurisdiction] courts.
              </p>
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
