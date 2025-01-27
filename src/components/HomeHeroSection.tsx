import React from "react";

function HomeHeroSection() {
  return (
    <div className="w-full flex flex-col min-h-[70vh] items-center justify-center text-white px-2">
      <h1 className="font-bold text-4xl lg:text-7xl text-white text-center max-w-5xl">
        A Decade of Innovation and Excellence
      </h1>
      <span className="uppercase text-[#888888] text-center text-xl lg:text-2xl mt-10">
        Something Big Is Coming Soon!
      </span>
      <p className="text-[#888888] text-sm max-w-3xl text-center mt-2">
        As we celebrate <span className="text-white">10 incredible years</span>{" "}
        of delivering <span className="text-white">cutting-edge </span>
        web and mobile solutions, we’re thrilled to announce that Touchcore is
        undergoing an exciting transformation. A brand-new website is on its
        way, designed to better showcase our services, achievements, and
        commitment to innovation.
      </p>
      <div className="flex items-center gap-3 mt-14">
        <button className="text-sm h-12 rounded-md flex items-center justify-center px-4 text-black bg-white">
          Learn More
        </button>
        <button className="text-sm h-12 rounded-md flex items-center justify-center px-4 text-white border border-gray-700">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HomeHeroSection;
