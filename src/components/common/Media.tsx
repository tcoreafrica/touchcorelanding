interface MediaProps {
  type: 'video' | 'image';
  src: string;
  alt?: string;
  className?: string;
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
}

export default function Media({ type, src, alt, className = '', videoProps }: MediaProps) {
  return (
    <div className={`ml-0 md:ml-20 bg-gray-200 h-[390px] md:h-[690px] ${className}`}>
      {type === 'image' ? (
        <img src={src} alt={alt || 'media'} className="w-full h-full object-cover" />
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover"
          {...videoProps}
        />
      )}
    </div>
  );
}
