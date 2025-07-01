'use client';

import { useMemo } from "react";

const stats = [
  { id: 1, value: '10+', label: 'Your Experience Client' },
  { id: 2, value: '12K', label: 'Happy Clients' },
  { id: 3, value: '4.8', label: 'Overall Rating' },
];

const RattingSection = () => {
    const statsMemo = useMemo(() => stats, [])
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-4 pb-16 gap-6">
      {statsMemo.map((item, i) => (
        <div
          key={item.id}
          className="p-6 h-[300px] bg-gradient-to-br from-white to-blue-50 rounded-xl  flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
         
        >
          <h1 className="text-7xl font-bold text-blue-600">{item.value}</h1>
          <p className="text-sm mt-2 text-gray-600 tracking-wide">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default RattingSection;
