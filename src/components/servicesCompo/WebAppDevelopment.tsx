import { FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimation from "../common/ScrollAnimation";

export default function WebAppDevelopment() {
  return (
    <div className="flex flex-col space-y-16 px-5 md:px-20 py-24 ">
      <ScrollAnimation direction={"up"}>
        <p className="text-5xl md:text-7xl font-NeueBold">
          Web app <br /> development
        </p>
      </ScrollAnimation>
      <hr className="border-b border-[#A8A8AA]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueBold ">AREAS OF EXPERTISE</p>
        </ScrollAnimation>
        <div className="flex flex-col space-y-8 ">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueRoman text-lg">
              Collaborate with Touchcore to speed up development, upgrade legacy
              systems, and create a dependable web application powered by
              cutting-edge technology.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-6">
              <p className="font-NeueBold text-3xl">Frontend</p>
              <p className="font-NeueRoman text-lg">
                We work with leading frontend frameworks such as React.js,
                Vue.js, and Angular to build intuitive and responsive user
                interfaces — the visible layer of your product that delivers
                seamless user experiences.
              </p>
            </div>
          </ScrollAnimation>
          <hr className="border-b border-[#A8A8AA]" />
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-6">
              <p className="font-NeueBold text-3xl">Backend</p>
              <p className="font-NeueRoman text-lg">
                We leverage powerful server-side technologies like Node.js,
                Python and Ruby on Rails to prototype and build high-performance
                web applications that are fast, scalable, and built for growth.
              </p>
            </div>
          </ScrollAnimation>
          <hr className="border-b border-[#A8A8AA]" />
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-6">
              <p className="font-NeueBold text-3xl">Full Stack</p>
              <p className="font-NeueRoman text-lg">
                We provide end-to-end web development by seamlessly integrating
                frontend and backend solutions, along with the right
                technologies, to ensure your product is functional, scalable,
                and ready for success.
              </p>
            </div>
          </ScrollAnimation>
          <hr className="border-b border-[#A8A8AA]" />
            <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-6">
              {[
              "Cloud development",
              "Web applications",
              "Content Management System",
              "Website architecture",
              ].map((item) => (
              <div key={item} className="flex space-x-6 items-center">
                <div className="bg-red-500 rounded-full size-3"></div>
                <p className="font-NeueBold text-lg">{item}</p>
              </div>
              ))}
            </div>
            </ScrollAnimation>
          <div>
            <button className="relative bg-red-500 w-[190px] h-[48px] text-white  font-NeueMedium rounded-full overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center h-full">
                Get in touch
                <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-black transition-all duration-300 ease-out origin-bottom"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
