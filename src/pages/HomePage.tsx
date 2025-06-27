import { useState, useEffect } from "react";
import AnimeVideo from "../components/homeCompo/AnimeVideo";
import ExpertiseAreas from "../components/homeCompo/ExpertiseAreas";
import HeroSection from "../components/homeCompo/HeroSection";
import StaticNum from "../components/homeCompo/StaticNum";
import RecentWorks from "../components/homeCompo/RecentWorks";
import ClientCompanies from "../components/homeCompo/ClientCompanies";
// import NewServices from "../components/homeCompo/NewServices";
import Phases from "../components/homeCompo/Phases";
import StartUrJourney from "../components/homeCompo/StartUrJourney";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/PreLoader";

function HomePage() {
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
    <div className="bg-bgPrimary min-h-screen">
      <HeroSection />
      <AnimeVideo />
      <StaticNum />
      <ExpertiseAreas />
      <div className="bg-white pt-36 px-5 md:px-20">
        <RecentWorks />
        <ClientCompanies />
        {/* <NewServices /> */}
        <Phases />
        <StartUrJourney />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
