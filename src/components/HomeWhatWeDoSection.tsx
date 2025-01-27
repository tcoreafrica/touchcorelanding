import React from "react";

const items = [
  {
    title: "Custom Software Development",
    description:
      "No matter how complex your business challenges, we develop tailor-made solutions that solve problems and drive growth.",
  },
  {
    title: "Web Application Development",
    description:
      "From robust e-commerce platforms to dynamic content management systems, we create web solutions tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Whether it’s iOS, Android, or cross-platform, our mobile apps combine user-centric design with seamless functionality to keep your audience engaged.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive, aesthetically pleasing interfaces that prioritize user experience, turning ideas into visually stunning and easy-to-use products.",
  },
  {
    title: "PWA Development",
    description:
      "Develop versatile applications that work seamlessly across devices.",
  },
  {
    title: "API Integration",
    description: "Streamline processes with seamless third-party integrations.",
  },
];

function HomeWhatWeDoSection() {
  return (
    <div className="w-full flex items-center justify-center px-2 pt-32 pb-44">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="font-bold text-white text-3xl mb-20 flex flex-col lg:flex-row items-start lg:items-end gap-2">
          <span>What we do?</span>{" "}
          <span className="text-[#888888] text-sm font-normal mb-1">
            Providing cutting-edge IT services
          </span>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {items?.map((item, index) => (
            <div key={index} className="w-full lg:w-[30%] flex flex-col">
              <h3 className="text-white text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-[#888888] leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeWhatWeDoSection;
