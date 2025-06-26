import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollAnimation from "../common/ScrollAnimation";

export default function StartUrJourney() {
  return (
    <div className="flex flex-col space-y-10 justify-center mt-48">
      <ScrollAnimation direction={"up"}>
        <p className="flex justify-center font-NeueBold text-5xl md:text-7xl text-center">
          Let’s Build Something <br /> Great Together
        </p>
      </ScrollAnimation>
      <div className="flex justify-center">
        <ScrollAnimation direction={"left"}>
          <Link to={"/contact-us"}>
            <button className="relative bg-black w-[190px] h-[48px] text-white font-NeueMedium rounded-full overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center h-full">
                Get in Touch Today!
                <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-red-500 transition-all duration-300 ease-out origin-bottom"></div>
            </button>
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  );
}
