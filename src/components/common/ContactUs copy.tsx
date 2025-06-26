import AnimatedButton from "./AnimatedButton";

export default function ContactUs({ bg }: { bg?: string }) {
  return (
    <div
      className={`px-5 md:px-20 py-24 flex flex-col space-y-16 ${
        bg || "bg-[#E3EBF5]"
      }`}
    >
      <div className="flex flex-col space-y-1 items-end  w-full">
        <div>
          <p className="font-NeueBold text-8xl ">Let’s build together</p>
          <p className="text-lg text-start">
            Start a conversation about new business opportunities and transform
            your vision into reality.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 ">
        <p className="font-NeueBold text-5xl col-span-1">About you</p>
        <div className="grid grid-cols-2 col-span-3 gap-12">
          <input
            type="text"
            name="First name"
            id=""
            placeholder="First name"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            name="Last name"
            id=""
            placeholder="Last name"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            name="Business email"
            id=""
            placeholder="Business email"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            name="Phone number"
            id=""
            placeholder="Phone number"
            className={`border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            } outline-none border-[#95A7BE]`}
          />
          <input
            type="text"
            name="comment"
            id=""
            placeholder="How did you hear about us?"
            className={`col-span-2  border-b text-lg font-NeueRoman text-[#95A7BE] ${
              bg || "bg-[#E3EBF5]"
            }  outline-none border-[#95A7BE]`}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 ">
        <p className="font-NeueBold text-5xl col-span-1">
          About your <br /> project
        </p>
        <div className="flex flex-col col-span-3">
          <div className="grid grid-cols-2 col-span-3 gap-12">
            <input
              type="text"
              name="First name"
              id=""
              placeholder="What do you want to achieve?"
              className={`col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] ${
                bg || "bg-[#E3EBF5]"
              }  outline-none border-[#95A7BE]`}
            />
            <input
              type="text"
              name="Last name"
              id=""
              placeholder="Tell us about your project"
              className={`col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] ${
                bg || "bg-[#E3EBF5]"
              }  outline-none border-[#95A7BE]`}
            />

            <div className="flex space-x-16">
              <p className="text-[#95A7BE] font-NeueRoman text-lg whitespace-nowrap">
                Do you need an NDA first?
              </p>
              <div className="flex space-x-12">
                <div className="flex space-x-2 items-center">
                  <input
                    type="radio"
                    name="option"
                    id="no"
                    className="size-8 accent-red-600"
                  />
                  <p className="text-lg font-NeueRoman">No</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <input
                    type="radio"
                    name="option"
                    id="yes"
                    className="size-8 accent-red-600"
                  />
                  <p className="text-lg font-NeueRoman">Yes</p>
                </div>
              </div>
            </div>
          </div>
          <AnimatedButton text="Submit" />
          <p className="text-lg font-NeueRoman w-full mt-16">
            The information above will be stored only for business purposes.
            Check our{" "}
            <span className="cursor-pointer text-bgRed underline">
              Privacy Policy
            </span>
             for more info.
          </p>
        </div>
      </div>
    </div>
  );
}
