import { FaArrowRightLong, FaCircleArrowRight } from "react-icons/fa6";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    id: 1,
    title: "Changing the norms with AI driven solutions one bot at a time",
    image: "/AI.png",
    alt: "Changing the norms with AI driven solutions one bot at a time",
  },
  {
    id: 2,
    title: "Changing the norms with AI driven solutions one bot at a time",
    image: "/AI.png",
    alt: "Changing the norms with AI driven solutions one bot at a time",
  },
];

export default function NewServices() {
  return (
    <div className="flex flex-col space-y-10 mt-24">
      <div className="flex justify-between">
        <p className="font-NeueRoman">IN THE NEWS</p>
        <button className="bg-white group flex items-center text-red-500 rounded-3xl font-NeueMedium">
          Explore All
          <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
        </button>
      </div>

      {/* Services List */}
      <div className="flex flex-col space-y-6 w-full">
        {services.map((service) => (
          <ScrollAnimation direction={"up"}>
            <div
              key={service.id}
              className="grid grid-cols-3 gap-5 md:gap-12 w-full"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-[150px] md:w-[400px] h-[120px] md:h-[225px]"
              />
              <div className="flex col-span-2 flex-col justify-between">
                <div className="flex justify-between group">
                  <p className="text-lg  md:text-3xl font-NeueBold group-hover:underline">
                    {service.title}
                  </p>
                  <FaCircleArrowRight className="text-3xl ml-24 text-black group-hover:text-red-500 rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <button className="relative bg-black px-3 py-1 text-white font-NeueMedium rounded-full overflow-hidden group">
                    <span className="relative z-10">News</span>
                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-red-500 transition-all duration-300 ease-out origin-bottom"></div>
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
