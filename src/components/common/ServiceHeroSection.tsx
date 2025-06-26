import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface HeroSectionProps {
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

export default function ServiceHeroSection({
  title,
  description,
  className = "",
}: HeroSectionProps) {
  return (
    <motion.div
      className={`bg-white px-5 md:px-20 pt-24 pb-20 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col space-y-7">
          <p className="font-NeueBold text-4xl md:text-8xl">{title}</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation direction={"up"}>
        <div className="flex justify-between md:justify-end items-center md:space-x-40 mt-20">
          <div className="text-lg font-NeueRoman">{description}</div>
          <div>
            <FaArrowAltCircleDown className="text-2xl hover:text-bgRed cursor-pointer" />
          </div>
        </div>
      </ScrollAnimation>
    </motion.div>
  );
}
