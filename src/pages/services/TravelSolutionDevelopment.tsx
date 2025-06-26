import HeroSection from "../../components/common/HeroSection";
import TextDescription from "../../components/common/TextDescription";
import OurServices from "../../components/travelSolutionDev/OurServices";
import ReliableTech from "../../components/travelSolutionDev/ReliableTech";
import ModernizingTravelBuss from "../../components/travelSolutionDev/ModernizingTravelBuss";
import CompaniesTrustedUs from "../../components/EnterprisePlatforms/CompaniesTrustedUs";
import OurWork from "../../components/common/OurWork";
import ContactUs from "../../components/common/ContactUs";
import Footer from "../../components/common/Footer";
import Media from "../../components/common/Media";
import WhyPartnerWithUs from "../../components/common/WhyPartnerWithUs";
import Preloader from "../../components/common/PreLoader";
import { useEffect, useState } from "react";

function TravelSolutionDevelopment() {
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
            Accelerate growth
            <br /> With Custom Travel
            <br /> Growth Solutions
          </>
        }
        subtitle={
          <>
            Accelerate growth with powerful and <br /> flexible solutions
            tailored to your <br /> business needs
          </>
        }
      />
      <Media type="image" src="/Hero4.jpg" alt="Sample Image" />
      <TextDescription
        text="High performance web and mobile applications built for tour operators, OTAs, hospitality providers, and ambitious startups looking to grow faster and operate smarter."
        className="text-lg font-NeueRoman"
        leftText="HIGHLY SCALABLE APPS"
        leftClassName="font-NeueRoman"
      />
      <OurServices />
      <ReliableTech />
      <ModernizingTravelBuss />
      <CompaniesTrustedUs />
      <OurWork />
      <WhyPartnerWithUs />
      <ContactUs bg={"white"} />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}

export default TravelSolutionDevelopment;
