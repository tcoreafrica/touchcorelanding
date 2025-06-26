import ScrollAnimation from "../common/ScrollAnimation";

const features = [
  {
    id: 1,
    title: "Increase operational efficiency",
  },
  {
    id: 2,
    title: "Reduce costs",
  },
  {
    id: 3,
    title: "Increase data security",
  },
];

export default function ModernizingTravelBuss() {
  return (
    <div className="px-5 md:px-20 py-24 flex flex-col space-y-16">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueMedium text-3xl md:text-5xl">
          Outcomes of modernizing <br /> your travel business
        </p>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
        <ScrollAnimation direction={"up"}>
            <div key={feature.id} className="flex flex-col space-y-9">
              <div className="bg-bgRed text-white size-14 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                {feature.id}
              </div>
              <p className="text-2xl font-NeueMedium">{feature.title}</p>
            </div>
        </ScrollAnimation>
          ))}
      </div>
    </div>
  );
}
