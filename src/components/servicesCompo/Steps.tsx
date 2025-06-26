import React from "react";

const steps = [
  {
    id: "01",
    title: "UNDERSTAND",
    description: "Defining the vision and strategy",
    icon: "/chatIcon.svg",
  },
  {
    id: "02",
    title: "SCOPE",
    description: "Choosing the right tools and technologies",
    icon: "/todoIcon.svg",
  },
  {
    id: "03",
    title: "BUILD",
    description: "Creating, testing, and refining the product",
    icon: "/codeIcon.svg",
  },
  {
    id: "04",
    title: "DEPLOY",
    description: "Preparing for a successful release",
    icon: "/directionIcon.svg",
  },
  {
    id: "05",
    title: "SCALE",
    description: "Improving the product with insights and data",
    icon: "/directionIcon2.svg",
  },
];

export default function Steps() {
  return (
    <div className="px-5 md:pl-64 pr-5 md:pr-20 py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, index) => {
        const isSecondRowFirstCol = index === 3;

        return (
          <React.Fragment key={index}>
            {isSecondRowFirstCol && (
              <div className="hidden md:block" /> // Empty cell for column 1
            )}
            <div className="flex flex-col space-y-6">
              <img src={step.icon} alt={step.title} className="size-14" />
              <div className="flex space-x-2">
                <p className="font-NeueBold text-2xl">{step.id}</p>
                <p className="text-2xl font-NeueRoman">{step.title}</p>
              </div>
              <p className="text-2xl font-NeueMedium">{step.description}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
