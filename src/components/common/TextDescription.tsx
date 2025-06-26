import ScrollAnimation from "./ScrollAnimation";

type TextDescriptionProps = {
  text: string;
  leftText?: string;
  className?: string;
  leftClassName?: string;
  textClassName?: string;
};

export default function TextDescription({
  text,
  leftText,
  className = "",
  leftClassName = "",
  textClassName = "",
}: TextDescriptionProps) {
  return (
    <div className={`my-24 mb-12 px-5 md:px-24 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ScrollAnimation direction={"up"}>
          <div className={`font-NeueBold ${leftClassName}`}>{leftText}</div>
        </ScrollAnimation>
        <ScrollAnimation direction={"up"}>
          <p className={` flex justify-end ${textClassName}`}>{text}</p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
