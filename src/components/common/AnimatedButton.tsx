import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface AnimatedButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  hoverColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text = "Get in touch",
  onClick,
  className = "",
  icon = <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />,
  bgColor = "bg-bgRed",
  hoverColor = "bg-black",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${bgColor} w-[140px] h-[48px] text-white font-NeueMedium rounded-full overflow-hidden group ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center h-full">
        {text}
        {icon}
      </span>
      <div
        className={`absolute inset-x-0 bottom-0 h-0 group-hover:h-full ${hoverColor} transition-all duration-300 ease-out origin-bottom`}
      ></div>
    </button>
  );
};

export default AnimatedButton;
