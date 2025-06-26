import ScrollAnimation from "../common/ScrollAnimation";

export default function BackStory() {
  return (
    <div className=" div grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 px-5 md:px-20 py-24">
      <ScrollAnimation direction={"right"}>
        <p className="text-lg font-NeueRoman">THE BACKSTORY</p>
      </ScrollAnimation>
      <div className="flex flex-col space-y-3">
        <ScrollAnimation direction={"left"}>
          <p className="text-lg font-NeueRoman">
            At Touchcore, we transform bold ideas into scalable software
            solutions. With expertise in web and mobile app development, we help
            businesses innovate and grow using cutting-edge technologies and
            customized strategies.
          </p>
        </ScrollAnimation>
        <ScrollAnimation direction={"left"}>
          <p className="text-lg font-NeueRoman">
            Founded in Lagos in 2015, Touchcore started as a small team of
            passionate developers building custom websites and mobile apps for
            local startups.{" "}
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
