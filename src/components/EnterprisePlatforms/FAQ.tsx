import { useState } from "react";
import AnimatedButton from "../common/AnimatedButton";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    title:
      "What types of enterprises benefit from custom enterprise platforms?",
    description:
      "Our experienced engineers are focused on creating secure custom solutions that meet your unique business needs, ensuring high performance, scalability, and availability.",
  },
  {
    title:
      "How does Touchcore make sure the platform aligns with our business goals?",
    description:
      "We deliver user-centered designs that are not only visually compelling but also highly functional and intuitive, enhancing the overall user experience.",
  },
  {
    title:
      "Can you design a platform that integrates with our existing enterprise applications and software?",
    description:
      "We deliver user-centered designs that are not only visually compelling but also highly functional and intuitive, enhancing the overall user experience.",
  },
  {
    title: "When should you choose Ruby on Rails for a project?",
    description:
      "We deliver user-centered designs that are not only visually compelling but also highly functional and intuitive, enhancing the overall user experience.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="px-5 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col space-y-2">
          <p className="font-NeueBold text-5xl">FAQs</p>
          <p className="text-lg font-NeueRoman">
            Got questions? We’ve got answers.
          </p>
          <AnimatedButton
            text="Get in touch"
            //   onClick={() => alert("Button clicked")}
          />
        </div>
      </ScrollAnimation>

      <div className="flex flex-col space-y-4">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col space-y-2 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <ScrollAnimation direction={"fade"}>
                <div className="flex justify-between items-start space-x-4">
                  <p className="font-NeueRoman text-lg">{service.title}</p>
                  <div>
                    {isExpanded ? (
                      <IoMdArrowDropdownCircle className="size-8 text-bgRed transition-transform duration-300" />
                    ) : (
                      <IoMdArrowDroprightCircle className="size-8 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </ScrollAnimation>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-NeueRoman text-lg">{service.description}</p>
              </div>
              <hr className="border-b border-[#E3EBF5]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
