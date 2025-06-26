import CountUp from "react-countup";
import ScrollAnimation from "../common/ScrollAnimation";

const stats = [
  {
    title: "Digital products shipped",
    value: 134,
  },
  {
    title: "Experts on board",
    value: 24,
  },
  {
    title: "Years in business",
    value: 10,
  },
];

export default function StatNumbers() {
  return (
    <div className="px-5 md:px-20 py-24 grid grid-cols-2 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <ScrollAnimation direction={"up"}>
          <div
            key={index}
            className="border-t-4 flex flex-col space-y-5 border-[#E3EBF5] py-2"
          >
            <p className="font-NeueBold text-xs md:text-lg whitespace-nowrap">
              {stat.title}
            </p>
            <p className="font-NeueBold text-5xl md:text-8xl">
              <CountUp end={stat.value} duration={2.5} />+
            </p>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
