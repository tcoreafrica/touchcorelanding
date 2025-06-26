import { FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimation from "./ScrollAnimation";

export default function ComeIn() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mt-20 md:mt-0 ">
      <div className="px-5 md:px-20 flex flex-col space-y-6 items-start md:items-center justify-center">
        <ScrollAnimation direction={"right"}>
          <p className="text-5xl md:text-8xl font-NeueBold ">
            Come in,
            <br /> we’re open
          </p>
          <button className="relative bg-bgRed w-[190px] h-[48px] text-white  font-NeueMedium rounded-full overflow-hidden group">
            <span className="relative z-10 flex items-center justify-center h-full">
              Peak into our office
              <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
            </span>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-black transition-all duration-300 ease-out origin-bottom"></div>
          </button>
        </ScrollAnimation>
      </div>
      <div className="h-[390px] md:h-[600px] w-full">
        <ScrollAnimation direction={"fade"}>
          <img
            src="/comeIN.png"
            alt="comeIN.png"
            className="h-[390px] md:h-[600px] w-full"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}
