interface VideoSectionProps {
  img: string;
  alt?: string;
}

export default function Video({
  img,
  alt = "video section image",
}: VideoSectionProps) {
  return (
    <div className="py-10 md:pt-10 md:pb-24">
      <img
        src={img}
        alt={alt}
        className="w-full h-[250px] md:h-[650px] object-cover"
      />
    </div>
  );
}
