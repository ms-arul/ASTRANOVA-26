import React from "react";

import StarNetwork from "./components/StarNetwork";
import GlobalOverlay from "./components/GlobalOverlay";

import CollegeHeader from "./components/CollegeHeader";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Timeline from "./components/Timeline";
import Coordinators from "./components/Coordinators";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden scroll-smooth">
      {/* ✅ Layer 0: Star Network Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarNetwork />
      </div>

      {/* ✅ Layer 1: Global Overlay (Light, Not Dark ✅) */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <GlobalOverlay />
      </div>

      {/* ✅ Layer 2: Header */}
      <div className="relative z-[9999]">
        <CollegeHeader />
      </div>

      {/* ✅ Layer 3: Content */}
      <main className="relative z-10 pt-[155px] sm:pt-[170px] md:pt-[190px]">
        <Hero />
        <Events />
        <Timeline />
        <Coordinators />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
