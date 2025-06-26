export default function Guesswork() {
  return (
    <div className="py-10 md:py-24 flex flex-col space-y-16">
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
      <div className="grid grid-cols-3 gap-8 items-end">
        <div className="bg-gray-200 w-full h-[280px]"></div>
        <div className="bg-gray-200 w-full h-[430px]"></div>
        <div className="bg-gray-200 w-full h-[397px]"></div>
      </div>
    </div>
  );
}
