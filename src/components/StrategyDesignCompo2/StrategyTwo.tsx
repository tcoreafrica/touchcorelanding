import ScrollAnimation from "../common/ScrollAnimation";
const designSteps = [
  {
    number: 5,
    title: "Information architecture",
    description:
      "Thoughtfully structuring menus, content, and features to create a seamless and intuitive user experience.",
  },
  {
    number: 6,
    title: "Wireframing",
    description:
      "We translate ideas into wireframes — low-fidelity layouts that allow for quick testing, feedback, and iteration.",
  },
  {
    number: 7,
    title: "Prototyping & user testing",
    description:
      "We create interactive prototypes that simulate the final product, allowing real users to test and provide valuable feedback early in the design process.",
  },
];

export default function StrategyTwo() {
  return (
    <div className="bg-[#C2B6D3] px-5 md:px-20 py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
        <ScrollAnimation direction={"up"}>
          <div className="flex space-x-2 col-span-1">
            <p className="font-NeueBold text text-2xl">02</p>
            <p className="font-NeueRoman text text-2xl">UX DESIGN</p>
          </div>
        </ScrollAnimation>
        <div className="col-span-3 flex flex-col space-y-6">
          <ScrollAnimation direction={"up"}>
            <p className="text-3xl font-NeueBold">
              Confusing labels, misplaced buttons, and low-contrast visuals can
              frustrate users — fix the basics early before they become costly
              mistakes.
            </p>
          </ScrollAnimation>
          <hr className="border-b border-[#939183]" />
          <ScrollAnimation direction={"up"}>
            <div className="grid grid-cols-2 gap-6">
              {designSteps.map((step) => (
                <div key={step.number} className="flex flex-col space-y-9">
                  <div className="bg-bgRed text-white size-16 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                    {step.number}
                  </div>
                  <p className="text-3xl font-NeueMedium">{step.title}</p>
                  <p className="text-lg font-NeueRoman">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <hr className="border-b border-[#939183]" />
          <ScrollAnimation direction={"up"}>
            <div className="flex space-x-4 flex-wrap gap-2">
              {[
                "Wireframing",
                "Information architecture",
                "Accessibility",
                "Interactive prototypes",
                "Sitemap",
                "User journey maps",
                "User testing",
              ].map((label) => (
                <div
                  key={label}
                  className="bg-[#A78BCD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium"
                >
                  {label}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
