import Video from "../components/projectsWeDone/Video";
import HeroText from "../components/workSection/HeroText";
import MakeItEasy from "../components/workSection/MakeItEasy";
import ProductInfoAi from "../components/workSection/ProductInfoAi";
import ChallengeSection from "../components/workSection/ChallengeSection";
import WeBuilt from "../components/workSection/WeBuilt";
import ImgSlider from "../components/projectsWeDone/ImgSlider";
import NextCaseStudy from "../components/projectsWeDone/NextCaseStudy";
import { useEffect, useState } from "react";
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
const ourSolution = [
  [
    "A robust SaaS platform with real-time travel inventory access",
    "Post-ticket automation: Refunds, reissues, name changes, and more",
  ],
  [
    "Multi-channel integrations: Flights, Hotels, Tours, Insurance, Wallets",
    "Mobile-first UI/UX for users and agents",
  ],
  [
    "White-label engine: Any agent can launch a branded travel site in minutes",
    "Local-first infrastructure with NGN wallets and offline payment support",
  ],
];

export default function WorkIntraverseAfr() {
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
          "AI Driven SAAS",
          { mobileBreak: true },
          "Travel",
          { desktopBreak: true },
          "Booking Engine for",
          { mobileBreak: false, desktopBreak: false },
          "Intraverse",
        ]}
      />
      <Video img="/IntraverseAi.png" alt="Intra Video Image" />
      <ProductInfoAi
        clientName="INTRAVERSE AFRICA"
        tagline="We built a next-gen booking engine for travel agents"
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
        productTitle="We Built Intraverse!"
        productDescription1="At Touchcore, we're proud to be the development team behind Intraverse — the revolutionary travel tech platform empowering businesses and individuals to sell travel with ease."
        productImage="/intraverseWork.png"
        productImageAlt="Intraverse project image"
        productDescription2="From seamless booking automation to white-label websites, APIs, and post-ticket management tools, Intraverse is redefining how travel is sold in Africa and beyond — and we’re honored to have brought the vision to life."
      />
      <WeBuilt
        imageSrc="/MobileIntra.png"
        title="We Built Intraverse!"
        description="At Touchcore, we're proud to be the development team behind Intraverse — the revolutionary travel tech platform empowering businesses and individuals to sell travel with ease."
      />
      <ChallengeSection columns={challengeData} />
      <MakeItEasy />
      <ChallengeSection
        img="/IntraversedifeScre.png"
        columns={ourSolution}
        title="OUR SOLUTION"
      />
      <ImgSlider
        images={[
          "/IcarryGoHeroImg.png",
          "/IcarryGo2.png",
          "/workEnv2.png",
          "/workEnv3.png",
        ]}
      />
      <NextCaseStudy
        title="Simplifying Buy Now, Pay Later for both Sides of the Sale"
        imageSrc="/OdioPay.png"
      />
    </div>
  );
}
