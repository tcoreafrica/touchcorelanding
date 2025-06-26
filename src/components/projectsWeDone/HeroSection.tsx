import ScrollAnimation from "../common/ScrollAnimation";

interface HeroSectionProps {
  title: string;
  img: string;
  alt?: string;
}

export default function HeroSection({ title, img, alt = "hero image" }: HeroSectionProps) {
  return (
    <div className="py-24 flex flex-col space-y-9">
      <ScrollAnimation direction={"up"}>
      <p className="text-5xl md:text-8xl font-NeueBold">{title}</p>
      </ScrollAnimation>
      <img src={img} alt={alt} className="w-full h-[250px] md:h-[600px] object-cover" />
    </div>
  );
}
