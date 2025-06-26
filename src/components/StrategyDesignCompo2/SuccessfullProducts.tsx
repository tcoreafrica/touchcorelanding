import ScrollAnimation from "../common/ScrollAnimation";

export default function SuccessfullProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-5 md:px-20 py-24 pb-12 ">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueRoman text-lg">DIGITAL PRODUCTS WITH PURPOSE</p>
      </ScrollAnimation>
      <ScrollAnimation direction={"up"}>
        <p className="text-lg font-NeueRoman">
          Building a successful digital product goes beyond just a great idea —
          it requires a clear strategy aligned with your goals, market demand,
          and user needs. We guide you from the start to ensure you're headed in
          the right direction.
        </p>
      </ScrollAnimation>
    </div>
  );
}
