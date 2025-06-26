import { FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimation from "../common/ScrollAnimation";

export default function OurTechStack() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 py-24 ">
      <div className="grid grid-cols-4 gap-14 md:gap-0">
        <ScrollAnimation direction={"fade"}>
          <div className="flex space-x-2 col-span-4 md:col-span-1">
            <p className="font-NeueRoman text text-2xl">OUR TECH STACK</p>
          </div>
        </ScrollAnimation>
        <div className="col-span-4 md:col-span-3 flex flex-col space-y-6">
          <ScrollAnimation direction={"up"}>
            <p className="text-2xl md:text-3xl font-NeueBold">
              We bring deep{" "}
              <span className="text-bgRed ">
                {" "}
                engineering expertise <br />
                across technologies,
              </span>{" "}
              choosing the best-fit solutions to <br /> match your specific
              business needs.
            </p>
          </ScrollAnimation>
          <hr className="border-b border-[#A8A8AA]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation direction={"up"}>
              <div className="flex flex-col space-y-6">
                <p className="font-NeueRoman text-lg">RAILS</p>
                <div className="flex space-x-4">
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    Ruby
                  </div>
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    Ruby on Rails
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction={"up"}>
              <div className="flex flex-col space-y-6">
                <p className="font-NeueRoman text-lg">NODE.JS</p>
                <div className="flex space-x-4">
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    JavaScript
                  </div>
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    NestJS
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-b border-[#A8A8AA]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation direction={"up"}>
              <div className="flex flex-col space-y-6">
                <p className="font-NeueRoman text-lg">JAVA</p>
                <div className="flex space-x-4">
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    Java
                  </div>
                  <div className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center">
                    Spring
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction={"up"}>
              <div className="flex flex-col space-y-6">
                <p className="font-NeueRoman text-lg">.NET</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    "EF Core",
                    "Web API",
                    "MVC",
                    "Blazor",
                    "SignalR",
                    "xUnit",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="bg-white px-6 py-2 text-sm font-NeueMedium rounded-full flex items-center justify-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-b border-[#A8A8AA]" />
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-NeueRoman">SUPPORTING TECHNOLOGIES</p>
              <div className="flex space-x-4 flex-wrap gap-4">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "Oracle",
                  "InfluxDB",
                  "Python",
                  "Bash",
                  "Elasticsearch",
                  "Opensearch",
                  "AWS Lambda",
                  "Azure Functions",
                  "Redis",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white text-sm py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <button className="relative  bg-red-500 w-[140px] h-[48px] text-white  font-NeueMedium rounded-full overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center h-full">
                    Get in touch
                    <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-black transition-all duration-300 ease-out origin-bottom"></div>
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
