import React from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIBring } from './components/WhatIBring';
import { ImpactDelivered } from './components/ImpactDelivered';
import { HiringSpectrum } from './components/HiringSpectrum';
import { TalentIntelligence } from './components/TalentIntelligence';
import { MyApproach } from './components/MyApproach';
import { CareerEvolution } from './components/CareerEvolution';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070c18] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 antialiased overflow-x-hidden">
      {/* Background Interactive Ambient Network */}
      <NetworkBackground />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Single-Page Continuous Story Flow */}
      <main className="relative z-10">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. What I Bring */}
        <WhatIBring />

        {/* 3. Impact Delivered */}
        <ImpactDelivered />

        {/* 4. Hiring Strategy & Execution (Hiring Spectrum) */}
        <HiringSpectrum />

        {/* 5. Talent Intelligence */}
        <TalentIntelligence />

        {/* 6. My Approach (5-Step Connected Journey) */}
        <MyApproach />

        {/* 7. Career Evolution (From Tech to TA Leadership) */}
        <CareerEvolution />

        {/* 8. Contact / Inquiries */}
        <ContactSection />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
