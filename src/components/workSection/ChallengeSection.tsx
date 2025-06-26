// components/ChallengeSection.tsx

import ScrollAnimation from "../common/ScrollAnimation";

type ChallengeSectionProps = {
  title?: string;
  img?: string;
  columns: string[][];
  className?: string;
};

export default function ChallengeSection({
  title = "THE CHALLENGE",
  img = "",
  columns,
  className = "",
}: ChallengeSectionProps) {
  return (
    <div
      className={`bg-[#E3EBF5] px-5 md:px-20 pt-14 md:pt-24 flex flex-col space-y-10 md:space-y-16 ${className}`}
    >
      <div className="flex flex-col space-y-4">
        <p className="text-lg font-NeueRoman">{title}</p>
        <div
          className={`grid grid-cols-1 md:grid-cols-${columns.length} gap-12`}
        >
          {columns.map((items, colIndex) => (
            <ScrollAnimation direction={"up"}>
              <div key={colIndex} className="flex flex-col space-y-12">
                {items.map((item, itemIndex) => (
                  <p key={itemIndex} className="font-NeueMedium text-2xl">
                    {item}
                  </p>
                ))}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      {img && (
        <div>
          <img
            src={img}
            alt="IntraversedifeScre"
            className=" w-full h-[400px] md:h-[600px]"
          />
        </div>
      )}
    </div>
  );
}
