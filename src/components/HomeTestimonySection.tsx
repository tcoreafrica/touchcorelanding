"use client";

import React, { useRef, useState, useEffect } from "react";

const testimony = [
  {
    name: "John Doe",
    title: "CEO, XYZ Company",
    review:
      "Touchcore helped us create a scalable e-commerce platform for our skincare brand. They were incredibly professional...",
  },
  {
    name: "John Doe",
    title: "CEO, ABC Inc",
    review:
      "Their solutions and support were top-notch, and we've seen major improvements in our user engagement...",
  },
  {
    name: "Jane Smith",
    title: "Founder, Sample Startup",
    review:
      "One of the best development teams I’ve worked with! They delivered on time and exceeded our expectations...",
  },
  {
    name: "Marcos Reyes",
    title: "CTO, Tech Solutions",
    review:
      "We needed a reliable partner for continuous delivery. Touchcore's approach to agile development was perfect...",
  },
];

function HomeTestimonySection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % testimony.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * active,
        behavior: "smooth",
      });
    }
  }, [active]);

  const handleDotClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center px-2 min-h-[40vh] lg:min-h-screen">
      <div className="w-full max-w-4xl flex flex-col">
        <div className="flex items-start w-full gap-6">
          <div
            ref={scrollRef}
            className="flex flex-1 overflow-hidden mt-6"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex flex-row">
              {testimony?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-shrink-0 text-sm w-full justify-center"
                >
                  <p className="text-white mb-1 hidden lg:flex">
                    {item.review}
                  </p>
                  <span className="font-semibold text-primary">
                    {item.name}
                  </span>
                  <span className="text-[#888888]">{item.title}</span>
                  <p className="text-white mb-1 flex lg:hidden">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-1">
            <img
              src="/code.png"
              alt="Some alt text"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center mt-8 gap-2 flex-wrap">
          {testimony.map((_, index) => (
            <div key={index}>
              <div
                onClick={() => handleDotClick(index)}
                className={`w-10 h-[5px] rounded-full cursor-pointer 
                  ${index === active ? "bg-primary" : "bg-[#404042]"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonySection;
