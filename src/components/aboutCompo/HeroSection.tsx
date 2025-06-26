import { FaArrowAltCircleDown } from "react-icons/fa";
import ScrollAnimation from "../common/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="bg-white px-5 md:px-20 pt-24">
      <div className="flex flex-col space-y-7">
        <ScrollAnimation direction={"up"}>
          <p className="font-NeueBold text-5xl md:text-8xl">
            We are <br /> Touchcore
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction={"up"}>
          <p className="font-NeueMedium text-xl md:text-3xl">
            For over a decade, we’ve delivered smart, scalable, and secure{" "}
            <br />
            digital solutions that power the future of businesses.
          </p>
        </ScrollAnimation>
      </div>
      <div className="flex justify-end mt-28">
          <FaArrowAltCircleDown className="text-2xl" />
      </div>
    </div>
  );
}
