import ScrollAnimation from "../common/ScrollAnimation";

interface GuessworkSectionProps {
  images: string[];
  padding?: boolean;
}

export default function GuessworkSection({
  images,
  padding = false,
}: GuessworkSectionProps) {
  return (
    <div
      className={`py-10 md:py-24 flex flex-col space-y-16 ${
        padding ? "px-5 md:px-20" : ""
      }`}
    >
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col space-y-2">
          <p className="font-NeueBold text-5xl md:text-8xl">
            Guesswork? <br />
            No. Only facts and data
          </p>
          <p className="font-NeueRoman text-lg">
            Improve your processes, serve more customers, and grow your business
            with <br /> cutting-edge technology.
          </p>
        </div>
      </ScrollAnimation>
      <div className="grid grid-cols-3 gap-8 items-end">
        {images.map((img, index) => (
          <ScrollAnimation direction={"up"}>
            <img
              key={index}
              src={img}
              alt={`Guesswork image ${index + 1}`}
              className="w-full object-cover"
              style={{
                height: index === 0 ? "500px" : index === 1 ? "350px" : "450px",
              }}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
