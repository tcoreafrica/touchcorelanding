import { useEffect, useState } from "react";
import NextCaseStudy from "../components/projectsWeDone/NextCaseStudy";
import Video from "../components/projectsWeDone/Video";
import ChallengeSection from "../components/workSection/ChallengeSection";
import EstablishingFocus from "../components/workSection/EstablishingFocus";
import GiveCustMoreCont from "../components/workSection/GiveCustMoreCont";
import HeroText from "../components/workSection/HeroText";
import ProductInfoAi from "../components/workSection/ProductInfoAi";
import WeBuilt from "../components/workSection/WeBuilt";
import Preloader from "../components/common/PreLoader";

const challengeData = [
  [
    "Build a travel platform from the ground up",
    "Automate complex travel processes: booking, payments, ticketing, post-ticket changes",
  ],
  [
    "Integrate global flight and hotel APIs (Amadeus, HotelBeds, etc.)",
    "Ensure mobile and desktop responsiveness",
  ],
  [
    "Create a white-label website engine for resellers",
    "Make it work in Nigeria’s unique environment: limited cards, local currencies, wallet systems",
  ],
];

export default function WorkOdioPay() {
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
      <HeroText
        textLines={[
          "Simplifying Buy Now,",
          { mobileBreak: true, desktopBreak: true },
          "Pay Later for both",
          { desktopBreak: true },
          "Sides of the Sale",
        ]}
      />
      <Video img="/OdioPay.png" alt="Intra Video Image" />
      <ProductInfoAi
        clientName="INTRAVERSE AFRICA"
        tagline="Makes flexible payments easy for everyone"
        services={[
          "STRATEGY",
          "SYSTEM ARCHITECTURE",
          "USER TESTING",
          "UX DESIGN",
          "UI DESIGN",
          "WEB DEVELOPMENT",
          "MOBILE DEVELOPMENT",
          "QUALITY ASSURANCE",
        ]}
        productTitle="Designing a seamless experience from the ground up"
        productDescription1="Touchcore led the design and development of the project, focusing on creating a seamless experience from the ground up. We turned user insights into intuitive interfaces that balance speed and clarity."
        productImage="/intraverseWork.png"
        productImageAlt="Intraverse project image"
        productDescription2="Our team crafted scalable solutions to handle complex payment flows while keeping the product simple and reliable. By bringing design and development closely together, we built a tool that meets the needs of both merchants and customers effectively."
      />
      <WeBuilt
        imageSrc="/OdioPayMobile.png"
        title="We Built Intraverse!"
        description="At Touchcore, we're proud to be the development team behind Intraverse — the revolutionary travel tech platform empowering businesses and individuals to sell travel with ease."
      />
      <div className="bg-[#E3EBF5] py-24  flex flex-col">
        <EstablishingFocus />
        <ChallengeSection columns={challengeData} />
        <GiveCustMoreCont />
      </div>
      <NextCaseStudy title="Saroafrica" imageSrc="/SaraAfrica.png" />
    </div>
  );
}
