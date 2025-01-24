import React from "react";

function HomeHeroSection() {
  return (
    <div className="w-full flex flex-col min-h-[70vh] items-center justify-center text-white px-2">
      <h1 className="font-bold text-4xl lg:text-7xl text-white text-center">
        We’re up-to something NEW!
      </h1>
      <span className="uppercase text-[#888888] text-center text-xl lg:text-2xl mt-10">
        It’s been a decade and we’re changing the game.
      </span>
      <p className="text-[#888888] text-sm max-w-3xl text-center mt-2">
        At Touchcore, we transform bold ideas into{" "}
        <span className="text-white">powerful software solutions</span>. With
        expertise in web and mobile app development, we help businesses{" "}
        <span className="text-white">innovate </span>
        and <span className="text-white">scale </span> using advanced
        technologies and custom strategies.
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
