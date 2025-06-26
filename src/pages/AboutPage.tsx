import BackStory from "../components/aboutCompo/BackStory";
import BackStory2 from "../components/aboutCompo/BackStory2";
import ComeIn from "../components/common/ComeIn";
import GrowingScale from "../components/aboutCompo/GrowingScale";
import HeroSection from "../components/aboutCompo/HeroSection";
import Products from "../components/aboutCompo/Products";
import Video from "../components/aboutCompo/Video";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import Preloader from "../components/common/PreLoader";

export default function AboutPage() {
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
      <Video />
      <BackStory />
      <Products />
      <GrowingScale />
      <BackStory2 />
      <ComeIn />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
