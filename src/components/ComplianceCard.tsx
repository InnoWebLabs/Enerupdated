import React, { useState } from 'react';

export default function ComplianceCard({ code, name }: { code: string; name: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`backdrop-blur-md bg-white/60 border border-blue-100 rounded-xl p-8 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer relative ${focused ? 'scale-110 z-10 ring-4 ring-blue-300' : 'hover:scale-105'}`}
      style={{ minHeight: 170, minWidth: 220 }}
      onClick={() => setFocused((f) => !f)}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-400 mb-3 bg-white/80 shadow-sm text-2xl font-bold text-blue-700">
        {code}
      </div>
      <h3 className={`text-base font-semibold text-gray-900 mb-1 text-center tracking-wide transition-colors ${focused ? 'text-blue-600' : 'group-hover:text-blue-500'}`}>
        {name}
      </h3>
    </div>
  );
}