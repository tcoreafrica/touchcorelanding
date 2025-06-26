import ScrollAnimation from "../common/ScrollAnimation";
import WorkCard from "../common/WorkCard";

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
  {
    title: "Corporate Identity and Website",
    description: "",
    image: "/saroAficaWork.png",
    link: "/work/saroAfrica",
  },
  {
    title: "BNPL platform for everyday needs",
    description: "",
    image: "/odioPayy.png",
    link: "/projects/odiopay",
  },
];
export default function OurWork() {
  return (
    <div className="bg-white px-5 md:px-20 py-24 flex flex-col space-y-6">
      <p className="font-NeueBold text-5xl md:text-8xl">Our Work</p>

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
