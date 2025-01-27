"use client";

import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeContactSection from "@/components/HomeContactSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeTestimonySection from "@/components/HomeTestimonySection";
import HomeWhatWeDoSection from "@/components/HomeWhatWeDoSection";

export default function Home() {
  const handleUp = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <div className="w-full flex flex-col bg-black min-h-screen relative">
        <Header />
        <HomeHeroSection />
        <HomeTestimonySection />
        <HomeWhatWeDoSection />
        <HomeContactSection />
        <Footer handleUp={handleUp} />
      </div>
    </Suspense>
  );
}
