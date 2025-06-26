import Footer from "../components/common/Footer";
import EstablishingFocus from "../components/mobileApp/EstablishingFocus";
import FidelityDesign from "../components/mobileApp/FidelityDesign";
import HeroSection from "../components/mobileApp/HeroSection";
import ProductInfo from "../components/mobileApp/ProductInfo";
import TestingPrototype from "../components/mobileApp/TestingPrototype";

export default function MobileAppPage() {
  return (
    <div>
      <div className="px-5 md:px-20">
        <HeroSection />
        <ProductInfo />
      </div>
      <div className="bg-[#E3EBF5]">
        <EstablishingFocus />
        <TestingPrototype />
        <FidelityDesign />
      </div>
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
