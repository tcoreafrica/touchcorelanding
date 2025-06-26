import ScrollAnimation from "../common/ScrollAnimation";

const uiDesignPhases = [
  {
    number: 8,
    title: "Branding",
    description:
      "Crafting the visual and verbal elements that shape the identity of your product and company, making you recognizable, memorable, and distinct in the market.",
  },
  {
    number: 9,
    title: "Screen designs",
    description:
      "Creating and refining interface screens based on proven UI principles to ensure clarity, consistency, and a seamless user experience.",
  },
  {
    number: 10,
    title: "Interactions & motion designs",
    description:
      "Enhancing user experience by adding dynamic, engaging animations and interactions that make digital products feel responsive and alive.",
  },
  {
    number: 11,
    title: "Design system",
    description:
      "Creating a unified set of design components and guidelines that streamline development and ensure consistency, making future updates faster and more efficient.",
  },
  {
    number: 12,
    title: "Accessibility benchmarking",
    description:
      "Designing products that are inclusive and usable for over 20% of users with disabilities — including those with visual, auditory, motor, or cognitive impairments — to ensure equal access and a better overall experience.",
  },
];

export default function StrategyThree() {
  return (
    <div className="bg-[#9DBAAC] px-5 md:px-20 py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
        <ScrollAnimation direction={"up"}>
          <div className="flex space-x-2 col-span-1">
            <p className="font-NeueBold text text-2xl">03</p>
            <p className="font-NeueRoman text text-2xl">UX DESIGN</p>
          </div>
        </ScrollAnimation>
        <div className="col-span-3 flex flex-col space-y-6">
          <ScrollAnimation direction={"up"}>
            <p className="text-3xl font-NeueBold">
              Boost product engagement by designing a user <br /> interface
              that’s both visually captivating and <br />
              effortlessly intuitive.
            </p>
          </ScrollAnimation>
          <hr className="border-b border-[#939183]" />
          <div className="grid grid-cols-2 gap-6">
            {uiDesignPhases.map((item) => (
              <ScrollAnimation direction={"up"}>
                <div key={item.number} className="flex flex-col space-y-9">
                  <div className="bg-bgRed text-white size-16 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                    {item.number}
                  </div>
                  <p className="text-3xl font-NeueMedium">{item.title}</p>
                  <p className="text-lg font-NeueRoman">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
