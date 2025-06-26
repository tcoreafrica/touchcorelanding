import ScrollAnimation from "../common/ScrollAnimation";

export default function IdeasToProducts() {
  return (
    <div className="px-5 md:px-20 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
      <ScrollAnimation direction={"up"}>
        <p className="text-3xl font-NeueBold">
          From ideas to solutions <br /> that make a huge impact
        </p>
      </ScrollAnimation>
      <ScrollAnimation direction={"up"}>
        <p className="text-lg font-NeueRoman">
          We work with you to understand your users, spot market gaps, and build
          products that support business growth.
        </p>
      </ScrollAnimation>
    </div>
  );
}
