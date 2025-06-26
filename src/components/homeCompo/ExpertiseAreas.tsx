import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    title: "Travel Platform Development",
    path: "/travel-solution-development",
  },
  { title: "Product and User Interface Design", path: "/product-design" },
  { title: "Mobile and Web App Development", path: "/mobile-web-apps" },
  { title: "Custom Website Design", path: "/web-app" },
  { title: "Enterprise Platforms", path: "/enterprise-platform" },
  { title: "E-Commerce", path: "/ecommerce" },
  { title: "AI Business Solutions", path: "/" },
];

function ExpertiseAreas() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-10 mt-14 pb-20 px-5 md:px-20">
      <hr className="border-b border-[#C4CEDE] w-full" />
      <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2">
        <ScrollAnimation direction={"up"}>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-NeueMedium">AREAS OF EXPERTISE</p>
            <p className="text-lg">
              Improve your processes, serve more <br /> customers, and grow your
              business with <br />
              cutting-edge technology.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ScrollAnimation direction={"up"}>
              <React.Fragment key={index}>
                <div
                  className="flex justify-between items-center w-full group cursor-pointer transition-all duration-300 transform hover:translate-x-2  py-4 rounded"
                  onClick={() => navigate(service.path)}
                >
                  <p className="font-NeueBold text-2xl md:text-3xl text-black">
                    {service.title}
                  </p>
                  <div>
                    <FaCircleArrowRight className=" text-2xl ml-24 text-black group-hover:text-red-500 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {index !== services.length - 1 && (
                  <hr className="border-b border-[#E3EBF5] w-full my-2" />
                )}
              </React.Fragment>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseAreas;
