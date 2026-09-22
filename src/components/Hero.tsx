import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Sun
} from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onOpenProspectus }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-sky-700 to-blue-800 text-white pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Decorative Background Elements (Radiant Sun motif inspired by the flyer) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Sunburst Ray lines */}
      <div className="absolute top-0 right-1/4 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Admission Banner Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/90 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md transform hover:scale-105 transition-transform">
              <Sun className="w-4 h-4 text-amber-950 animate-spin" style={{ animationDuration: '10s' }} />
              <span>ADMISSION OPEN</span>
              <span className="bg-slate-950 text-amber-300 text-[10px] px-2 py-0.5 rounded-full uppercase">
                New Academic Session
              </span>
            </div>

            {/* School Name & Campus */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-crest text-white leading-tight">
                The Concept <br />
                <span className="text-amber-300">Education System</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <span className="text-xl sm:text-2xl font-bold tracking-wide text-sky-200">
                  Bijar Campus
                </span>
                <span className="text-xs bg-blue-900/60 border border-blue-400/30 text-sky-200 px-2.5 py-0.5 rounded-md font-semibold">
                  Excellence in Learning
                </span>
              </div>
            </div>

            {/* The Iconic Tagline from the Flyer */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 italic tracking-wide">
              &ldquo;{SCHOOL_INFO.tagline}&rdquo;
            </p>

            {/* Core Value Proposition */}
            <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to the premier educational institution in Bijar. We blend modern conceptual academics, certified professional educators, and essential life skills with foundational Quranic education and moral grooming.
            </p>

            {/* Quick 4-Pillar Bullets from Flyer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-2xl mx-auto lg:mx-0 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="font-semibold text-white">Professional Teachers</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span className="font-semibold text-white">Quran Education</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="font-semibold text-white">Interactive Learning</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-sky-300 flex-shrink-0" />
                <span className="font-semibold text-white">Child Development</span>
              </div>
            </div>

            {/* High-Impact Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Flyer's prominent yellow "ENROLL NOW" button */}
              <button
                id="hero-enroll-btn"
                onClick={onOpenAdmission}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base sm:text-lg font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 hover:from-yellow-400 hover:to-amber-500 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-amber-300 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-slate-950" />
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                id="hero-prospectus-btn"
                onClick={onOpenProspectus}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl border border-white/30 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Prospectus</span>
              </button>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Office</span>
              </a>
            </div>

            {/* Contact & Location Strip directly from Flyer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-sky-100">
              <a 
                href={`tel:${SCHOOL_INFO.phone}`} 
                className="flex items-center gap-2 hover:text-amber-300 font-bold bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-400/20"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Helpline: {SCHOOL_INFO.phoneFormatted}</span>
              </a>
              <div className="flex items-center gap-2 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-400/20">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>{SCHOOL_INFO.location}, {SCHOOL_INFO.city}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual School Card & Official Crest Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-amber-400/80">
              
              {/* Card Ribbon */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                Official Campus Portal
              </div>

              {/* Centered Crest */}
              <div className="flex flex-col items-center text-center mt-2">
                <SchoolLogo size="xl" showText={false} />
                <h3 className="text-xl font-bold font-serif-crest text-slate-900 mt-3 leading-snug">
                  The Concept Education System
                </h3>
                <p className="text-xs uppercase font-extrabold text-blue-700 tracking-widest mt-0.5">
                  Bijar Campus • Est. Excellence
                </p>
                <p className="text-xs text-slate-600 mt-2 italic font-medium">
                  {SCHOOL_INFO.tagline}
                </p>
              </div>

              {/* Quick Admission Overview Box */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-500">Status:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Admissions Open
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-500">Offered Classes:</span>
                  <span className="font-bold text-slate-800">Playgroup to Middle / Secondary</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-500">Core Focus:</span>
                  <span className="font-bold text-blue-700">Concept Learning & Quran</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-500">Location:</span>
                  <span className="font-medium text-slate-800 text-right">Near Madni Public Model High School</span>
                </div>
              </div>

              {/* Direct Card Action */}
              <div className="mt-5 space-y-2">
                <button
                  onClick={onOpenAdmission}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Start Admission Application</span>
                </button>
                <div className="text-center">
                  <a
                    href={`tel:${SCHOOL_INFO.phone}`}
                    className="text-xs text-blue-700 hover:underline font-bold inline-flex items-center gap-1 mt-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Or Call Admissions Desk: {SCHOOL_INFO.phoneFormatted}</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Faculty • Disciplined Islamic Environment</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
