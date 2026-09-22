import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS_DATA, SCHOOL_INFO } from '../data/schoolData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Parents Guide
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-crest">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear answers to help you make the best educational decision for your child.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-8 text-center bg-blue-50/60 rounded-2xl p-4 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-700 font-medium">
            Still have questions? Our admissions desk is available on WhatsApp &amp; Call.
          </span>
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {SCHOOL_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
