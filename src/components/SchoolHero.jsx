import React from 'react';
import { ArrowRight, Shield, BarChart2, Bot } from 'lucide-react';

export default function SchoolHero() {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side,#00E5FF,transparent)'}} />
        <div className="absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side,#39FF14,transparent)'}} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 mb-4 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]" />
          <span className="text-xs text-white/70">Live Campus ERP + AI</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Professional. Cool. Unmistakably Academic.
        </h1>
        <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-white/70">
          Unify admissions, SIS, attendance, finance, and learning analytics in one modern platform—augmented by an education-grade AI copilot.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a id="demo" href="#modules" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#39FF14] text-black shadow-[0_0_35px_rgba(0,229,255,0.35)] hover:brightness-110 transition">
            Explore Modules
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1"><BarChart2 className="h-3.5 w-3.5 text-[#00E5FF]"/> Real-time analytics</span>
            <span className="inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#39FF14]"/> FERPA-ready</span>
            <span className="inline-flex items-center gap-1"><Bot className="h-3.5 w-3.5 text-[#00E5FF]"/> AI Copilot</span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[{t:'Uptime',v:'99.99%'},{t:'Campuses',v:'120+'},{t:'APIs',v:'80+'},{t:'Regions',v:'5'}].map((m, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-[11px] uppercase tracking-widest text-white/50">{m.t}</div>
              <div className="mt-1 font-mono text-2xl" style={{color: i % 2 === 0 ? '#00E5FF' : '#39FF14'}}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
