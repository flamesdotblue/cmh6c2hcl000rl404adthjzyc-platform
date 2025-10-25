import React from 'react';
import EdNavbar from './components/EdNavbar';
import EdHero from './components/EdHero';
import EdFeatureGrid from './components/EdFeatureGrid';
import EdAIShowcase from './components/EdAIShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white font-inter selection:bg-[#00E5FF]/20 selection:text-white">
      <EdNavbar />
      <main>
        <EdHero />
        <EdFeatureGrid />
        <EdAIShowcase />
      </main>
    </div>
  );
}
