import Header from "@/components/Header";
import HomeHeroSection from "@/components/HomeHeroSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black min-h-screen relative">
      <Header />
      <HomeHeroSection />
    </div>
  );
}
