import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Target, 
  Heart, 
  Compass, 
  GraduationCap, 
  ShieldCheck,
  Sun
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface AboutSectionProps {
  onOpenAdmission?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Vision & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>About Our Institution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-serif-crest leading-tight">
              Shaping Minds Through <br />
              <span className="text-blue-700">Concepts, Not Cramming</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded in Bijar with the steadfast vision that <strong className="text-slate-900">&ldquo;{SCHOOL_INFO.tagline}&rdquo;</strong>, <strong>The Concept Education System</strong> redefines early and primary education. We foster an inquisitive classroom atmosphere where children understand the &lsquo;Why&rsquo; and &lsquo;How&rsquo; behind every lesson.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Concept-First Methodology</h4>
                  <p className="text-xs text-slate-600">
                    Subjects are introduced through visual illustrations, real-world applications, and engaging experiments rather than robotic rote learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Integrated Islamic Values</h4>
                  <p className="text-xs text-slate-600">
                    Spiritual grounding through daily Quran recitation with correct Tajweed, Masnoon prayers, and grooming in Adab and Sunnah.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-800 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Holistic Personality Development</h4>
                  <p className="text-xs text-slate-600">
                    Confidence building through debates, sports, group tasks, and personalized mentoring for every individual student.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Enroll Your Child Today
              </a>
            </div>
          </div>

          {/* Right Comparison Box: Traditional vs The Concept Education System */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="text-center pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  The Educational Difference
                </span>
                <h3 className="text-xl font-bold font-serif-crest text-slate-900 mt-1">
                  Why Parents in Bijar Choose Us
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                
                {/* Comparison Row 1 */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="space-y-1 pr-2 border-r border-slate-100 text-slate-500">
                    <span className="flex items-center gap-1 font-bold text-rose-600 text-[11px] uppercase">
                      <XCircle className="w-3.5 h-3.5" /> Traditional Schools
                    </span>
                    <p className="text-xs">Rote learning &amp; cramming (ratta) for exams only.</p>
                  </div>
                  <div className="space-y-1 pl-2">
                    <span className="flex items-center gap-1 font-bold text-emerald-600 text-[11px] uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Concept System
                    </span>
                    <p className="text-xs font-semibold text-slate-900">Deep conceptual understanding &amp; critical reasoning.</p>
                  </div>
                </div>

                {/* Comparison Row 2 */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="space-y-1 pr-2 border-r border-slate-100 text-slate-500">
                    <span className="flex items-center gap-1 font-bold text-rose-600 text-[11px] uppercase">
                      <XCircle className="w-3.5 h-3.5" /> Traditional Schools
                    </span>
                    <p className="text-xs">Overcrowded classrooms with neglected weaker students.</p>
                  </div>
                  <div className="space-y-1 pl-2">
                    <span className="flex items-center gap-1 font-bold text-emerald-600 text-[11px] uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Concept System
                    </span>
                    <p className="text-xs font-semibold text-slate-900">Individual attention &amp; personalized learning pace.</p>
                  </div>
                </div>

                {/* Comparison Row 3 */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="space-y-1 pr-2 border-r border-slate-100 text-slate-500">
                    <span className="flex items-center gap-1 font-bold text-rose-600 text-[11px] uppercase">
                      <XCircle className="w-3.5 h-3.5" /> Traditional Schools
                    </span>
                    <p className="text-xs">Separate madrasa needed in evenings for Quran.</p>
                  </div>
                  <div className="space-y-1 pl-2">
                    <span className="flex items-center gap-1 font-bold text-emerald-600 text-[11px] uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Concept System
                    </span>
                    <p className="text-xs font-semibold text-slate-900">Integrated Quran &amp; Tajweed within regular school hours.</p>
                  </div>
                </div>

                {/* Comparison Row 4 */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="space-y-1 pr-2 border-r border-slate-100 text-slate-500">
                    <span className="flex items-center gap-1 font-bold text-rose-600 text-[11px] uppercase">
                      <XCircle className="w-3.5 h-3.5" /> Traditional Schools
                    </span>
                    <p className="text-xs">Passive listening with heavy book burden.</p>
                  </div>
                  <div className="space-y-1 pl-2">
                    <span className="flex items-center gap-1 font-bold text-emerald-600 text-[11px] uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Concept System
                    </span>
                    <p className="text-xs font-semibold text-slate-900">Interactive activities, group tasks, and public speaking.</p>
                  </div>
                </div>

              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Campus Location: <strong>Near Madni Model High School</strong></span>
                <span className="font-bold text-blue-700">Bijar</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
