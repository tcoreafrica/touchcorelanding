import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

const rawData = [
  { year: 2016, people: 5 },
  { year: 2017, people: 12 },
  { year: 2018, people: 30 },
  { year: 2019, people: 40 },
  { year: 2020, people: 45 },
  { year: 2021, people: 60 },
  { year: 2022, people: 70 },
  { year: 2023, people: 90 },
  { year: 2024, people: 100 },
  { year: 2025, people: 134 },
];

// Scale up values artificially to exaggerate height difference
const scaledData = rawData.map((d) => ({
  ...d,
  displayValue: d.people * 3 + 100,
}));

export default function GrowthGraph() {
  const [activeIndex, setActiveIndex] = useState(scaledData.length - 1);
  const active = scaledData[activeIndex];

  return (
    <div className="w-full bg-white pt-6 pl-5 md:pl-20  rounded-md">
      <div className="h-[600px] relative">
        <div className="absolute top-10 left-4 z-10 text-xl font-bold">
          <h2 className="text-2xl md:text-3xl font-NeueBold mb-4">
            We're growing
          </h2>
          <div className="flex gap-12 mb-6">
            <div className="border-t-2 border-[#E3EBF5]">
              <p className="text-lg  border-gray-200 pb-1">Year</p>
              <p className="text-3xl md:text-8xl font-NeueBold">
                {active.year}
              </p>
            </div>
            <div className="border-t border-[#E3EBF5]">
              <p className="text-lg font-NeueBold border-gray-200 pb-1">
                Projects
              </p>
              <p className="text-3xl md:text-8xl font-NeueBold">
                {active.people}
              </p>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={scaledData}
            barCategoryGap={0}
            barGap={0}
            barSize={128}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex != null) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(scaledData.length - 1)}
          >
            <XAxis dataKey="year" hide />
            <Tooltip content={() => null} cursor={{ fill: "transparent" }} />
            <Bar dataKey="displayValue" radius={[4, 4, 0, 0]}>
              {scaledData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === activeIndex ? "#EF4444" : "#E5EDF6"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
