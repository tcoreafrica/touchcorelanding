import { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const topDestinations = [
  { id: 1, name: "Bole", location: "Addis Ababa, Ethiopia" },
  { id: 2, name: "Piassa", location: "Addis Ababa, Ethiopia" },
  { id: 3, name: "4 Kilo", location: "Addis Ababa, Ethiopia" },
  { id: 4, name: "Merkato", location: "Addis Ababa, Ethiopia" },
  { id: 5, name: "Mexico", location: "Addis Ababa, Ethiopia" },
];

export default function TopDestination() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-5 md:px-20 pt-10">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            Top destination from your location
          </p>
          <div className="flex space-x-3">
            <GrFormPrevious
              className="size-8 hover:text-gray-400 cursor-pointer"
              onClick={() => scroll("left")}
            />
            <MdNavigateNext
              className="size-8 hover:text-gray-400 cursor-pointer"
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-none" ref={scrollRef}>
          <div className="flex space-x-9 min-w-max">
            {topDestinations.map((dest) => (
              <div
                key={dest.id}
                className="flex-shrink-0 flex flex-col items-center space-y-4"
              >
                <div className="bg-gray-300 size-72 rounded-full"></div>
                <p className="text-2xl font-bold">{dest.name}</p>
                <div className="flex space-x-2 items-center">
                  <IoLocationSharp className="text-blue-500" />
                  <p className="text-lg">{dest.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
