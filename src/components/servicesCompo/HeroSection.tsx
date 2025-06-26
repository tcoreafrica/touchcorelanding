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

export default function HeroSection() {
  return (
    <motion.div
      className="bg-white px-5 md:px-20 pt-24 pb-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ScrollAnimation direction="up">
        <div className="flex flex-col space-y-7">
          <p className="font-NeueBold text-6xl md:text-8xl">
            Next-level mobile <br /> and web app <br /> development
          </p>
        </div>
      </ScrollAnimation>

      <motion.div
        className="flex justify-between  md:justify-end items-center md:space-x-40 mt-20"
        variants={container}
      >
        <ScrollAnimation direction="up">
          <p className="text-lg font-NeueRoman">
            Propel your businesses forward with{" "}
            <br className="hidden md:block" /> high-performing app solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction="up">
          <div>
            <FaArrowAltCircleDown className="text-2xl" />
          </div>
        </ScrollAnimation>
      </motion.div>
    </motion.div>
  );
}
