import React from "react";

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
