/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { MouseGlow } from "./components/MouseGlow";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { CareerTimeline } from "./components/CareerTimeline";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { OpreixCaseStudy } from "./components/OpreixCaseStudy";
import { ESSMSSCaseStudy } from "./components/ESSMSSCaseStudy";
import { SolutionEngineeringJourney } from "./components/SolutionEngineeringJourney";
import { BusinessAnalysisFramework } from "./components/BusinessAnalysisFramework";
import { TechnologyLandscape } from "./components/TechnologyLandscape";
import { ValueProposition } from "./components/ValueProposition";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CVModal } from "./components/CVModal";
import { KineticRibbon } from "./components/KineticRibbon";

function MainContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-[#0078d4]/30 selection:text-white font-sans transition-all duration-300">
      {/* Subtle cursor radial light */}
      <MouseGlow />

      {/* Primary Navigation with Language Switcher */}
      <Navigation onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section with AI Intelligence Core */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />

        {/* Kinetic Typography Accent */}
        <KineticRibbon />

        {/* 2. Professional Introduction & Positioning */}
        <About />

        {/* 3. Core Competency Architecture */}
        <Expertise />

        {/* 4. Career Milestones & Leadership Journey */}
        <CareerTimeline />

        {/* 5. Selected Projects & Transformation Engagements */}
        <FeaturedProjects />

        {/* 6. Highlighted Case Study: OPREIX Enterprise Platform */}
        <OpreixCaseStudy />

        {/* 7. Highlighted Case Study: ESS / MSS Web Portal & Integration */}
        <ESSMSSCaseStudy />

        {/* 8. Solution Engineering Journey */}
        <SolutionEngineeringJourney />

        {/* 9. Business Analysis Framework (11-Stage Progressive Methodology) */}
        <BusinessAnalysisFramework />

        {/* 10. Technology Landscape & All Platforms with Logos */}
        <TechnologyLandscape />

        {/* 11. Consulting Value Proposition */}
        <ValueProposition />

        {/* 12. Direct Contact & Executive Advisory */}
        <Contact onOpenCV={() => setCvModalOpen(true)} />
      </main>

      {/* Dignified Footer */}
      <Footer />

      {/* Full Executive CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
