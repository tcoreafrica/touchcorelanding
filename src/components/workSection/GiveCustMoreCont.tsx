const sectionData = [
  {
    heading: "Giving customers more control over how they pay",
    description:
      "The customer app makes it easy for people to buy now and pay later without hidden fees or confusing terms. Users can view their spending, track repayments, and get notifications—all in a clean, intuitive interface. It’s built to build trust, with transparency and control at the core.",
    images: [
      "/odio1.png",
      "/odio2.png",
      "/odio3.png",
      "/odio4.png",
      "/odio5.png",
      "/odio6.png",
      "/odio7.png",
      "/odio8.png",
      "/odio9.png",
      "/odio10.png",
      "/odio11.png",
      "/odio12.png",
      "/odio13.png",
      "/odio14.png",
    ],
  },
  {
    heading: "Giving customers more control over how they pay",
    description:
      "The customer app makes it easy for people to buy now and pay later without hidden fees or confusing terms. Users can view their spending, track repayments, and get notifications—all in a clean, intuitive interface. It’s built to build trust, with transparency and control at the core.",
    images: [
      "/merchentFlow.png",
      "/merchantFlow2.png",
      "/merchantFlow3.png",
      "/merchantFlow4.png",
      "/merchantFlow5.png",
      "/merchantFlow6.png",
      "/merchantFlow7.png",
      "/merchantFlow8.png",
      "/merchantFlow9.png",
      "/merchantFlow10.png",
      "/merchantFlow11.png",
      "/merchantFlow12.png",
      "/merchantFlow13.png",
      "/merchantFlow14.png",
    ],
  },
];

export default function GiveCustMoreCont() {
  return (
    <div className="pl-5 md:pl-20 pt-24 flex flex-col space-y-40  justify-center ">
      {sectionData.map((section, index) => (
        <div key={index} className="flex flex-col space-y-6">
          <div>
            <p className="font-NeueMedium text-3xl md:text-5xl text-center">
              {section.heading.split("over")[0]}
              <br className="hidden md:block" /> over
              {section.heading.split("over")[1]}
            </p>
            <p className="text-center whitespace-pre-line">
              {section.description}
            </p>
          </div>
          <div className="flex -space-x-12 overflow-x-auto scrollbar-none">
            {section.images.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                alt={`section-${index}-img-${imgIndex}`}
                className="w-[360px] h-[700px] rounded-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
