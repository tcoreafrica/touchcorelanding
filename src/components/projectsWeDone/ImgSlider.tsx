interface ImgSliderProps {
  images: string[];
}

export default function ImgSlider({ images }: ImgSliderProps) {
  return (
    <div className="bg-[#E3EBF5] px-5 md:px-20 py-24 overflow-x-auto scrollbar-none cursor-pointer">
      <div className="flex space-x-6 min-w-max">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slider image ${index + 1}`}
            className="h-[400px] w-[320px] md:w-[765px] md:h-[600px] object-cover flex-shrink-0 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
