import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ExpandingVideo = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.79]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 750]);

  return (
    <div className="flex flex-col items-start pb-0 md:pb-[600px]">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 w-full">
        {/* Left Paragraph */}
        <p className="w-full md:w-1/3 text-gray-700 ml-5 md:ml-20 font-NeueRoman">
          Your trusted partner in solving complex problems with technology since 2005.
        </p>

        {/* Video Section */}
        {isMobile ? (
          <div className="w-full h-[250px] ">
            <video
              src="/VideoAnime.mp4"
              poster="/HeroMain.png" // Specify the path to your backup image
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ) : (
          <motion.div ref={ref} style={{ scale, y }} className="max-w-full min-w-1/3">
            <video
              src="/VideoAnime.mp4"
              poster="/HeroMain.png" // Specify the path to your backup image
              autoPlay
              muted
              loop
              className="w-full h-auto object-contain"
            />
          </motion.div>
        )}

        {/* Right Paragraph */}
        <div className="flex flex-col space-y-3 mr-20 w-full md:w-1/3">
          <p className="text-lg font-NeueRoman ">
            The ratings are in – our clients love working with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpandingVideo;