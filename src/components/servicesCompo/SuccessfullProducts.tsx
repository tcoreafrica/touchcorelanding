import ScrollAnimation from "../common/ScrollAnimation";

export default function SuccessfullProducts() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-10 px-5 md:px-20 py-24 pb-12 ">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueRoman text-lg">Agile result oriented team</p>
      </ScrollAnimation>
      <div className="flex flex-col space-y-3">
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueRoman">
            We specialize in building advanced mobile and web applications that
            are fast, reliable, and designed for growth. Whether it’s a sleek
            mobile app or a powerful web platform, we deliver solutions that
            elevate user experience and drive real business results.
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueRoman">
            We follow agile principles to develop and deliver a Minimum Viable
            Product (MVP) in a matter of months — not years. When you partner
            with Touchcore, you get a custom-built app aligned with your
            business objectives and designed to deliver measurable impact.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
