import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProspectus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <SchoolLogo size="md" lightText={true} showText={true} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated to academic excellence, disciplined character development, and comprehensive Quranic studies for the children of Bijar and surrounding areas.
            </p>
            <div className="pt-2 text-xs text-amber-300 font-semibold italic">
              &ldquo;{SCHOOL_INFO.tagline}&rdquo;
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Our Vision
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-300 transition-colors">
                  Our Features (Faculty &amp; Campus)
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-300 transition-colors">
                  Our Benefits (Quran &amp; Skills)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors">
                  Class Programs (Playgroup to Middle)
                </a>
              </li>
              <li>
                <a href="#quran" className="hover:text-amber-300 transition-colors">
                  Quran &amp; Tajweed Wing
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenProspectus}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Download Prospectus
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Campus */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
              Campus &amp; Admissions Desk
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{SCHOOL_INFO.location}</strong>, {SCHOOL_INFO.city}, {SCHOOL_INFO.province}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-amber-300 font-mono font-bold text-white">
                  {SCHOOL_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline"
                >
                  WhatsApp Admissions Inquiry
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  Mon – Sat: 7:30 AM – 1:45 PM (Visiting Hours)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center cursor-pointer"
              >
                Inquire / Visit Campus Now
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Near Madni Public Model High School, Bijar
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
