import React from 'react';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
  onCtaClick: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, lang }) => {
  const content = {
    en: {
      available: "This domain is available for immediate sale",
      description: "The perfect name for payment platforms, fintech apps, or express transfer services. Start your next venture with a name that is powerful, memorable, and instills trust.",
      ctaBuy: "Buy Now or Make Offer",
      ctaWhy: "Why this domain?",
      benefits: ["Instant Ownership Transfer", "Secure Escrow Payment", "Premium Global Name (.com)"]
    },
    ar: {
      available: "هذا النطاق متاح للبيع فوراً",
      description: "الاسم المثالي لمنصات الدفع الإلكتروني، التطبيقات المالية، أو خدمات التحويل السريع. ابدأ مشروعك القادم باسم قوي، سهل الحفظ، ويوحي بالثقة.",
      ctaBuy: "اشترِ الآن أو قدم عرضاً",
      ctaWhy: "لماذا هذا النطاق؟",
      benefits: ["نقل ملكية فوري", "دفع آمن عبر Escrow", "اسم عالمي (.com)"]
    }
  };

  const t = content[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="relative bg-gradient-to-b from-brand-50 to-white pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-8 animate-fade-in-up shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.available}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          <span className="text-brand-700">QuickPay</span>
          <span className="text-accent-500">Now</span>
          <span className="text-slate-400">.com</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-brand-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {t.ctaBuy}
            <ArrowIcon className="w-5 h-5" />
          </button>
          <a 
            href="#features" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-lg font-semibold rounded-xl transition-all flex items-center justify-center"
          >
            {t.ctaWhy}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-8 text-sm text-slate-500 font-medium">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-100">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    </div>
  );
};