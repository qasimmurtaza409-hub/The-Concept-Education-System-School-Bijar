import React from 'react';
import { X, BookOpen, Download, Printer, CheckCircle, Shield, Phone, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmission,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 via-sky-700 to-blue-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolLogo size="sm" lightText={true} />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                Official School Document
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-crest text-white">
                School Prospectus &amp; Academic Guide
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-700 text-sm">
          
          {/* Welcome Message */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 text-slate-800">
            <h4 className="font-bold text-amber-950 font-serif-crest text-base mb-1">
              Message from Academic Administration
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              At <strong>The Concept Education System Bijar</strong>, we believe every child is born with limitless potential. Our mission is to combine the highest standards of modern academic excellence with deep-rooted moral, ethical, and Islamic education. We foster curious thinkers, fluent communicators, and disciplined young citizens.
            </p>
          </div>

          {/* Key Policies & Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Modern Conceptual Curriculum</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emphasis on critical thinking, spoken English fluency, mathematics problem-solving, and hands-on sciences without memorization pressure.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Daily Quran &amp; Tajweed Wing</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nazra Quran recitation with authentic Tajweed rules, memorization of daily Masnoon Duas, and Sunnah manners taught by dedicated Qaris.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>Safe &amp; Disciplined Environment</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                CCTV-monitored campus, strict boundary security, trained female and male staff, and clean hygienic surroundings.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h5 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>Parent-Teacher Partnership</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monthly parent-teacher conferences, weekly diary progress monitoring, and direct access to teachers through WhatsApp updates.
              </p>
            </div>
          </div>

          {/* Admission Guidelines & Required Documents */}
          <div className="border-t border-slate-200 pt-5 space-y-3">
            <h4 className="font-bold text-slate-900 font-serif-crest text-base">
              Admission Requirements &amp; Checklist
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-100 rounded-lg flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">1</span>
                <span>Copy of Nadra B-Form / Birth Certificate</span>
              </div>
              <div className="p-2.5 bg-slate-100 rounded-lg flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">2</span>
                <span>2 Passport Size Recent Photographs</span>
              </div>
              <div className="p-2.5 bg-slate-100 rounded-lg flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">3</span>
                <span>Copy of Father/Guardian CNIC</span>
              </div>
              <div className="p-2.5 bg-slate-100 rounded-lg flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">4</span>
                <span>School Leaving Certificate (if transfer)</span>
              </div>
            </div>
          </div>

          {/* Fee Policy Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs space-y-1.5">
            <strong className="text-blue-900 block text-sm">Affordable &amp; Transparent Fee Policy:</strong>
            <p className="text-slate-700">
              We believe quality education must be accessible to all deserving families. We offer attractive sibling concessions and merit scholarships for high achievers and orphans. Contact our office for exact grade-wise fee structures.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Location: <strong>{SCHOOL_INFO.location}, {SCHOOL_INFO.city}</strong></span>
            <span className="block sm:inline sm:ml-2">Call: <strong>{SCHOOL_INFO.phoneFormatted}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow transition-colors cursor-pointer flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>Apply Online</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
