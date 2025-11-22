import React from 'react';
import { Language } from '../App';

interface StatsProps {
  lang: Language;
}

export const Stats: React.FC<StatsProps> = ({ lang }) => {
  const content = {
    en: [
      { val: "15+", label: "Domain Age (Years)" },
      { val: "11", label: "Character Count" },
      { val: ".COM", label: "King of Extensions" },
      { val: "High", label: "Brand Potential" },
    ],
    ar: [
      { val: "15+", label: "عمر النطاق (سنوات)" },
      { val: "11", label: "عدد الأحرف" },
      { val: ".COM", label: "الامتداد الملكي" },
      { val: "عالي", label: "إمكانية العلامة التجارية" },
    ]
  };

  const stats = content[lang];

  return (
    <section className="bg-brand-900 py-16 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 divide-x-reverse">
          {/* In LTR, divide-x works normally. In RTL (Arabic), the divide-x-reverse handles the border side. 
              We need to handle the border direction logic visually if Tailwind doesn't auto-flip 'divide-x'.
              Standard divide-x puts border on left. RTL needs border on right. 
              Tailwind's RTL support usually handles logical properties, but basic divide-x is physical.
          */}
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-4 ${lang === 'ar' ? 'border-l md:border-l-0 border-white/10 md:first:border-l-0' : ''}`}>
               {/* Using simple grid layout, the divide utility can be tricky with direction changes. 
                   Let's just use simple borders or keep the divide utility which visually works okay in centered grids usually. 
               */}
              <div className="text-4xl md:text-5xl font-black text-accent-400 mb-2">{stat.val}</div>
              <div className="text-brand-100 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};