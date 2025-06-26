import { FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  return (
    <div className="flex flex-col mt-24">
      <hr className="border-b border-[#E3EBF5] my-6 " />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 w-full">
        <div className="flex flex-col space-y-4 md:col-span-2">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueBold text-lg md:text-2xl">
              Tech stories you won't read anywhere else.
            </p>
          </ScrollAnimation>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="border-b outline-none w-full text-lg font-NeueMedium"
              />
              <FaArrowRightLong className="flex items-center justify-center w-8  h-8 p-2 bg-black text-white rounded-full hover:bg-bgRed cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="md:col-span-3 flex  justify-end space-x-20">
          <ScrollAnimation direction={"right"}>
            <div className="flex flex-col space-y-4">
              <p className="text-lg font-NeueRoman">Touchcore</p>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                Home
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                Work
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                About
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                Expertise
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                Contact Us
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction={"left"}>
            <div className="flex flex-col space-y-4">
              <p className="font-NeueRoman text-lg"> Social</p>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                Instagram
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                LinkedIn
              </a>
              <a
                href=""
                className="text-lg md:text-2xl font-NeueBold  hover:underline"
              >
                X (Twitter)
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <hr className="border-b border-[#E3EBF5] my-6" />

      <div className="flex flex-col md:flex-row  justify-center  md:justify-between space-y-10 md:space-y-0 items-center  mb-14">
        <ScrollAnimation direction={"right"}>
          <div className="flex space-x-4 items-center">
            <img src="/logo.svg" alt="logo" className="size-16" />
            <p className="text-lg font-NeueRoman">
              © 2025 Touchcore Technology Limited.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction={"left"}>
          <div className="flex  space-x-6 font-NeueRoman text-lg">
            <p>Privacy Policy</p>
            <p>Legal Information</p>
            <p>Terms & Conditions</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
