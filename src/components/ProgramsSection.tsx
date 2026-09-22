import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Baby, 
  BookOpen, 
  Compass, 
  Scroll, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';
import { ProgramInfo } from '../types';

interface ProgramsSectionProps {
  onOpenAdmission: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramInfo>(ACADEMIC_PROGRAMS[0]);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'playgroup-nursery':
        return <Baby className="w-5 h-5 text-amber-500" />;
      case 'primary':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'middle':
        return <Compass className="w-5 h-5 text-purple-500" />;
      case 'quran-wing':
        return <Scroll className="w-5 h-5 text-emerald-500" />;
      default:
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Academic Levels
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-serif-crest">
            Class Programs &amp; Academics
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From playful early childhood learning to structured primary schooling and foundational secondary education.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((program) => {
            const isSelected = selectedProgram.id === program.id;
            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className={`cursor-pointer rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/50 border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-200">
                      {getProgramIcon(program.id)}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">
                    {program.ageGroup}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {program.timing}
                  </span>
                  <span className={`text-xs font-bold ${isSelected ? 'text-blue-700' : 'text-slate-400'}`}>
                    {isSelected ? 'Viewing' : 'Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Program Deep-Dive Display */}
        {selectedProgram && (
          <div className="mt-10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-xs font-black uppercase">
                  <span>Selected Program Overview</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif-crest text-white">
                  {selectedProgram.title} ({selectedProgram.badge})
                </h3>

                <p className="text-sky-200 text-sm sm:text-base leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Subjects Taught */}
                <div className="pt-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300 block mb-2">
                    Key Subject Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 hover:bg-white/15 px-3 py-1 rounded-full text-white border border-white/15 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Regular Session Schedule: <strong className="text-white">{selectedProgram.timing}</strong></span>
                </div>
              </div>

              {/* Right column highlights & apply */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3">
                  Program Highlights &amp; Approach
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-sky-100">
                  {selectedProgram.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <button
                    onClick={onOpenAdmission}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply For {selectedProgram.badge}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
