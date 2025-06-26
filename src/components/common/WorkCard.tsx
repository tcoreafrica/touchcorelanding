// WorkCard.tsx
import { Link } from "react-router-dom";

interface WorkCardProps {
  title: string;
  description?: string;
  image: string;
  link: string;
}

export default function WorkCard({ title, description, image, link }: WorkCardProps) {
  return (
    <Link to={link} className="flex flex-col space-y-2 group">
      <img
        src={image}
        alt={title}
        className="cursor-pointer h-[300px] object-cover"
      />
      <p className="text-2xl md:text-4xl font-NeueBold group-hover:underline">
        {title}
      </p>
      {description && <p className="text-base">{description}</p>}
    </Link>
  );
}
