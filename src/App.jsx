import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DataShowcase from './components/DataShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white font-inter selection:bg-[#00E5FF]/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <DataShowcase />
      </main>
    </div>
  );
}
