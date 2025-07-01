'use client';

import { useMemo, useState } from "react";

import hotelsInBali from "@/app/data-dumy/dumy-hotel";
import FeaturedCard from "@/components/molecules/feture-card";

 const sleceted = [
    { id: 1, name: "Bali", select: 'bali' },
    { id: 2, name: "Tokyo", select: 'tokyo' },
    { id: 3, name: "Paris", select: 'paris' },
    { id: 4, name: "New York", select: 'new-york' },
    { id: 5, name: "London", select: 'london' },
    { id: 6, name: "Sydney", select: 'sydney' },
  ];

const FeatureSection = () => {
  const [selected, setSelected] = useState('bali');


 const filteredData = useMemo(() => {
  return selected === 'bali'
    ? hotelsInBali
    : hotelsInBali.filter((item) => item.city === selected);
}, [selected]);

  return (
    <div
      className="rounded-lg lg:p-8 px-2 py-5 z-10"
      style={{
        background: `
          radial-gradient(circle at top right, #ffe4ec 10%, transparent 30%),
          radial-gradient(circle at bottom left, #ffe4ec 10%, transparent 30%),
          linear-gradient(135deg, #f3f3f3, #e0e0e0)
        `
      }}
     
    >
      <article>
        <h1
          className="text-xl font-semibold text-neutral-800"
         
        >
          Featured Properties
        </h1>

        <div
          className="mt-4 flex flex-wrap"
        
        >
          {sleceted.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.select)}
              className="mr-2 mb-2"
            
            >
              <span
                className={`${
                  selected === item.select
                    ? 'bg-neutral-900 text-xs text-white font-semibold'
                    : 'text-neutral-800 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-xs'
                } inline-block px-4 py-2 rounded-xs transition-colors duration-300 ease-linear`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>

        <div
          className="mt-6"
        
        >
          <FeaturedCard travel={filteredData} />
        </div>
      </article>
    </div>
  );
};

export default FeatureSection;