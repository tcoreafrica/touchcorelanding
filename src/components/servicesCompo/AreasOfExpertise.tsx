import AnimatedButton from "../common/AnimatedButton";
import ScrollAnimation from "../common/ScrollAnimation";

export default function AreasOfExpertise() {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 py-24">
      <ScrollAnimation direction={"up"}>
        <p className="font-NeueBold text-5xl  md:text-7xl">
          Mobile app <br /> development
        </p>
      </ScrollAnimation>
      <hr className="border-b border-[#A8A8AA] my-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <ScrollAnimation direction={"up"}>
          <p className="text-lg font-NeueBold">AREAS OF EXPERTISE</p>
        </ScrollAnimation>

        <div className="flex flex-col space-y-8 font-NeueRoman">
          <ScrollAnimation direction={"up"}>
            <p className="font-NeueRoman text-lg">
              You’ve got a mobile app idea that could elevate your business -{" "}
              <span className="text-red-500 underline">
                and we have the expertise to bring it to life as a powerful,
                high-performing digital solution.{" "}
              </span>
            </p>
          </ScrollAnimation>
          <div className="flex flex-col space-y-6">
            <ScrollAnimation direction={"up"}>
              <p className="text-3xl font-NeueMedium pb-3">
                Expert Android App Development
              </p>
              <p className="font-NeueRoman">
                We build custom Android applications tailored to your business
                needs — fast, reliable, and ready to scale. From sleek UI design
                to seamless backend integration, our team ensures your app
                performs flawlessly across all Android devices. Whether you're
                targeting millions of users or building an internal tool, we
                deliver secure, high-quality Android apps that drive results.
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction={"up"}>
              <div className="flex space-x-4 flex-wrap">
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Kotlin
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Compose
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Gradle
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Dagger
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-b border-[#A8A8AA] my-16" />
          <div className="flex flex-col space-y-6">
            <ScrollAnimation direction={"up"}>
              <p className="text-3xl font-NeueMedium pb-3">
                Custom iOS App Development
              </p>
              <p className="font-NeueRoman">
                We craft premium iOS applications that combine elegant design
                with robust performance. From concept to App Store launch, our
                team ensures your app is optimized for iPhones and iPads,
                delivering a seamless user experience. Whether you're building
                for consumers or enterprise users, we use the latest Apple
                technologies and development standards to create secure,
                scalable, and high-performing iOS apps that drive business
                growth.
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction={"up"}>
              <div className="flex space-x-4 flex-wrap gap-2">
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Swift
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  SwiftUI
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  async/await
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Combine
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  RxSwift
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  SwiftPM
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  CocoaPods
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-b border-[#A8A8AA] my-16" />
          <div className="flex flex-col space-y-6">
            <ScrollAnimation direction={"up"}>
              <p className="text-3xl font-NeueMedium pb-3">
                Cross-Platform App Development
              </p>
              <p className="font-NeueRoman">
                We develop cross-platform applications that run smoothly on both
                iOS and Android from a single codebase. Using frameworks like
                Flutter and React Native, we help you save time and reduce costs
                without compromising on performance or user experience. Whether
                you're launching a startup app or scaling an enterprise
                solution, our cross-platform approach ensures consistency,
                speed, and a native-like feel across all devices.
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction={"up"}>
              <div className="flex space-x-4 flex-wrap gap-2">
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Flutter
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  React Native
                </div>
                <div className="bg-[#C4CEDD] py-2 px-4 flex justify-center items-center rounded-full font-NeueMedium">
                  Kotlin Multiplatform
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <hr className="border-b border-[#A8A8AA] my-16" />
            <div className="flex flex-col space-y-6">
            {[
              "Mobile app optimization",
              "Code refactoring",
              "QA consulting",
            ].map((item, idx) => (
              <div className="flex space-x-6 items-center" key={item + idx}>
              <div className="bg-red-500 rounded-full size-3"></div>
              <p className="font-NeueMedium text-lg">{item}</p>
              </div>
            ))}
            </div>
          <div>
            <AnimatedButton
              text="Get in touch"
              className="w-[190px] h-[48px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
