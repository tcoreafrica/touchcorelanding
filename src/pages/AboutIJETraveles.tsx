import { useEffect, useState } from "react";
import Guesswork from "../components/projectsWeDone/Guesswork";
import HeroSection from "../components/projectsWeDone/HeroSection";
import ImgSlider from "../components/projectsWeDone/ImgSlider";
import NextCaseStudy from "../components/projectsWeDone/NextCaseStudy";
import ProductInfo from "../components/projectsWeDone/ProductInfo";
import SystemDesign from "../components/projectsWeDone/SystemDesign";
import Video from "../components/projectsWeDone/Video";
import Preloader from "../components/common/PreLoader";

export default function AboutIJETraveles() {
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
        <HeroSection img="/saroafricaHeroimg.png" title="IJE Travels" />
        <ProductInfo
          title="SERVICES"
          services={[
            "STRATEGY",
            "SYSTEM ARCHITECTURE",
            "USER TESTING",
            "PROTOTYPING",
            "UX DESIGN",
            "WEB DEVELOPMENT",
            "QUALITY ASSURANCE",
          ]}
          infoTitle="PRODUCT INFO"
          sections={[
            {
              heading: "AI Trip Planner",
              description:
                "Intraverse empowers individuals and businesses to navigate and thrive in the travelindustry effortlessly. They offer powerful next-gen travel technology designed toeliminate the complexity of selling travel for businesses of all sizes. With Intraverse,any business can seamlessly offer flight, accommodation, and tour bookings to itscustomers without the need for extensive technical expertise or intricate integrations.",
            },
            {
              heading: "Where Touchcore comes \n in?",
              description:
                "Our team was responsible for the development of Saroafrica's digital platforms, including user interface design, and backend infrastructure. We focused on creating user-friendly experiences that simplify navigation and booking processes, ensuring seamless access to Saroafrica's diverse product offerings.",
            },
          ]}
        />
        <Video img="/saroAfrica2.png" alt="Intra Video Image" />
        <Guesswork
          images={["/saroGues1.png", "/saroGues2.png", "/saroGues3.png"]}
        />
        <SystemDesign image="/saroafrica3.png" />
      </div>
      <ImgSlider
        images={[
          "/saroafrica3.png",
          "/saroafrica4.png",
          "/workEnv2.png",
          "/workEnv3.png",
        ]}
      />
      <NextCaseStudy title="Saroafrica" imageSrc="/saroFooter.png" />
      <div className="px-5 md:px-24">{/* <Footer /> */}</div>
    </div>
  );
}
