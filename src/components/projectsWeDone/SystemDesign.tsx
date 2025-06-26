import ScrollAnimation from "../common/ScrollAnimation";

interface SystemDesignProps {
  image: string;
  padding?: boolean;
}

export default function SystemDesign({
  image,
  padding = false,
}: SystemDesignProps) {
  return (
    <div
      className={`py-10 md:py-24 flex flex-col space-y-16 ${
        padding ? "px-5 md:px-20" : ""
      }`}
    >
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col space-y-2">
          <p className="font-NeueBold text-5xl md:text-8xl">
            A new design <br /> system
          </p>
          <p className="font-NeueRoman text-lg">
            We built a consistent experience for both mobile and desktop. The
            component <br /> system is designed to make the most of available
            screen space and always show <br /> users relevant, actionable
            information—regardless of device.
          </p>
        </div>
      </ScrollAnimation>
      <img src={image} alt="" className="w-full h-[500px]" />
    </div>
  );
}
