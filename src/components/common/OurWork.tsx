import ScrollAnimation from "./ScrollAnimation";
import WorkCard from "./WorkCard";

const recentWorks = [
  {
    title: "AI Next-Gen SaaS Travel Booking Engine ",
    description: "",
    image: "/AiDriven.png",
    link: "/work/intraverse-africa",
  },
  {
    title: "Travel booking platform",
    description: "",
    image: "/icarryGoWork.png",
    link: "/work/icarryGo",
  },
];

export default function OurWork() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 py-24 flex flex-col space-y-6">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueBold text-5xl md:text-7xl">Our Work</p>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {recentWorks.map((work, index) => (
          <ScrollAnimation direction={"up"}>
            <WorkCard key={index} {...work} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
