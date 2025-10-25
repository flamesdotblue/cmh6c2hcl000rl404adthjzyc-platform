import React from 'react';
import { ArrowRight, ShieldCheck, Cloud, Sparkles } from 'lucide-react';

export default function AuroraHero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]" />
      <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl bg-gradient-to-tr from-[#3b82f6] to-[#7c3aed]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-xs text-white/80">New • Autonomous Campus Operations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Reimagine education ops with calm, intelligent software
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-sm sm:text-lg">
            CampusNexus unifies SIS, finance, scheduling, and learning outcomes into a single pane—then amplifies it with explainable AI for faster, fairer decisions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a id="demo" href="#modules" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:brightness-110 transition">
              Book Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="inline-flex items-center gap-1"><Cloud className="h-4 w-4"/> Cloud-native</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4"/> FERPA • SOC 2</span>
              <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4"/> Explainable AI</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {kpi:'99.99%', label:'Uptime'},
            {kpi:'<120ms', label:'Avg. query'},
            {kpi:'40%', label:'Faster close'},
            {kpi:'+18%', label:'Retention'},
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-mono">{m.kpi}</div>
              <div className="text-xs text-white/60 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
