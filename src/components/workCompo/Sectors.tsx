import { Link, useNavigate } from "react-router-dom";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    title: "Intraverse Africa",
    description: "A travel management system.",
    image: "/intraverseWork.png",
    link: "/work/intraverse-africa",
  },
  {
    title: "Saroafrica",
    description: "Custom Software Development",
    image: "/saroAficaWork.png",
    link: "/work/saroAfrica",
  },
  {
    title: "icarry Go",
    description: "A travel management system.",
    image: "/icarryGoWork.png",
    link: "/work/icarryGo",
  },
  {
    title: "OdioPay",
    description: "Custom Software Development",
    image: "/icarryGoWork.png",
    link: "/work/odioPay",
  },
  {
    title: "IJE Travels",
    description: "Custom Software Development",
    image: "/icarryGoWork.png",
    link: "/work/ijeTravels",
  },
];

interface Category {
  name: string;
  link: string;
}

const categories: Category[] = [
  { name: "All", link: "/work" },
  { name: "Mobile", link: "/mobile-web-apps" },
  { name: "Web", link: "/web-app" },
  { name: "E-Commerce", link: "/ecommerce" },
  { name: "API Integration", link: "/work" },
  { name: "PWA", link: "/work" },
  { name: "Cross-Platform", link: "/work" },
];

export default function Sectors() {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="py-24 flex flex-col">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 w-max px-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleClick(category.link)}
              className={`
              relative border ${
                category.name === "All"
                  ? "bg-bgRed text-white"
                  : "bg-white text-black"
              } px-6 py-2 font-NeueMedium rounded-full overflow-hidden group mt-4 md:mt-0
            `}
            >
              <span className="relative z-10 group-hover:text-white">
                {category.name}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-bgRed transition-all duration-300 ease-out origin-bottom"></div>
            </button>
          ))}
        </div>
      </div>

      <hr className="border-b border-[#A8A8AA] my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <ScrollAnimation direction={"up"}>
            <Link
              to={service.link}
              key={index}
              className="flex flex-col space-y-2 group cursor-pointer rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[400px] object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <p className="text-3xl font-NeueBold group-hover:underline">
                  {service.title}
                </p>
                <p className="text-lg font-NeueRoman">{service.description}</p>
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
