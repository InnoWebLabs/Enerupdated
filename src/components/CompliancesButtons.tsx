import React, { useState } from 'react';

type Compliance = { code: string; name: string };

export default function CompliancesButtons({ compliances }: { compliances: Compliance[] }) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {compliances.map((comp) => (
        <button
          key={comp.code}
          className={`transition-all duration-300 px-6 py-4 rounded-xl shadow-lg font-bold text-lg bg-white border-2 border-blue-400 text-blue-700 focus:outline-none relative
            ${focused === comp.code ? 'scale-125 z-10 ring-4 ring-blue-300' : 'hover:scale-110'}
          `}
          style={{ minWidth: 100 }}
          onClick={() => setFocused(focused === comp.code ? null : comp.code)}
        >
          <span>{comp.code}</span>
          {focused === comp.code && (
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white border border-blue-300 rounded-lg px-4 py-2 text-base text-gray-800 shadow-xl whitespace-nowrap">
              {comp.name}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}