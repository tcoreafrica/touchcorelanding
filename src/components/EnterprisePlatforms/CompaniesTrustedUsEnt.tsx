import ScrollAnimation from "../common/ScrollAnimation";

const companies = [
  {
    img: "/SaroAfricaLogo.svg",
  },
  {
    img: "/OdioPayLogo.svg",
  },
  {
    img: "/FixerLogo.svg",
  },
];

export default function CompaniesTrustedUsEnt() {
  return (
    <div className="px-5 md:px-20 bg-[#E3EBF5] py-16 flex flex-col space-y-16">
      <ScrollAnimation direction={"up"}>
        <p className="text-3xl font-NeueBold text-center">
          These companies trusted us with their enterprise platform and software development
        </p>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <ScrollAnimation direction={"up"}>
            <div key={index} className="flex flex-col space-y-2">
              <img src={company.img} alt="company logo" className="w-28 h-16" />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
