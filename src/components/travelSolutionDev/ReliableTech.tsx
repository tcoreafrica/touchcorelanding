import ScrollAnimation from "../common/ScrollAnimation";

export default function ReliableTech() {
  return (
    <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 px-5 md:px-20 py-24 pb-12 ">
      <ScrollAnimation direction={"right"}>
        <p className="font-NeueRoman text-lg">RELIABLE TECHNOLOGY</p>
      </ScrollAnimation>
      <div className="flex flex-col space-y-1">
        <ScrollAnimation direction={"left"}>
          <p className="text-3xl font-NeueBold">
            Build Travel Tech That Works at Scale
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction={"left"}>
          <p className="text-lg font-NeueRoman">
            You need more than just a good-looking site. We help travel
            businesses launch reliable, high-performing platforms that
            streamline bookings, improve user experience, and support long-term
            growth.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
