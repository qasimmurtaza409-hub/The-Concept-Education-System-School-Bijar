import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesAndBenefits } from './components/FeaturesAndBenefits';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { QuranAndValues } from './components/QuranAndValues';
import { ContactAndLocation } from './components/ContactAndLocation';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { ProspectusModal } from './components/ProspectusModal';
import { FloatingActions } from './components/FloatingActions';
import { SubmittedApplication } from './types';

export default function App() {
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [prospectusOpen, setProspectusOpen] = useState(false);
  const [submittedApps, setSubmittedApps] = useState<SubmittedApplication[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ces_admissions');
      if (stored) {
        setSubmittedApps(JSON.parse(stored));
      }
    } catch {
      // Ignore local storage error
    }
  }, []);

  const handleApplicationSubmitted = (app: SubmittedApplication) => {
    setSubmittedApps((prev) => [app, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenProspectus={() => setProspectusOpen(true)}
        submittedCount={submittedApps.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAdmission={() => setAdmissionOpen(true)}
          onOpenProspectus={() => setProspectusOpen(true)}
        />

        {/* Features & Benefits directly from the flyer */}
        <FeaturesAndBenefits
          onOpenAdmission={() => setAdmissionOpen(true)}
        />

        {/* About School Philosophy & Concept vs Cramming */}
        <AboutSection
          onOpenAdmission={() => setAdmissionOpen(true)}
        />

        {/* Academic Levels & Programs */}
        <ProgramsSection
          onOpenAdmission={() => setAdmissionOpen(true)}
        />

        {/* Dedicated Quran & Values Education Wing */}
        <QuranAndValues
          onOpenAdmission={() => setAdmissionOpen(true)}
        />

        {/* Location, Direct Call & Parent Inquiry */}
        <ContactAndLocation />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmission={() => setAdmissionOpen(true)}
        onOpenProspectus={() => setProspectusOpen(true)}
      />

      {/* Floating Quick Action Contacts */}
      <FloatingActions
        onOpenAdmission={() => setAdmissionOpen(true)}
      />

      {/* Online Admission Application Modal */}
      <AdmissionModal
        isOpen={admissionOpen}
        onClose={() => setAdmissionOpen(false)}
        onApplicationSubmitted={handleApplicationSubmitted}
      />

      {/* School Prospectus Modal */}
      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
        onOpenAdmission={() => {
          setProspectusOpen(false);
          setAdmissionOpen(true);
        }}
      />
    </div>
  );
}
