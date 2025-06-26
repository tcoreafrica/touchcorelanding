import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/PreLoader";
import Guesswork from "../components/webApp/Guesswork";
import HeroSection from "../components/webApp/HeroSection";
import ImgSlider from "../components/webApp/ImgSlider";
import ProductInfo from "../components/webApp/ProductInfo";
import SystemDesign from "../components/webApp/SystemDesign";
import Video from "../components/webApp/Video";

export default function WorkAppPage() {
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
      <div className="px-5 md:px-20">
        <HeroSection />
        <ProductInfo />
        <Video />
        <Guesswork />
        <SystemDesign />
      </div>
      <ImgSlider />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
