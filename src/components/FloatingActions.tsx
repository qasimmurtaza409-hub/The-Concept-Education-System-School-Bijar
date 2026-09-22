import React from 'react';
import { Phone, MessageCircle, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingActions: React.FC = () => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
      {/* Quick Enroll Floating Button - Scroll to Contact */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl border-2 border-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        title="Contact School / Admissions Desk"
      >
        <GraduationCap className="w-4 h-4 text-slate-950" />
        <span className="hidden sm:inline">Enroll Now</span>
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl border-2 border-white transition-all transform hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp with Admissions Office"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Floating Phone Call Action */}
      <a
        href={`tel:${SCHOOL_INFO.phone}`}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl border-2 border-white transition-all transform hover:scale-110 active:scale-95"
        title={`Call ${SCHOOL_INFO.phoneFormatted}`}
        aria-label={`Call Admissions Office at ${SCHOOL_INFO.phoneFormatted}`}
      >
        <Phone className="w-5 h-5" />
      </a>
    </aside>
  );
};
