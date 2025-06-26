import ScrollAnimation from "../common/ScrollAnimation";

export default function MakeItEasy() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 pt-14 md:pt-24 flex flex-col space-y-16">
      <ScrollAnimation direction={"up"}>
        <div className="flex flex-col space-y-4 justify-center items-center text-center">
          <p className="font-NeueMedium text-3xl md:text-5xl">
            Make it easy for anyone to sell travel.
          </p>
          <p className="font-NeueRoman text-lg">
            From travel agents and B2B businesses to individual sellers,
            Intraverse needed a powerful,
            <br />
            scalable platform to enable seamless flight, hotel, and tour
            bookings across Africa — and beyond.
          </p>
        </div>
      </ScrollAnimation>

      {/* Sample video section */}
      <div className="w-full max-w-[320px] md:max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-lg">
        <video
          controls
          autoPlay
          muted
          loop
          className="w-full h-auto"
          poster="/video-placeholder" // Optional fallback image before video loads
        >
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
