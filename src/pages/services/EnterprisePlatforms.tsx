// import DigitalTransScale from "../../components/EnterprisePlatforms/DigitalTransScale";
import HeroSection from "../../components/common/HeroSection";
// import OurServices from "../components/EnterprisePlatforms/OurServices";
import OurTechStack from "../../components/EnterprisePlatforms/OurTechStack";
import OutcomesOfModernizing from "../../components/EnterprisePlatforms/OutcomesOfModernizing";
import CompaniesTrustedUsEnt from "../../components/EnterprisePlatforms/CompaniesTrustedUsEnt";
import FAQ from "../../components/EnterprisePlatforms/FAQ";
import ContactUs from "../../components/common/ContactUs";
import Footer from "../../components/common/Footer";
import TextDescription from "../../components/common/TextDescription";
import Media from "../../components/common/Media";
import WhyPartnerWithUs from "../../components/common/WhyPartnerWithUs";
import OurServices from "../../components/EnterprisePlatforms/OurServices";
import { useEffect, useState } from "react";
import Preloader from "../../components/common/PreLoader";

export default function EnterprisePlatforms() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <HeroSection
        title={
          <>
            Reliable and scalable <br /> enterprise platform <br />
            development
          </>
        }
        subtitle={
          <>
            Fuel your growth with powerful, <br /> adaptable solutions crafted
            to meet <br /> your unique business goals.
          </>
        }
      />
      <Media type="image" src="/Hero3.jpg" alt="hero Image" />
      {/* <DigitalTransScale /> */}
      <TextDescription
        text="  Every reliable product runs on a solid backend that handles the business
        logic and keeps everything stable and secure."
        leftText="DIGITAL TRANSFORMATION AT SCALE"
        leftClassName="font-NeueRoman"
        className="text-lg font-NeueRoman"
      />

      <OurServices />
      <OurTechStack />
      <OutcomesOfModernizing />
      <CompaniesTrustedUsEnt />
      <WhyPartnerWithUs />
      <FAQ />
      <ContactUs bg={"white"} />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
