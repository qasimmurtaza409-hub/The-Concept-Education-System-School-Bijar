import React from 'react';
import { BookOpen, Star, Sparkles, Check, Heart, Shield, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface QuranAndValuesProps {
  onOpenAdmission: () => void;
}

export const QuranAndValues: React.FC<QuranAndValuesProps> = ({ onOpenAdmission }) => {
  return (
    <section id="quran" className="py-16 md:py-24 bg-gradient-to-b from-emerald-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Islamic geometric style background ornament */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Dedicated Quran Education Wing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-crest text-white leading-tight">
              Spiritual &amp; Moral Foundations: <br />
              <span className="text-amber-300">Quran With Tajweed &amp; Ethics</span>
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal">
              At <strong className="text-white">The Concept Education System Bijar</strong>, academic success is harmonized with spiritual guidance. We believe true education is incomplete without grounding our children in the Holy Quran, Sunnah values, and honorable character.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Correct Tajweed &amp; Makharij</h4>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Students learn accurate pronunciation of Arabic letters from qualified and certified Qari teachers.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Daily Sunnah &amp; Duas</h4>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Daily memorization and habituation of essential Masnoon prayers for entering home, eating, travelling, and studying.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Character &amp; Tarbiyah</h4>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Active grooming in honesty, modesty, speaking truth, respecting elders, and empathy toward peers.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 text-slate-900 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Zero Clashing With School</h4>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Seamlessly woven into the regular school timetable so parents do not need extra evening coaching.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmission}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Enroll in Regular &amp; Quran Program</span>
                <Sparkles className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Callout Card: Daily Schedule & Quote */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-emerald-900/90 to-teal-900/90 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="text-center pb-4 border-b border-emerald-500/30">
                <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300">
                  Sacred Tradition &amp; Modern Mind
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-crest text-white mt-1">
                  &ldquo;The best of you are those who learn the Quran and teach it.&rdquo;
                </h3>
                <p className="text-xs text-emerald-200 mt-1 italic">— Sahih al-Bukhari</p>
              </div>

              <div className="mt-5 space-y-3 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Morning Assembly:</strong> Recitation of Surah Al-Fatiha, school anthem &amp; moral thought for the day.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Quran Period:</strong> 40 minutes daily interactive Tajweed practice with specialized Qari.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Hifz Tracking:</strong> Guided memorization of Selected Surahs (Juz Amma) with reward milestones.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Etiquette Workshop:</strong> Practical practice of table manners, greeting with Salam, and cleanliness (Taharah).</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/30 flex items-center justify-between text-xs text-emerald-200">
                <span>Campus Location:</span>
                <span className="font-semibold text-white">{SCHOOL_INFO.location}, {SCHOOL_INFO.city}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
