import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'ar';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  // Update document direction and language attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      makeOffer: "Make an Offer",
      interested: "Interested in owning this domain?",
      subtext: "Submit your offer now and we will get back to you as soon as possible. The transfer process is secure and guaranteed.",
    },
    ar: {
      makeOffer: "قدم عرضك الآن",
      interested: "هل أنت مهتم بامتلاك هذا النطاق؟",
      subtext: "أرسل عرضك الآن وسنقوم بالرد عليك في أقرب وقت ممكن. عملية النقل آمنة ومضمونة.",
    }
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-black text-brand-700 tracking-tight">
                QuickPay<span className="text-accent-500">Now</span>
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-slate-600 hover:text-brand-600 transition-colors font-semibold text-sm"
              >
                <Globe className="w-4 h-4" />
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-brand-600 hover:bg-brand-700 text-white px-4 sm:px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-500/30 text-sm sm:text-base whitespace-nowrap"
              >
                {t.makeOffer}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero onCtaClick={scrollToContact} lang={lang} />
        <Stats lang={lang} />
        <Features lang={lang} />
        
        <div id="contact-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
           {/* Decorative background elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
           
           <div className="max-w-4xl mx-auto px-4 relative z-10">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.interested}</h2>
               <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t.subtext}</p>
             </div>
             <ContactForm lang={lang} />
           </div>
        </div>
      </main>

      <Footer lang={lang} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/201010373331"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.357-5.207c0-5.42 4.409-9.85 9.814-9.85 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.42-4.413 9.85-9.834 9.85Zm0-18C6.141 3.785 2.204 7.723 2.204 12.564c0 1.546.402 3.042 1.167 4.368L2.151 22l5.17-1.356c1.27.696 2.72 1.064 4.221 1.064 5.931 0 10.762-4.832 10.762-10.785 0-2.875-1.119-5.575-3.152-7.609C17.117 1.28 14.416.165 12.051.165Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          {lang === 'en' ? 'WhatsApp Us' : 'تواصل معنا'}
        </span>
      </a>
    </div>
  );
};

export default App;