import ScrollAnimation from "../common/ScrollAnimation";

const companies = [
  {
    img: "/IcarryGoBlackLogo.svg",
    description:
      "We partnered with iCarryGo to redesign their travel booking platform, covering flights, hotels, and tours. Our team focused on simplifying the user journey, improving search speed, and creating a consistent experience across devices.",
  },
  {
    img: "/AlfajiLogo.svg",
    description:
      "We collaborated with Alfarji Travels and Tours to redesign their website with a focus on clarity, speed, and ease of use. The new platform highlights their core services—flights, hotel bookings, and Hajj and Umrah packages—while offering users a smoother, more reliable booking experience across devices.",
  },
  {
    img: "/IntraverseLogo.svg",
    description:
      "We partnered with Intraverse Africa to design and develop a clean, scalable webapp that reflects their mission of shaping Africa’s travel future. The result is a modern platform that communicates their vision clearly and supports ongoing growth across technology.",
  },
  {
    img: "/CoopxLogo.svg",
    description:
      "We collaborated with Coopx to design a streamlined platform for managing corporate travel. The focus was on simplifying flight and hotel bookings for business teams, with built-in approval flows and expense tracking.",
  },
];

export default function CompaniesTrustedUs() {
  return (
    <div className="px-5 md:px-20 bg-[#E3EBF5] py-24 flex flex-col space-y-16">
      <ScrollAnimation direction={"up"}>
        <p className="text-3xl font-NeueBold text-start">
          These companies trusted us <br /> with their travel projects
        </p>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <ScrollAnimation direction={"up"}>
            <div key={index} className="flex flex-col space-y-2">
              <img src={company.img} alt="company logo" className="w-24 h-12" />
              <p className="text-lg font-NeueRoman">{company.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
