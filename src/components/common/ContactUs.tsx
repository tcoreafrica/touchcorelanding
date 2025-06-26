import AnimatedButton from "./AnimatedButton";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactUs({ bg }: { bg?: string }) {
  return (
    <div
      className={`px-5 md:px-20 py-24 flex flex-col space-y-16 ${
        bg || "bg-[#E3EBF5]"
      }`}
    >
      <div className="grid grid-cols-4 ">
        <div></div>
        <div className="w-full col-span-4 space-y-10 md:col-span-3 md:w-auto text-end md:text-right">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueBold text-3xl sm:text-5xl md:text-5xl leading-tight text-start">
              Are we the right fit for <br /> your project?
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction={"up"}>
            <p className="text-base sm:text-lg text-start font-NeueRoman">
              Your project is unique and deserves a tailored approach.
              <br />
              Briefly describe it and we'll be in touch soon.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6">
        <ScrollAnimation direction={"right"}>
          <p className="font-NeueBold text-3xl sm:text-5xl col-span-1">
            About you
          </p>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:col-span-3 gap-10">
          <input
            type="text"
            placeholder="First name"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            placeholder="Last name"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            placeholder="Business email"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            placeholder="Phone number"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            placeholder="How did you hear about us?"
            className={`col-span-1 sm:col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6">
        <ScrollAnimation direction={"right"}>
          <p className="font-NeueBold text-3xl sm:text-5xl col-span-1">
            About your <br className="hidden md:block" /> project
          </p>
        </ScrollAnimation>
        <div className="flex flex-col col-span-1 md:col-span-3 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="What do you want to achieve?"
              className={`col-span-1 sm:col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] ${
                bg || "bg-[#E3EBF5]"
              } outline-none border-[#95A7BE]`}
            />
            <input
              type="text"
              placeholder="Tell us about your project"
              className={`col-span-1 sm:col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] ${
                bg || "bg-[#E3EBF5]"
              } outline-none border-[#95A7BE]`}
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-4 sm:space-y-0">
              <p className="text-[#95A7BE] font-NeueRoman text-lg whitespace-nowrap">
                Do you need an NDA first?
              </p>
              <div className="flex space-x-6">
                <label className="flex space-x-2 items-center">
                  <input
                    type="radio"
                    name="option"
                    id="no"
                    className="size-6 accent-red-600"
                  />
                  <p className="text-lg font-NeueRoman">No</p>
                </label>
                <label className="flex space-x-2 items-center">
                  <input
                    type="radio"
                    name="option"
                    id="yes"
                    className="size-6 accent-red-600"
                  />
                  <p className="text-lg font-NeueRoman">Yes</p>
                </label>
              </div>
            </div>
          </div>

          <AnimatedButton text="Submit" />
          <p className="text-lg font-NeueRoman w-full mt-8">
            The information above will be stored only for business purposes.
            Check our{" "}
            <span className="cursor-pointer text-bgRed underline">
              Privacy Policy
            </span>{" "}
            for more info.
          </p>
        </div>
      </div>
    </div>
  );
}
