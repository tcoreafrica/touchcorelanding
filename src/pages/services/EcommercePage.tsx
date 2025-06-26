import { useEffect, useState } from "react";
import ComeIn from "../../components/common/ComeIn";
import ContactUs from "../../components/common/ContactUs";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/common/HeroSection";
import Media from "../../components/common/Media";
import OurWork from "../../components/common/OurWork";
import TextDescription from "../../components/common/TextDescription";
import OutComesModern from "../../components/ecommerce/OutComesModern";
import Preloader from "../../components/common/PreLoader";

export default function EcommercePage() {
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
      <HeroSection
        title={
          <>
            E-commerce That
            <br /> Performs Beyond
            <br />
            Checkout
          </>
        }
        subtitle={
          <>
            Accelerate growth with powerful and flexible <br /> solutions
            tailored to your business needs
          </>
        }
      />
      <Media type="image" src="/Hero5.jpg" alt="Sample Image" />
      <TextDescription
        text="We build e-commerce platforms that go beyond selling—fast, secure, conversion-optimized systems designed to grow with your brand. From product discovery to payment and fulfillment, every touchpoint is built for performance."
        className="text-2xl font-NeueBold"
      />
      {/* <StatNum /> */}
      <TextDescription
        text="Discover the right use case for your business."
        className="text-4xl font-NeueMedium"
      />
      <OutComesModern />
      <OurWork />
      <div className="mt-20 md:mt-0">
        <ComeIn />
      </div>
      <ContactUs bg={"white"} />
      <div className="px-5 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
