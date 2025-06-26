import ScrollAnimation from "../common/ScrollAnimation";
const benefits = [
  {
    number: 1,
    text: (
      <>
        Enhance <br /> operational <br /> performance
      </>
    ),
  },
  {
    number: 2,
    text: (
      <>
        Lower overall <br /> expenses
      </>
    ),
  },
  {
    number: 3,

    text: (
      <>
        Strengthen data <br /> protection
      </>
    ),
  },
  {
    number: 4,
    text: (
      <>
        Unlock innovation <br /> through advanced <br /> technologies
      </>
    ),
  },
  {
    number: 5,
    text: (
      <>
        Access real-time <br /> insights to improve <br />
        decision-making
      </>
    ),
  },
];

export default function StrategyTwo() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 py-24 ">
      <div className="grid grid-cols-4 gap-16">
        <div className="flex space-x-2 col-span-4 md:col-span-1">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueMedium text text-2xl">
              Benefits of <br className="hidden md:block" /> modernizing{" "}
              <br className="hidden md:block" /> enterprise solutions
            </p>
          </ScrollAnimation>
        </div>
        <div className="col-span-4 md:col-span-3 flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((item) => (
              <ScrollAnimation direction={"up"}>
                <div key={item.number} className="flex flex-col space-y-9">
                  <div className="bg-bgRed text-white size-12 rounded-full font-NeueBold text-2xl flex items-center justify-center">
                    {item.number}
                  </div>
                  <p className="text-xl md:text-3xl font-NeueMedium">
                    {item.text}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
