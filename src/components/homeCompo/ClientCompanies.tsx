import { motion } from "framer-motion";
import ScrollAnimation from "../common/ScrollAnimation";

const images = [
  "IcarryGoBlackLogo.svg",
  "OdioPayLogo.svg",
  "SaroAfricaLogo.svg",
  "ZattaneryLogo.svg",
  "AlfajiLogo.svg",
  "IntraverseLogo.svg",
  "FixerLogo.svg",
  "CoopxLogo.svg",
  "DripyLogo.svg",
  "Kcm.svg",
];

export default function ClientCompanies() {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex flex-col space-y-14 mt-28 overflow-hidden">
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col items-center justify-center w-full space-y-7">
          <p className="text-6xl font-NeueBold">You are in great company</p>
          <p className="text-base font-NeueRoman">
            For over 10 years, our experts have helped iconic companies bring
            exciting new products to market fast.
          </p>
        </div>
      </ScrollAnimation>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={`/${src}`}
              alt={`Logo of ${src.replace(".svg", "")}`}
              className="flex-shrink-0 w-24 h-12 object-contain"
              onError={() => console.error(`Failed to load image: ${src}`)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
