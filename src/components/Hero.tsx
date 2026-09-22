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
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProspectus }) => {
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

            {/* Core Tagline from Flyer */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 tracking-wide font-sans">
              &ldquo;{SCHOOL_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {SCHOOL_INFO.description}
            </p>

            {/* Quick 4 Highlights from Flyer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15">
                <span className="block text-amber-300 font-extrabold text-xs uppercase tracking-wider">Teachers</span>
                <span className="text-xs text-white/90 font-medium">Professional &amp; Caring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15">
                <span className="block text-amber-300 font-extrabold text-xs uppercase tracking-wider">Quran</span>
                <span className="text-xs text-white/90 font-medium">Tajweed &amp; Ethics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15">
                <span className="block text-amber-300 font-extrabold text-xs uppercase tracking-wider">Learning</span>
                <span className="text-xs text-white/90 font-medium">Concept Based</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15">
                <span className="block text-amber-300 font-extrabold text-xs uppercase tracking-wider">Growth</span>
                <span className="text-xs text-white/90 font-medium">Individual Focus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-enroll-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base sm:text-lg font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 hover:from-yellow-400 hover:to-amber-500 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-amber-300 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-slate-950" />
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

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

              {/* Large Central Emblem */}
              <div className="flex flex-col items-center text-center mt-2 space-y-4">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <SchoolLogo size="xl" showText={false} />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-serif-crest text-blue-900 uppercase tracking-tight">
                    The Concept
                  </h3>
                  <h4 className="text-base sm:text-lg font-bold text-amber-600 uppercase tracking-wider">
                    Education System
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                    Bijar Campus • Est. Excellence
                  </p>
                </div>
              </div>

              {/* Flyer Badges Grid */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700">Professional Teachers</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700">Quran Education</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700">Group Activities</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-700">Interactive Learning</span>
                </div>
              </div>

              {/* Direct Card Action */}
              <div className="mt-5 space-y-2">
                <a
                  href="#contact"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Visit Campus / Inquire Now</span>
                </a>
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
