const features = [
  {
    id: 1,
    title: "Agile and transparent processes",
    description:
      "We use agile methods to stay flexible and adapt quickly. This allows for fast backend development, regular updates, and ongoing collaboration with you through every stage of the project.",
  },
  {
    id: 2,
    title: "Continuous integration / Continuous delivery (CI/CD)",
    description:
      "By using CI/CD, we smoothly integrate new code and features and deploy them with reliability. This speeds up release times and keeps builds stable.",
  },
  {
    id: 3,
    title: "Secure, stable, and scalable",
    description:
      "A scalable backend handles increasing technical demands and supports new technologies, while strong security measures protect data privacy, accuracy, and access.",
  },
  {
    id: 4,
    title: "High-performance in focus",
    description:
      "Since backend performance impacts response time, system stability, and user experience, we build fast and reliable backend solutions.",
  },
  {
    id: 5,
    title: "Cross-platform compatibility",
    description:
      "We see cross-platform compatibility not just as a technical requirement but as a strategic decision that impacts the product's reach and performance.",
  },
  {
    id: 6,
    title: "Quality assurance",
    description:
      "We use thorough testing and strict quality checks to deliver a product that’s reliable, secure, and meets top standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="px-5 md:px-20 py-24 flex flex-col space-y-16">
      <p className="font-NeueBold text-3xl md:text-5xl">
        Why choose Touchcore <br /> as your organizational <br />
        partner
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col space-y-9">
            <div className="bg-red-500 text-white size-16 rounded-full font-NeueBold text-2xl flex items-center justify-center">
              {feature.id}
            </div>
            <p className="text-2xl font-NeueMedium">{feature.title}</p>
            <p className="text-lg font-NeueRoman">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
