import React from 'react';
import EduNav from './components/EduNav';
import AuroraHero from './components/AuroraHero';
import ModulesGrid from './components/ModulesGrid';
import InsightPanel from './components/InsightPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-inter">
      <EduNav />
      <main>
        <AuroraHero />
        <ModulesGrid />
        <InsightPanel />
      </main>
    </div>
  );
}
