import ScrollAnimation from "../common/ScrollAnimation";

const outcomes = [
  {
    title: "Match E-commerce Tech to Real Business Goals",
    description:
      "The right e-commerce setup depends on what you sell, how you sell it, and who you're selling to. We help you align your digital tools with actual business outcomes, not trends or buzzwords.",
    points: [
      "Launching a New Product?",
      "Selling Across Channels?",
      "Subscription-Based Model?",
      "Expanding Globally?",
    ],
  },
  {
    title: "Start With the Problem, Not the Platform",
    description:
      "Choosing the right e-commerce solution starts with understanding your core business challenges. We help you identify the use case that brings measurable results without overbuilding.",
    points: [
      "Frequent Product Drops?",
      "Complex Shipping Rules?",
      "Rebranding or Redesign?",
      "Limited Internal Resources?",
    ],
  },
];

export default function OutComesModern() {
  return (
    <div className="px-5 md:px-24 my-24 flex flex-col space-y-14">
      {outcomes.map((section, idx) => (
        <ScrollAnimation direction={"up"}>
          <div key={idx} className="flex flex-col space-y-14">
            <hr className="border-b border-[#939183]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 ">
              <p className="text-2xl md:text-3xl font-NeueBold">
                {section.title}
              </p>
              <div className="flex flex-col space-y-4 md:col-span-2">
                <p className="text-base md:text-2xl font-NeueRoman">
                  {section.description}
                </p>
                <ul className="flex flex-col space-y-4 text-base md:text-lg font-NeueRoman">
                  {section.points.map((item, index) => (
                    <li
                      key={index}
                      className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-red-500 before:text-2xl md:before:text-4xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
      <hr className="border-b border-[#939183]" />
    </div>
  );
}
