import React from 'react';
import SchoolNavbar from './components/SchoolNavbar';
import SchoolHero from './components/SchoolHero';
import SchoolModules from './components/SchoolModules';
import SchoolInsights from './components/SchoolInsights';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white font-inter selection:bg-[#00E5FF]/20 selection:text-white">
      <SchoolNavbar />
      <main>
        <SchoolHero />
        <SchoolModules />
        <SchoolInsights />
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-6 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to modernize your campus operations?</h3>
              <p className="mt-3 text-white/70 max-w-2xl mx-auto">Unify admissions, academics, finance, and guardians in one intelligent system. Experience hyper-clean visibility and AI-powered automation built for education.</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#demo" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#39FF14] text-black shadow-[0_0_35px_rgba(0,229,255,0.35)] hover:brightness-110 transition">Request Live Demo</a>
                <a href="#modules" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-[#0a0b0f] border border-white/10 hover:border-[#00E5FF]/40 transition">Explore Modules</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">© {new Date().getFullYear()} EduNexus ERP+AI. Privacy-first. FERPA-aligned. All rights reserved.</div>
      </footer>
    </div>
  );
}
