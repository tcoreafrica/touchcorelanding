"use client";

import { motion, Transition } from "framer-motion";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as Transition["ease"] } },
};

type HeroSectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
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
        <motion.div variants={child} className="font-NeueBold text-4xl md:text-8xl">
          {title}
        </motion.div>
      </motion.div>

      {(subtitle || showArrow) && (
        <motion.div
          className="flex justify-between md:justify-end items-center md:space-x-40 mt-20"
          variants={container}
        >
          {subtitle && (
            <motion.p variants={child} className="text-lg font-NeueRoman">
              {subtitle}
            </motion.p>
          )}
          {showArrow && (
            <motion.div variants={child}>
              <FaArrowAltCircleDown className="text-2xl hover:text-bgRed cursor-pointer" />
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
