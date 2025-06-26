import CountUp from "react-countup";

const stats = [
  {
    title: "Digital products shipped",
    value: 134,
  },
  {
    title: "Clients worldwide",
    value: 110,
  },
  {
    title: "Experts on board",
    value: 16,
  },
];

export default function StatNum() {
  return (
    <div className="px-5 md:px-20 py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        <p className="font-NeueRoman text-lg">OUR SERVICES</p>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="border-t-4 flex flex-col space-y-5 border-[#E3EBF5] py-2"
        >
          <p className="font-NeueBold text-5xl md:text-8xl">
            <CountUp end={stat.value} duration={2.5} />+
          </p>
          <p className="font-NeueRoman text-xs md:text-lg whitespace-nowrap">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
