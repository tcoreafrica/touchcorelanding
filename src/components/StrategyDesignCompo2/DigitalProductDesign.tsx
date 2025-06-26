import ScrollAnimation from "../common/ScrollAnimation";

export default function DigitalProductDesign() {
  return (
    <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 pt-24 pb-12">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueBold text-3xl">
          What is digital product <br />
          design and strategy?
        </p>
      </ScrollAnimation>

      <div className="flex flex-col space-y-6">
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueRoman">
            At Touchcore, we work alongside you to plan and design digital
            products that strengthen your brand and support your business
            objectives.
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueRoman">
            By blending user-centered design (UX/UI) with a clear product
            strategy, we create solutions that are not only visually engaging
            but also effective and market-ready. From the initial strategy
            session to the final launch, our team combines creativity with
            data-driven insights to help your business grow and thrive in new
            markets.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
