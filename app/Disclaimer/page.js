import NavBar from "@/components/nav";
import PageContents from "@/components/pageContents";
import BannerSection from "@/components/banner-section";
import disclaimer from "@/public/images/disclaimer.png";
import logoRed from "@/public/logo/logo-red-nobg.png";
import Footer from "@/components/footer";

function Disclaimer() {
  return (
    <div className="font-poppins bg-white">
      <NavBar />
      <BannerSection
        image={disclaimer}
        title="Legal wisdom begins by disclaiming legal advice. Consult a qualified attorney for your specific needs."
        // subtitle="NIGERIA'S MOST TRUSTED LEGAL PRACTITIONERS"
        genericTitle="Disclaimer"
        // moTitle="Hench Legal"
        // MoSubtitle="Justice is our expertise, your rights are our mission."
        // buttonText="Read More..."
      />
      <div className="md:px-20 xl:px-40">
        <PageContents
          logo={logoRed}
          title="DISCLAIMER"
          subtitle="Disclaimer for Hench Legal Law Firm"
          content={
            <div>
              <h2 className="lg:text-3xl font-semibold">1. Use of Website</h2>
              <p className= "mb-4">
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information up to date and accurate, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose. Any reliance you place on such information is
                therefore strictly at your own risk.
              </p>

              <h2 className="lg:text-3xl font-semibold">2. Legal Advice</h2>
              <p className= "mb-4">
                The content on this website is not intended as legal advice and
                should not be considered as such. Consult with our qualified
                attornies or legal professionals for advice tailored to your
                specific situation. Using or relying on the information provided
                on this website does not create an attorney-client relationship.
              </p>

              <h2 className="lg:text-3xl font-semibold">
                3. Limitation of Liability
              </h2>
              <p className= "mb-4">
                In no event will we be liable for any loss or damage, including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of or in connection with the use of this
                website.
              </p>

              <h2 className="lg:text-3xl font-semibold">4. External Links</h2>
              <p className= "mb-4">
                This website may contain links to external websites. We have no
                control over the nature, content, and availability of those
                sites. The inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>

              <h2 className="lg:text-3xl font-semibold">
                {" "}
                Errors and Omissions
              </h2>
              <p className= "mb-4">
                We do not guarantee that the website will be free of errors or
                omissions. Information provided on this website may be subject
                to change without notice.
              </p>

              <h2 className="lg:text-3xl font-semibold">6. Consent</h2>
              <p className= "mb-4">
                By using this website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>

              <h2 className="lg:text-3xl font-semibold">7. Update</h2>
              <p className= "mb-4">
                This disclaimer is subject to change without notice. It is your
                responsibility to check for updates.
              </p>
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Disclaimer;
