import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesAndBenefits } from './components/FeaturesAndBenefits';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { QuranAndValues } from './components/QuranAndValues';
import { ContactAndLocation } from './components/ContactAndLocation';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProspectusModal } from './components/ProspectusModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [prospectusOpen, setProspectusOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar
        onOpenProspectus={() => setProspectusOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenProspectus={() => setProspectusOpen(true)}
        />

        {/* Features & Benefits directly from the flyer */}
        <FeaturesAndBenefits />

        {/* About School Philosophy & Concept vs Cramming */}
        <AboutSection />

        {/* Academic Levels & Programs */}
        <ProgramsSection />

        {/* Dedicated Quran & Values Education Wing */}
        <QuranAndValues />

        {/* Location, Direct Call & Parent Inquiry */}
        <ContactAndLocation />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenProspectus={() => setProspectusOpen(true)}
      />

      {/* Floating Quick Action Contacts (WhatsApp & Phone) */}
      <FloatingActions />

      {/* School Prospectus Modal */}
      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
        onOpenAdmission={() => {
          setProspectusOpen(false);
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
