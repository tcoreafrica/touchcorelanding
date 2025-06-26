import ScrollAnimation from "../common/ScrollAnimation";

export default function Products() {
  return (
    <div className="px-5 md:px-20 py-24 flex flex-col space-y-16">
      <ScrollAnimation direction={"right"}>
        <p className="font-NeueBold text-5xl md:text-8xl">
          We build digital <br /> products
        </p>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <ScrollAnimation direction={"right"}>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-NeueMedium">
              Transforming <br /> businesses
            </p>
            <p className="text-lg">
              We collaborate with visionary brands, organizations, and
              entrepreneurs who recognize the power of technology. Together, we
              embrace innovation, reimagine business models, and elevate current
              operations to fuel growth and success.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction={"left"}>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-NeueMedium">
              {" "}
              Building high <br />
              impact products
            </p>
            <p className="text-lg">
              We focus on creating digital products that make a real difference.
              From idea to execution, we combine strategy, design, and
              technology to build solutions that solve meaningful problems,
              drive growth, and deliver lasting value for users and businesses
              alike.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
