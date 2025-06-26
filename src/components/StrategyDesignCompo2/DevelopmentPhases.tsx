import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DevelopmentPhases() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true, 
    margin: "-100px", 
  });

  return (
    <div ref={ref}  id="development-phases"  className="scroll-mt-36">
      <motion.img
        src="/DevelopmentPhases.png"
        alt="developmentPhases"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
