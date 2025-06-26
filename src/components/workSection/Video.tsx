interface VideoSectionProps {
  img: string;
  alt?: string;
}

export default function Video({ img, alt = "video section image" }: VideoSectionProps) {
  return (
    <div className="py-10 md:py-24">
      <img src={img} alt={alt} className="w-full h-[250px] md:h-[500px] object-cover" />
    </div>
  );
}
