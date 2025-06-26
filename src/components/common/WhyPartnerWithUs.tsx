import ScrollAnimation from "./ScrollAnimation";

const partnerItems = [
  {
    id: 1,
    title: "Proven Track Record",
    description:
      "With 10+ years of experience and a team of over 15 expert engineers, we have a strong foundation in building high-quality web and mobile applications.",
  },
  {
    id: 2,
    title: "All-in-One Solution",
    description:
      "From strategy to deployment, we offer a comprehensive range of services — giving you access to cross-functional expertise all in one place.",
  },
  {
    id: 3,
    title: "Security-First Approach",
    description:
      "We implement industry-leading security measures and advanced protocols to ensure your data and product remain fully protected.",
  },
  {
    id: 4,
    title: "Client-Endorsed Quality",
    description:
      "Our commitment to excellence and collaboration is consistently praised by clients through positive reviews and top ratings.",
  },
  {
    id: 5,
    title: "Agile to the Core",
    description:
      "Our agile workflow enables us to deliver a functional prototype within weeks, ensuring continuous value and adaptability throughout the project. ",
  },
  {
    id: 6,
    title: "Seamless Collaboration",
    description:
      "We operate as an integrated team, combining talents from both your side and ours — including designers, developers, and QA experts — to share knowledge and drive results together.",
  },
];

export default function WhyPartnerWithUs() {
  return (
    <div className="px-5 md:px-20 py-24 flex flex-col space-y-16">
      <p className="font-NeueBold text-5xl">Why Choose Us</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partnerItems.map((item, index) => (
          <ScrollAnimation direction={"up"}>
            <div key={item.id} className="flex flex-col space-y-9">
              <div className="bg-red-500 text-white size-16 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-2xl font-NeueMedium">{item.title}</p>
              <p className="text-lg font-NeueRoman">{item.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
