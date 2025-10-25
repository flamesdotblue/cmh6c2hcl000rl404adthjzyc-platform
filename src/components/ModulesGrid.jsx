import React from 'react';
import { BookOpen, Users, Calendar, Wallet, Brain, Server, Shield, BarChart2 } from 'lucide-react';

const modules = [
  { icon: BookOpen, title: 'Student Records', desc: 'Unified SIS with enrollment, attendance, transcripts, and guardianship.' },
  { icon: Calendar, title: 'Scheduling', desc: 'Constraint-aware timetabling and invigilation with conflict resolution.' },
  { icon: Wallet, title: 'Finance', desc: 'Fees, grants, GL, and reconciliations—close periods faster with confidence.' },
  { icon: Users, title: 'Admissions', desc: 'Lead-to-enroll funnels with automated communications and scoring.' },
  { icon: Brain, title: 'AI Copilot', desc: 'At-risk detection, lesson planning, and workload balancing with explainability.' },
  { icon: BarChart2, title: 'Learning Analytics', desc: 'Program outcomes, mastery pathways, and intervention insights.' },
  { icon: Server, title: 'Integrations', desc: 'Open APIs and sync for LMS, HRIS, identity, and data warehouse.' },
  { icon: Shield, title: 'Governance', desc: 'RBAC, audits, and privacy tools aligned to FERPA and SOC 2.' },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="relative py-14 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.08),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold">One platform. All campus operations.</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Glass-smooth surfaces, minimal noise—every module snaps into a single source of truth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {modules.map((m, i) => (
            <div key={i} className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#7c3aed]/30 to-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.25)]">
                  <m.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{m.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{m.desc}</p>

              <div className="mt-5 grid grid-cols-4 gap-2 text-center">
                {[...Array(4)].map((_, seg) => (
                  <div key={seg} className="rounded-md border border-white/10 bg-white/5">
                    <div className="px-2 py-2">
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Seg {seg + 1}</div>
                      <div className="mt-1 font-mono text-lg">{Math.floor(60 + Math.random() * 40)}<span className="text-[10px] ml-1 text-white/60">%</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
