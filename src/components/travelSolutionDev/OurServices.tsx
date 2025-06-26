import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    title: "Custom Travel Portal Development",
    description:
      "We build fully tailored travel portals designed to match your brand, business goals, and customer needs. From flight and hotel bookings to tours, insurance, and payments — your portal comes equipped with all the tools needed to manage, sell, and scale your travel business. Whether you’re targeting B2B agents or direct consumers, we create a seamless, user-friendly experience that drives bookings and boosts revenue.",
  },
  {
    title: "GDS and 3rd party API Integration",
    description:
      "We are certified integrators for Amadeus, Sabre and Travelport.We seamlessly connect your platform to Global Distribution Systems (GDS) and third-party APIs to unlock real-time access to flights, hotels, tours, and more. Our integrations ensure accurate data, smooth transactions, and a faster time-to-market — giving your travel or booking platform the competitive edge it needs.",
  },
  {
    title: "B2B and B2C Solutions",
    description:
      "Whether you're targeting consumers or corporate partners, we design scalable solutions that deliver a smooth user experience on all devices.",
  },
];

export default function OurServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-5 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
      <ScrollAnimation direction={"right"}>
        <p className="font-NeueRoman text-lg">OUR SERVICES</p>
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
              <ScrollAnimation direction={"left"}>
                <div className="flex justify-between items-center">
                  <p className="font-NeueBold text-xl md:text-3xl">
                    {service.title}
                  </p>
                  {isExpanded ? (
                    <FaArrowAltCircleDown className="size-7 text-bgRed transition-transform duration-300" />
                  ) : (
                    <FaArrowAltCircleRight className="size-7 transition-transform duration-300" />
                  )}
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
