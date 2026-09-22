import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, GraduationCap, Clock } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenProspectus: () => void;
  submittedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmission,
  onOpenProspectus,
  submittedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      {/* Top Announcement Bar - Recreating the Yellow & Blue aesthetic */}
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700 text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-amber-400 text-slate-900 font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide animate-pulse">
              ADMISSION OPEN
            </span>
            <span className="font-semibold text-sky-100 hidden sm:inline">
              |
            </span>
            <span className="font-medium text-white/95">
              {SCHOOL_INFO.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{SCHOOL_INFO.phoneFormatted}</span>
            </a>
            <span className="text-white/40 hidden md:inline">•</span>
            <div className="hidden md:flex items-center gap-1 text-sky-100">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{SCHOOL_INFO.location}, {SCHOOL_INFO.city}</span>
            </div>
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Title */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <SchoolLogo size="md" showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#benefits" className="hover:text-blue-600 transition-colors">
              Benefits
            </a>
            <a href="#programs" className="hover:text-blue-600 transition-colors">
              Programs
            </a>
            <a href="#quran" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Quran Studies
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact & Map
            </a>
          </nav>

          {/* Actions: Prospectus + Call + ENROLL NOW */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenProspectus}
              className="text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
            >
              Prospectus
            </button>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SCHOOL_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenAdmission}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs md:text-sm font-extrabold uppercase tracking-wide text-slate-900 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 hover:from-yellow-400 hover:to-amber-500 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 border border-amber-300 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-slate-900" />
              <span>ENROLL NOW</span>
              {submittedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {submittedCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAdmission}
              className="px-3 py-1.5 text-xs font-black uppercase text-slate-900 bg-amber-400 rounded-md shadow-sm"
            >
              ENROLL
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              About The Concept School
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Our Features
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Our Benefits
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Class Programs (Early Years to Middle)
            </a>
            <a
              href="#quran"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-emerald-700 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Quran Education & Tajweed
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-3 text-center text-sm font-extrabold uppercase text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-md"
            >
              🎓 ENROLL NOW - ADMISSIONS OPEN
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProspectus();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              📄 View School Prospectus
            </button>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 rounded-lg border border-blue-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
