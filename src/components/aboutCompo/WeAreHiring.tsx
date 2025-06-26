import ScrollAnimation from "../common/ScrollAnimation";

export default function WeAreHiring() {
  return (
    <div className=" p-5 md:p-20 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-0">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueBold text-lg">WE’RE HIRING</p>
      </ScrollAnimation>
      <ScrollAnimation direction={"up"}>
        <p className="text-5xl md:text-8xl font-NeueBold">
          Want to join <br /> us?
        </p>
      </ScrollAnimation>
    </div>
  );
}
