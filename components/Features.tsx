import React from 'react';
import { Zap, Globe, Lock, DollarSign, Search, Smartphone } from 'lucide-react';
import { Language } from '../App';

interface FeaturesProps {
  lang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Why is QuickPayNow.com a Golden Opportunity?",
      subtitle: "Choosing the right name is the first step to your digital success.",
      items: [
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Reach (.com)",
          description: "The most trusted and recognized extension worldwide. Gives your project immediate credibility and authority."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Memorable & Catchy",
          description: "QuickPayNow is short, direct, and explains the service clearly without complexity. Easy to spell, easy to say."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "SEO Friendly",
          description: "Strong keywords (Quick, Pay, Now) help dominate search results in the financial sector."
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "App Ready",
          description: "An excellent name for a mobile app. Fits perfectly on icons and small screens while conveying action."
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Trust & Speed",
          description: "The selected words reflect the values of speed and security required in any modern financial service."
        },
        {
          icon: <DollarSign className="w-6 h-6" />,
          title: "High Investment Value",
          description: "Short, relevant financial domains appreciate in value over time, making this a smart digital asset."
        }
      ]
    },
    ar: {
      title: "لماذا يعتبر QuickPayNow.com فرصة ذهبية؟",
      subtitle: "اختيار الاسم الصحيح هو الخطوة الأولى لنجاح مشروعك الرقمي.",
      items: [
        {
          icon: <Globe className="w-6 h-6" />,
          title: "نطاق عالمي (.com)",
          description: "الامتداد الأكثر موثوقية وشهرة في العالم. يمنح مشروعك مصداقية فورية."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "سهل الحفظ والتذكر",
          description: "QuickPayNow اسم قصير، مباشر، ويشرح الخدمة بوضوح دون تعقيد."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "صديق لمحركات البحث",
          description: "كلمات مفتاحية قوية (Quick, Pay, Now) تساعد في تصدر نتائج البحث في قطاع المال."
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "مثالي للتطبيقات",
          description: "اسم ممتاز لتطبيق جوال، يناسب تماماً الأيقونات والشاشات الصغيرة."
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "يوحي بالأمان والسرعة",
          description: "الكلمات المختارة تعكس قيم السرعة والأمان المطلوبة في أي خدمة مالية."
        },
        {
          icon: <DollarSign className="w-6 h-6" />,
          title: "قيمة استثمارية عالية",
          description: "النطاقات المالية القصيرة تزداد قيمتها مع الوقت، مما يجعله استثماراً ذكياً."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            {lang === 'en' ? (
              <>Why is <span className="text-brand-600">QuickPayNow.com</span> a Golden Opportunity?</>
            ) : (
              <>لماذا يعتبر <span className="text-brand-600">QuickPayNow.com</span> فرصة ذهبية؟</>
            )}
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-brand-100 group cursor-default">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};