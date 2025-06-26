import React from 'react';
import ScrollAnimation from '../common/ScrollAnimation';

interface WeBuiltProps {
  imageSrc: string;
  title: string;
  description: string;
}

const WeBuilt: React.FC<WeBuiltProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex space-x-16 px-5 md:px-20 py-24">
      <img src={imageSrc} alt="image" className="w-[320px] h-[450px] md:h-[550px] ml-10" />
      <ScrollAnimation direction={"up"}>
      <div className="flex flex-col space-y-2">
        <p className="font-NeueMedium text-3xl md:text-5xl">{title}</p>
        <p className="font-NeueRoman text-base md:text-lg">{description}</p>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default WeBuilt;