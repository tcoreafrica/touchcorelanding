import { useEffect, useState } from "react";
import Guesswork from "../components/projectsWeDone/Guesswork";
import HeroSection from "../components/projectsWeDone/HeroSection";
import ImgSlider from "../components/projectsWeDone/ImgSlider";
import NextCaseStudy from "../components/projectsWeDone/NextCaseStudy";
import ProductInfo from "../components/projectsWeDone/ProductInfo";
import SystemDesign from "../components/projectsWeDone/SystemDesign";
import Video from "../components/projectsWeDone/Video";
import Preloader from "../components/common/PreLoader";

export default function AboutSaroAfrica() {
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
        <HeroSection img="/saroafricaHeroimg.png" title="Saroafrica" />
        <ProductInfo
          title="SERVICES"
          services={[
            "UX DESIGN",
            "UI DESIGN",
            "WEB DEVELOPMENT",
            "PROTOTYPING",
          ]}
          infoTitle="PRODUCT INFO"
          sections={[
            {
              heading: "Informative Website",
              description:
                "Saroafrica International Limited is a diversified Nigerian conglomerate established in 1991, headquartered in Victoria Island, Lagos. The company operates across the agribusiness value chain and consumer goods sectors in West and Central Africa. Its subsidiaries include Saro Agrosciences, which provides crop protection materials, seeds, fertilizers, and farm machinery; Saro Lifecare, offering personal care products; and Saro Agro-Allied, engaged in the export of agricultural commodities such as sesame, cashew, and cocoa.",
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
      <NextCaseStudy title="Intraverse" imageSrc="/saroFooter.png" />
      <div className="px-5 md:px-24">{/* <Footer /> */}</div>
    </div>
  );
}
