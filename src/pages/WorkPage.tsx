import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Sectors from "../components/workCompo/Sectors";
import Services from "../components/workCompo/Services";
import TrustWorthy from "../components/workCompo/TrustWorthy";
import Work from "../components/workCompo/Work";
import WorkTogether from "../components/workCompo/WorkTogether";
import Preloader from "../components/common/PreLoader";

export default function WorkPage() {
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
    <div className="px-5 md:px-20">
      <Work />
      <Sectors />
      <TrustWorthy />
      <Services />
      <WorkTogether />
      <Footer />
    </div>
  );
}
