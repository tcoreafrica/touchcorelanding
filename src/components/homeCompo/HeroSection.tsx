import ScrollAnimation from "../common/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="font-NeueBold text-5xl md:text-[108px] md:leading-[7.5rem] flex flex-col pt-32 px-5 md:px-20">
      <ScrollAnimation direction={"up"}>
        <p> Building Solutions </p>
        <p> That Work Since 2015.</p>
      </ScrollAnimation>
      <div className="text-2xl md:text-3xl font-NeueMedium my-20">
        <ScrollAnimation direction={"up"}>
          <p>
            For over a decade, we’ve delivered smart, scalable,
            <br /> and secure digital solutions that power the future of
            <br /> businesses.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
