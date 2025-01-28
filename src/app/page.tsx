"use client";

import React, { Suspense, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeContactSection from "@/components/HomeContactSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeTestimonySection from "@/components/HomeTestimonySection";
import HomeWhatWeDoSection from "@/components/HomeWhatWeDoSection";

export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleUp = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOnLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <div className="w-full flex flex-col bg-black min-h-screen relative">
        <Header />
        <HomeHeroSection
          onContact={handleContact}
          onLearnMore={handleOnLearnMore}
        />
        <HomeTestimonySection />
        {/* The target section for smooth scrolling */}
        <div ref={learnMoreRef}></div>
        <HomeWhatWeDoSection />
        <HomeContactSection onContact={handleContact} />
        <Footer handleUp={handleUp} />
        <div ref={contactRef}></div>
      </div>
    </Suspense>
  );
}
