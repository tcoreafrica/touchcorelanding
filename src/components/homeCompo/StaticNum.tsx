"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useMotionValue, animate } from "framer-motion";
import ScrollAnimation from "../common/ScrollAnimation";

const AnimatedCounter = ({ from = 0, to }: { from?: number; to: number }) => {
  const [count, setCount] = useState(from);
  const motionValue = useMotionValue(from);

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });
    return controls.stop;
  }, [to, motionValue]);

  return <span>{count}+</span>;
};

export default function StaticNum() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-96 pb-16 px-5 md:px-20"
    >
      <ScrollAnimation direction={"right"}>
        <div>
          <p className="text-lg text-wrap font-NeueRoman">
            At Touchcore, we transform bold ideas into scalable{" "}
            <br className="hidden md:block" /> software solutions that help
            business innovate and grow
            <br className="hidden md:block" /> innovate and grow using
            cutting-edge technologies
            <br className="hidden md:block" /> strategies.
          </p>
        </div>
      </ScrollAnimation>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-10">
          <p className="text-sm font-NeueMedium">YEARS</p>
          <p className="text-7xl text-[#1F1F21] font-NeueBold">
            {inView ? <AnimatedCounter to={10} /> : "0+"}
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <p className="text-sm font-NeueMedium">completed projects</p>
          <p className="text-7xl text-[#1F1F21] font-NeueBold">
            {inView ? <AnimatedCounter to={134} /> : "0+"}
          </p>
        </div>
      </div>
    </div>
  );
}
