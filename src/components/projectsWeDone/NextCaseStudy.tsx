import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface NextCaseStudyProps {
  title: string;
  imageSrc: string;
  to?: string; 
}

const NextCaseStudy: React.FC<NextCaseStudyProps> = ({ title, imageSrc, to }) => {
  const navigate = useNavigate(); // change to useRouter() for Next.js
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (hovered) {
      window.addEventListener("mousemove", updatePosition);
    } else {
      window.removeEventListener("mousemove", updatePosition);
    }
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [hovered]);

  return (
    <div className="relative px-5 md:px-20 pt-12 md:pt-24 flex flex-col space-y-12 md:space-y-24">
      <p className="font-NeueRoman text-lg">Next Case Study</p>

      <div
        className="relative flex flex-col space-y-6 cursor-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate(to || "/work")}
      >
        <p className="font-NeueBold text-5xl md:text-6xl">{title}</p>
        <img src={imageSrc} alt={title} className="w-full object-cover h-60" />
      </div>

      {hovered && (
        <div
          className="fixed font-NeueMedium z-[9999] w-28 h-28 bg-[#C10000] rounded-full text-white text-lg font-bold flex items-center justify-center pointer-events-none transition-transform duration-75"
          style={{
            left: mousePos.x - 72,
            top: mousePos.y - 72,
          }}
        >
          VIEW CASE
        </div>
      )}
    </div>
  );
};

export default NextCaseStudy;
