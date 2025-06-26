import ScrollAnimation from "../common/ScrollAnimation";

export default function WorkTogether() {
  return (
    <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 font-NeueBold py-28 gap-10">
      <ScrollAnimation direction={"up"}>
        <p className="text-lg">GOT AN IDEA?</p>
      </ScrollAnimation>
      <ScrollAnimation direction={"up"}>
        <p className="text-4xl md:text-8xl font-NeueBold">
          Let’s work <br /> together
        </p>
      </ScrollAnimation>
    </div>
  );
}
