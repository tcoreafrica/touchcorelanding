import { FaArrowRightLong } from "react-icons/fa6";
import WorkCard from "../common/WorkCard";
import ScrollAnimation from "../common/ScrollAnimation";

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
    link: "/work/odioPay",
  },
];

export default function RecentWorks() {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <p className="font-NeueBold">RECENT WORK</p>
          <button className="bg-white group flex items-center text-red-500 rounded-3xl font-NeueMedium">
            Explore More
            <FaArrowRightLong className="ml-2 text-base group-hover:hidden" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {recentWorks.map((work, index) => (
            <ScrollAnimation direction={"up"}>
              <WorkCard key={index} {...work} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
