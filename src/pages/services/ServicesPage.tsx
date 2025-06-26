import Media from "../../components/common/Media";
import HeroSection from "../../components/common/HeroSection";
import SuccessfullProducts from "../../components/servicesCompo/SuccessfullProducts";
import Steps from "../../components/servicesCompo/Steps";
import StatNumbers from "../../components/servicesCompo/StatNumbers";
import AreasOfExpertise from "../../components/servicesCompo/AreasOfExpertise";
import WebAppDevelopment from "../../components/servicesCompo/WebAppDevelopment";
import WhyPartnerWithUs from "../../components/common/WhyPartnerWithUs";
import ComeIn from "../../components/common/ComeIn";
import WeAreHiring from "../../components/aboutCompo/WeAreHiring";
import Footer from "../../components/common/Footer";
import OurWork from "../../components/common/OurWork";
import { useEffect, useState } from "react";
import Preloader from "../../components/common/PreLoader";

export default function ServicesPage() {
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
            Advanced <br />
            Mobile and Web App <br />
            Development
          </>
        }
        subtitle={
          <>
            Propel your businesses forward with{" "}
            <br className="hidden md:block" /> high-performing app solutions
          </>
        }
      />
      <Media type="image" src="/Hero1.jpg" alt="Sample Image" />
      <SuccessfullProducts />
      <Steps />
      <StatNumbers />
      <AreasOfExpertise />
      <WebAppDevelopment />
      <OurWork />
      <WhyPartnerWithUs />
      <ComeIn />
      <WeAreHiring />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
