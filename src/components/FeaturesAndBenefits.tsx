import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  Sparkles, 
  BookHeart, 
  Award, 
  Brain, 
  Lightbulb, 
  Check, 
  ArrowRight,
  Shield,
  HeartHandshake
} from 'lucide-react';
import { FEATURES_DATA, BENEFITS_DATA } from '../data/schoolData';
import { FeatureItem, BenefitItem } from '../types';

interface FeaturesAndBenefitsProps {
  onOpenAdmission: () => void;
}

export const FeaturesAndBenefits: React.FC<FeaturesAndBenefitsProps> = ({ onOpenAdmission }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'features' | 'benefits'>('all');

  const getIcon = (name: string, className: string = 'w-6 h-6') => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'BookOpenCheck':
        return <BookOpenCheck className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'BookHeart':
        return <BookHeart className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'Lightbulb':
        return <Lightbulb className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-serif-crest">
            Our Features &amp; Our Benefits
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Directly from our educational charter, here is how <span className="font-bold text-slate-900">The Concept Education System Bijar</span> prepares your child for academic excellence, moral dignity, and future leadership.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Pillars (8)
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'features'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Our Features (4)
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'benefits'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Our Benefits (4)
            </button>
          </div>
        </div>

        {/* 2-Column Split directly matching the flyer's structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT: OUR FEATURES */}
          {(activeTab === 'all' || activeTab === 'features') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-blue-600 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-serif-crest tracking-tight">
                      Our Features
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Foundational strengths of our school</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Campus Facilities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {FEATURES_DATA.map((feat: FeatureItem) => (
                  <div
                    key={feat.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors mb-4">
                        {getIcon(feat.iconName)}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {feat.title}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">
                        {feat.subtitle}
                      </p>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {feat.points.slice(0, 2).map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RIGHT: OUR BENEFITS */}
          {(activeTab === 'all' || activeTab === 'benefits') && (
            <div id="benefits" className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-emerald-600 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-serif-crest tracking-tight">
                      Our Benefits
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Lifelong advantages for your children</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Holistic Outcomes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {BENEFITS_DATA.map((ben: BenefitItem) => (
                  <div
                    key={ben.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors mb-4">
                        {getIcon(ben.iconName)}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {ben.title}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                        {ben.subtitle}
                      </p>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {ben.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {ben.points.slice(0, 2).map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Quick Quote / CTA Strip */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-900 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Limited Seats Available For New Session
            </span>
            <h3 className="text-2xl font-bold font-serif-crest text-white">
              Ready to give your child the education they truly deserve?
            </h3>
            <p className="text-sm text-sky-200 max-w-xl">
              Visit our campus near Madni Public Model High School, Bijar, or submit your online application today.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>ENROLL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
