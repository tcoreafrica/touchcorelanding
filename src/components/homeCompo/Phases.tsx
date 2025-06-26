import { FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimation from "../common/ScrollAnimation";

const phaseCards = [
  {
    title: "FROM VISION TO SHIPPING",
    heading: "Leverage IoT for business growth",
    description:
      "Simulated attacks help us identify and address security issues. Don’t let preventable cyberattacks put your resources and reputation at stake.",
    imgSrc:
      "https://wp-assets.infinum.com/uploads/2023/10/img-card-unhacked.png",
  },
  {
    title: "FROM VISION TO SHIPPING",
    heading: "Leave no user behind",
    description:
      "Reach more customers, enhance your brand image, and fulfill compliance with accessible design & development practices.",
    imgSrc: "https://wp-assets.infinum.com/uploads/2024/12/img-card-a11y-2.png",
    hasButton: true,
  },
  {
    title: "SECOPS & PENTESTING",
    heading: "Penetration testing for your web app",
    description:
      "Simulated attacks help us identify and address security issues. Don’t let preventable cyberattacks put your resources and reputation at stake.",
    imgSrc:
      "https://wp-assets.infinum.com/uploads/2024/04/img-card-decoding-the-digital-ai-revolution_04-min.png",
  },
];

export default function Phases() {
  return (
    <div className="flex flex-col space-y-10 my-24">
      <div className="flex justify-between">
        <p className="font-NeueRoman">CASE STUDIES</p>
        <button className="bg-white group flex items-center text-red-500 rounded-3xl font-NeueMedium">
          Explore All
          <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {phaseCards.map((card, index) => (
          <ScrollAnimation direction={"up"}>
            <div
              key={index}
              className="bg-bgPrimary p-10 flex flex-col justify-between h-[400px] group cursor-pointer overflow-hidden"
            >
              <div className="space-y-6">
                <p className="text-lg font-NeueRoman">{card.title}</p>
                <p className="font-NeueBold text-3xl">{card.heading}</p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
              </div>
              <img
                src={card.imgSrc}
                alt={card.heading}
                className="opacity-100 group-hover:opacity-0 min-w-full h-auto max-h-[50%] object-contain transition-all duration-500 ease-in-out"
              />
              {card.hasButton && (
                <button className="relative bg-black px-3 py-1 text-white font-NeueMedium rounded-full overflow-hidden group">
                  <span className="relative z-10">Learn more</span>
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-red-500 transition-all duration-300 ease-out origin-bottom"></div>
                </button>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
