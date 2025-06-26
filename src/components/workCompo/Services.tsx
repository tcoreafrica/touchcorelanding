import ScrollAnimation from "../common/ScrollAnimation";

const services = [
  {
    img: "/OdioPayLogo.svg",
    description:
      "Improve your processes, serve more customers, and grow your business with cutting-edge technology.",
  },
  {
    img: "/SaroAfricaLogo.svg",
    description:
      "Streamline your operations with our tailored software solutions designed for efficiency.",
  },
  {
    img: "/ZattaneryLogo.svg",
    description:
      "Reach a wider audience and boost customer satisfaction with innovative digital tools.",
  },
  {
    img: "/IntraverseLogo.svg",
    description:
      "Reach a wider audience and boost customer satisfaction with innovative digital tools.",
  },
  {
    img: "/FixerLogo.svg",
    description:
      "Reach a wider audience and boost customer satisfaction with innovative digital tools.",
  },
  {
    img: "/CoopxLogo.svg",
    description:
      "Reach a wider audience and boost customer satisfaction with innovative digital tools.",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24 px-4 sm:px-6 lg:px-8">
      {services.map((service, index) => (
        <ScrollAnimation direction={"up"}>
          <div key={index} className="flex flex-col space-y-2">
            <img src={service.img} alt="company image" className="w-28 h-12" />
            <p className="text-lg">{service.description}</p>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
