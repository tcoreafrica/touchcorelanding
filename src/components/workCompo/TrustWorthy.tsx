import ScrollAnimation from "../common/ScrollAnimation";

export default function TrustWorthy() {
  return (
    <div className="pt-24 pb-16 ">
      <div className="flex justify-end ">
        <div className="flex flex-col space-y-8">
          <ScrollAnimation direction={"up"}>
            <p className="text-lg font-NeueBold">OUR CLIENTS</p>
          </ScrollAnimation>
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col">
              <p className="font-NeueBold text-4xl md:text-8xl">Trustworthy</p>
              <p className="text-lg font-NeueRoman">
                For 9 plus years, our experts have helped iconic companies bring
                exciting new products to market fast.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
