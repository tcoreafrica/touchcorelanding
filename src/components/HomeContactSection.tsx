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

function HomeContactSection() {
  return (
    <div
      className="w-full flex items-center justify-center px-2 h-[440px] lg:h-[600px]
         bg-[url('/bg-mobile.svg')] lg:bg-[url('/bg.svg')]
         bg-no-repeat bg-cover bg-center"
    >
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <img src="/logo.svg" alt="" className="w-[70px] object-contain mb-4" />
        <span className="font-bold text-white text-center text-5xl mb-4">
          Let’s Build Something Great{" "}
        </span>
        <span className=" text-[#888888] text-center text-sm mb-4">
          Do you have a project? We offer free consultation
        </span>
        <button className="h-12 rounded-md bg-white text-base flex items-center justify-center text-black px-4">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HomeContactSection;
