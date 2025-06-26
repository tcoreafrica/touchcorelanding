import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    title: "Custom platform development",
    description:
      "Our experienced engineers are focused on creating secure custom solutions that meet your unique business needs, ensuring high performance, scalability, and availability.",
  },
  {
    title: "Solution audit and consulting",
    description:
      "Dive deep into your codebase with our backend audit and consulting, where we pinpoint security gaps, outdated dependencies, and refactor opportunities. Our technical evaluation lays out a roadmap for optimizing your applications, aligning them with current best practices and future-proofing against evolving tech trends.experience.",
  },
  {
    title: "Cloud services",
    description:
      "With advanced automation and highly available, scalable infrastructure, we enhance productivity and accelerate growth for your business. Securely transfer your critical data with minimal workflow disruption and smooth onboarding, all while optimizing costs.experience.",
  },
  {
    title: "API integration services",
    description:
      "Specializing in API integration, we ensure seamless connectivity between your software and a wide array of external platforms and services. Our approach streamlines data exchange and functionality across your ecosystem, enhancing user experiences and operational efficiency.",
  },
  {
    title: "Backend upgrade and modernization",
    description:
      "Tackle legacy system challenges head-on with our backend modernization services. We refactor code, migrate to modern stacks, and break down monolithic architectures into microservices, enhancing scalability and security. By embracing the latest tech and methodologies, we ensure your backend is optimized for peak performance, ready to handle new business demands with agility.",
  },
  {
    title: "Backend integration services",
    description:
      "Our backend integration expertise enables the smooth incorporation of new features and systems, ensuring your architecture remains cohesive and functional. From complex API integrations to custom enterprise resource planning (ERP) and customer relationship management (CRM) solutions, we ensure your systems communicate effectively, boosting efficiency across your digital infrastructure.",
  },
  {
    title: "Enterprise ML and AI implementations",
    description:
      "Upgrade your enterprise systems with our ML and AI implementations, designed to automate processes, customize user experiences, and drive operational efficiency. By embedding smart, data-driven functionalities into your backend, we unlock new capabilities and insights, helping you leverage the power of AI to stay competitive and innovative.",
  },
];

export default function OurServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-5 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
      <ScrollAnimation direction={"up"}>
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
              <ScrollAnimation direction={"fade"}>
                <div className="flex justify-between items-center">
                  <p className="font-NeueMedium text-xl md:text-3xl">
                    {service.title}
                  </p>
                  {isExpanded ? (
                    <FaArrowAltCircleDown className="size-6 text-bgRed transition-transform duration-300" />
                  ) : (
                    <FaArrowAltCircleRight className="size-6 transition-transform duration-300" />
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
