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
  const scrollToPhases = () => {
    const element = document.getElementById("development-phases");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      className="bg-white px-5 md:px-20 pt-24 pb-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex flex-col space-y-7" variants={container}>
        <ScrollAnimation direction="up">
          <motion.p className="font-NeueBold text-3xl md:text-8xl">
            Impactful digital <br /> experiences through <br /> smart design and
            strategy.
          </motion.p>
        </ScrollAnimation>
      </motion.div>

      <motion.div
        className="flex justify-end items-center space-x-40 mt-20"
        variants={container}
      >
        <ScrollAnimation direction="up">
          <motion.p className="text-lg font-NeueRoman">
            Turning promising ideas into products that <br /> shape the digital
            landscape
          </motion.p>
        </ScrollAnimation>
        <ScrollAnimation direction="up">
          <motion.div>
            <FaArrowAltCircleDown
              onClick={scrollToPhases}
              className="text-2xl hover:text-bgRed cursor-pointer"
            />
          </motion.div>
        </ScrollAnimation>
      </motion.div>
    </motion.div>
  );
}
