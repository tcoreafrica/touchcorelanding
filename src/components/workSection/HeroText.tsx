// components/HeroText.tsx

import ScrollAnimation from "../common/ScrollAnimation";

type HeroTextProps = {
  textLines: (string | { mobileBreak?: boolean; desktopBreak?: boolean })[];
  className?: string;
};

export default function HeroText({ textLines, className = "" }: HeroTextProps) {
  return (
    <div className={`pt-24 px-5 md:px-20 ${className}`}>
      <ScrollAnimation direction={"up"}>
        <p className="text-5xl md:text-8xl font-NeueBold">
          {textLines.map((line, index) => {
            if (typeof line === "string") {
              return <span key={index}>{line} </span>;
            }
            return (
              <span key={index}>
                {line.mobileBreak && <br className="block md:hidden" />}
                {line.desktopBreak && <br className="hidden md:block" />}
              </span>
            );
          })}
        </p>
      </ScrollAnimation>
    </div>
  );
}
