import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Language } from '../App';

interface ContactFormProps {
  lang: Language;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const content = {
    en: {
      successTitle: "Offer Received Successfully!",
      successMsg: "Thank you for your interest in QuickPayNow.com. We have received your offer and will reply via email within 24 hours.",
      sendAnother: "Send Another Offer",
      labelName: "Full Name",
      holderName: "John Doe",
      labelEmail: "Email Address",
      holderEmail: "john@company.com",
      labelOffer: "Offer Amount (USD)",
      minOffer: "Minimum offer is $100",
      labelMsg: "Additional Message (Optional)",
      holderMsg: "Do you have any other questions?",
      btnSubmit: "Submit Offer",
      sending: "Sending...",
      disclaimer: "This offer is non-binding. The sale will be conducted securely via a third-party escrow service.",
      errorMsg: "Something went wrong. Please try again.",
      orWhatsApp: "Or chat directly on WhatsApp"
    },
    ar: {
      successTitle: "تم استلام عرضك بنجاح!",
      successMsg: "شكراً لاهتمامك بـ QuickPayNow.com. لقد تلقينا عرضك وسنقوم بمراجعته والرد عليك عبر البريد الإلكتروني خلال 24 ساعة.",
      sendAnother: "إرسال عرض آخر",
      labelName: "الاسم الكامل",
      holderName: "أحمد محمد",
      labelEmail: "البريد الإلكتروني",
      holderEmail: "ahmed@company.com",
      labelOffer: "قيمة العرض (بالدولار الأمريكي)",
      minOffer: "الحد الأدنى للعروض هو 100$",
      labelMsg: "رسالة إضافية (اختياري)",
      holderMsg: "هل لديك أي استفسارات أخرى؟",
      btnSubmit: "إرسال العرض",
      sending: "جاري الإرسال...",
      disclaimer: "هذا العرض غير ملزم. ستتم عملية البيع بأمان عبر خدمة ضمان طرف ثالث.",
      errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      orWhatsApp: "أو تواصل معنا مباشرة عبر واتساب"
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblpnbep", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-fade-in text-slate-900 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.successTitle}</h3>
        <p className="text-slate-600 mb-8">
          {t.successMsg}
        </p>
        <button 
          onClick={() => setFormState('idle')}
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-8 rounded-xl transition-colors"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto text-slate-900 text-left" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">{t.labelName}</label>
          <input 
            required 
            name="name"
            type="text" 
            id="name" 
            placeholder={t.holderName}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">{t.labelEmail}</label>
          <input 
            required 
            name="email"
            type="email" 
            id="email" 
            placeholder={t.holderEmail}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="offer" className="block text-sm font-bold text-slate-700 mb-2">{t.labelOffer}</label>
        <div className="relative">
          <div className={`absolute inset-y-0 ${lang === 'ar' ? 'left-0 pl-4' : 'left-0 pl-4'} flex items-center pointer-events-none`}>
            <span className="text-slate-500 font-bold">$</span>
          </div>
          <input 
            required 
            name="offer"
            type="number" 
            min="100"
            id="offer" 
            placeholder="5000"
            className="w-full px-4 py-3 pl-8 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">{t.minOffer}</p>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">{t.labelMsg}</label>
        <textarea 
          name="message"
          id="message" 
          rows={3}
          placeholder={t.holderMsg}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
        ></textarea>
      </div>

      {formState === 'error' && (
        <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
          {t.errorMsg}
        </div>
      )}

      <button 
        type="submit" 
        disabled={formState === 'submitting'}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-brand-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t.btnSubmit}
          </>
        )}
      </button>
      
      {/* WhatsApp Button */}
      <div className="mt-6">
        <div className="relative flex py-2 items-center mb-4">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase font-semibold tracking-wider">{lang === 'en' ? 'OR' : 'أو'}</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <a 
          href="https://wa.me/201010373331" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 group"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.357-5.207c0-5.42 4.409-9.85 9.814-9.85 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.42-4.413 9.85-9.834 9.85Zm0-18C6.141 3.785 2.204 7.723 2.204 12.564c0 1.546.402 3.042 1.167 4.368L2.151 22l5.17-1.356c1.27.696 2.72 1.064 4.221 1.064 5.931 0 10.762-4.832 10.762-10.785 0-2.875-1.119-5.575-3.152-7.609C17.117 1.28 14.416.165 12.051.165Z"/>
          </svg>
          {t.orWhatsApp}
        </a>
      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        {t.disclaimer}
      </p>
    </form>
  );
};