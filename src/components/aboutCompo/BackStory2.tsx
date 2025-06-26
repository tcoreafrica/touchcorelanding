import ScrollAnimation from "../common/ScrollAnimation";

export default function BackStory2() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 flex flex-col space-y-16 pt-24 pb-12 -mt-2 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <ScrollAnimation direction={"right"}>
          <p className="text-lg font-NeueRoman">SEEING EYE TO EYE</p>
        </ScrollAnimation>
        <ScrollAnimation direction={"left"}>
          <p className="text-lg font-NeueRoman">
            At the heart of every product we deliver is a team driven by <br />{" "}
            purpose. We're not just building technology — we're also <br />{" "}
            building meaningful connections.
          </p>
        </ScrollAnimation>
      </div>

      {/* Scrollable horizontal container */}
      <ScrollAnimation direction={"fade"}>
        <div className="flex space-x-8 items-end overflow-x-auto whitespace-nowrap scrollbar-none">
          <img
            src="/about1.png"
            alt="about"
            className="w-[430px] h-[280px] flex-shrink-0"
          />
          <img
            src="/about4.png"
            alt="about"
            className="w-[788px] h-[430px] flex-shrink-0"
          />
          <img
            src="/about3.png"
            alt="about"
            className="w-[430px] h-[280px] flex-shrink-0"
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}
