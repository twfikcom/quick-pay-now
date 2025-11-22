import React from 'react';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    en: {
      rights: `© ${new Date().getFullYear()} All rights reserved.`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Us"
    },
    ar: {
      rights: `© ${new Date().getFullYear()} جميع الحقوق محفوظة.`,
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بنا"
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className={`text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-xl font-black text-slate-800 tracking-tight block mb-2">
            QuickPay<span className="text-accent-500">Now</span>.com
          </span>
          <p className="text-slate-500 text-sm">
            {t.rights}
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-brand-600 transition-colors">{t.privacy}</a>
          <a href="#" className="hover:text-brand-600 transition-colors">{t.terms}</a>
          <button onClick={() => document.getElementById('contact-section')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-brand-600 transition-colors">{t.contact}</button>
        </div>
      </div>
    </footer>
  );
};