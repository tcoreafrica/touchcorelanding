import DevelopmentPhases from "../../components/StrategyDesignCompo2/DevelopmentPhases";
import HeroSection from "../../components/StrategyDesignCompo2/HeroSection";
import SuccessfullProducts from "../../components/StrategyDesignCompo2/SuccessfullProducts";
import DigitalProductDesign from "../../components/StrategyDesignCompo2/DigitalProductDesign";
import IdeasToProducts from "../../components/StrategyDesignCompo2/IdeasToProducts";
import StrategyOne from "../../components/StrategyDesignCompo2/StrategyOne";
import StrategyTwo from "../../components/StrategyDesignCompo2/StrategyTwo";
import StrategyThree from "../../components/StrategyDesignCompo2/StrategyThree";
import OurWork from "../../components/StrategyDesignCompo2/OurWork";
import WhyPartnerWithUs from "../../components/common/WhyPartnerWithUs";
import ComeIn from "../../components/common/ComeIn";
import ContactUs from "../../components/common/ContactUs";
import Footer from "../../components/common/Footer";
import Media from "../../components/common/Media";
import { useEffect, useState } from "react";
import Preloader from "../../components/common/PreLoader";

export default function ServicesPage2() {
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
      <HeroSection />
      <Media type="image" src="/Hero2.jpg" alt="hero Image" />
      <SuccessfullProducts />
      <DevelopmentPhases />
      <DigitalProductDesign />
      <IdeasToProducts />
      <StrategyOne />
      <StrategyTwo />
      <StrategyThree />
      <OurWork />
      <WhyPartnerWithUs />
      <ComeIn />
      <ContactUs />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
