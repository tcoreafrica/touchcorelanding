import ScrollAnimation from "../common/ScrollAnimation";

interface ServiceProps {
  title: string;
  services: string[];
  infoTitle: string;
  sections: {
    heading: string;
    description: string;
  }[];
}

export default function ProductInfo({
  title,
  services,
  infoTitle,
  sections,
}: ServiceProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-24 px-5 md:px-20">
      {/* Left Side: Services */}
      <div className="flex flex-col space-y-6 col-span-2">
        <ScrollAnimation direction="up">
          <h1 className="font-NeueRoman text-2xl pb-4">{title}</h1>
          <div className="flex flex-col space-y-1">
            {services.map((service, index) => (
              <p key={index} className="font-NeueMedium text-2xl">
                {service}
              </p>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Right Side: Info Sections */}
      <div className="col-span-3 flex flex-col space-y-16">
        <p className="font-NeueRoman text-2xl">{infoTitle}</p>
        <div className="flex flex-col space-y-8">
          {sections.map((section, index) => (
            <ScrollAnimation direction="up" key={index}>
              <div className="flex flex-col space-y-2">
                <p className="font-NeueBold text-3xl md:text-5xl">
                  {section.heading}
                </p>
                <p className="font-NeueRoman text-lg">{section.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
