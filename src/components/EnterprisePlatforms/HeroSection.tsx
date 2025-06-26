import { motion } from "framer-motion";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ScrollAnimation from "../common/ScrollAnimation";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

type HeroSectionProps = {
  title: React.ReactNode;
  subtitle?: string;
  showArrow?: boolean;
  className?: string;
};

export default function HeroSection({
  title,
  subtitle,
  showArrow = true,
  className = "",
}: HeroSectionProps) {
  return (
    <motion.div
      className={`bg-white px-5 md:px-20 pt-24 pb-20 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex flex-col space-y-7" variants={container}>
        <div className="font-NeueBold text-4xl md:text-8xl">{title}</div>
      </motion.div>

      {(subtitle || showArrow) && (
        <motion.div
          className="flex justify-between md:justify-end items-center md:space-x-40 mt-20"
          variants={container}
        >
          {subtitle && (
            <ScrollAnimation direction="up">
              <p className="text-lg font-NeueRoman">{subtitle}</p>
            </ScrollAnimation>
          )}
          {showArrow && (
            <div>
              <FaArrowAltCircleDown className="text-2xl hover:text-bgRed cursor-pointer" />
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
