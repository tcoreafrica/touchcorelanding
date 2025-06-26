import ScrollAnimation from "../common/ScrollAnimation";

const strategySteps = [
  {
    number: 1,
    title: "Vision & Alignment Workshops",
    description:
      "Clarify your product vision and goals through collaborative design thinking sessions.",
  },
  {
    number: 2,
    title: "Product-Market Fit Interviews",
    description:
      "Test key assumptions by conducting targeted interviews with your ideal users.",
  },
  {
    number: 3,
    title: "Go-to-market strategy",
    description:
      "Develop a strategy to attract, retain, and monetize users while staying true to your brand's mission.",
  },
  {
    number: 4,
    title: "Competitor analysis",
    description:
      "Gain an edge by learning from your competitors’ successes and sidestepping their failures.",
  },
];

export default function StrategyOne() {
  return (
    <div className="bg-[#FFCFCF] px-5 md:px-20 py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
        <div className="flex space-x-2 col-span-1">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueBold text text-2xl">01</p>
            <p className="font-NeueRoman text text-2xl">STRATEGY</p>
          </ScrollAnimation>
        </div>
        <div className="col-span-3 flex flex-col space-y-6">
          <ScrollAnimation direction={"up"}>
            <p className="text-3xl font-NeueBold">
              An alarming 95% of digital products fail within their first year —
              most often because they lack a strong product-market fit.
            </p>
          </ScrollAnimation>
          <hr className="border-b border-[#939183]" />
          <div className="grid grid-cols-2 gap-6">
            {strategySteps.map((step) => (
              <ScrollAnimation direction={"up"}>
                <div key={step.number} className="flex flex-col space-y-9">
                  <div className="bg-bgRed text-white size-16 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                    {step.number}
                  </div>
                  <p className="text-3xl font-NeueMedium">{step.title}</p>
                  <p className="text-lg font-NeueRoman">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <hr className="border-b border-[#939183]" />
          <ScrollAnimation direction={"up"}>
            <div className="flex space-x-4 flex-wrap gap-2">
              {[
                "Business planning",
                "Product goals",
                "User personas",
                "User journey",
                "Competitive analysis report",
                "Go-to-market strategy",
                "Interview report",
                "Value-effort matrix",
              ].map((label) => (
                <div
                  key={label}
                  className="bg-[#939183] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium"
                >
                  {label}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation direction={"up"}>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-16 mt-16">
          <img
            src="/productDesign1.png"
            alt="product design"
            className=" col-span-5 md:col-span-3 w-full h-[500px]"
          />
          <img
            src="/productDesign2.png"
            alt="product design"
            className=" col-span-5 w-full h-[500px]"
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}
