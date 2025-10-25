import React from 'react';
import { Users, Calendar, BookOpen, Wallet, Shield, Cloud, BarChart2, Bot } from 'lucide-react';

const modules = [
  { icon: Users, title: 'Student Information', accent: '#00E5FF', desc: 'Unified profiles, enrollment, guardians, and attendance with real-time sync.' },
  { icon: Calendar, title: 'Timetabling', accent: '#39FF14', desc: 'AI-assisted scheduling, conflict resolution, and room optimization.' },
  { icon: BookOpen, title: 'Academics', accent: '#00E5FF', desc: 'Courses, grading, rubrics, mastery tracking, and digital transcripts.' },
  { icon: Wallet, title: 'Finance & Fees', accent: '#39FF14', desc: 'Fee invoicing, scholarships, grants, and automated reconciliation.' },
  { icon: BarChart2, title: 'Learning Analytics', accent: '#00E5FF', desc: 'Cohort insights, engagement heatmaps, and predictive outcomes.' },
  { icon: Bot, title: 'AI Copilot', accent: '#39FF14', desc: 'Generate plans, surface risks, and automate repetitive tasks responsibly.' },
  { icon: Cloud, title: 'Cloud Reliability', accent: '#00E5FF', desc: 'Multi-region, autoscaling, zero-downtime updates, continuous validation.' },
  { icon: Shield, title: 'Security & Compliance', accent: '#39FF14', desc: 'RBAC, encryption, audit logs, and FERPA-aligned privacy controls.' },
];

export default function SchoolModules() {
  return (
    <section id="modules" className="relative py-14 sm:py-20 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.06),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold">One platform. Every campus workflow.</h2>
          <p className="mt-2 text-white/60 max-w-2xl">Professional, cool, and purpose-built for schools—from admissions to alumni.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-950/60 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${m.accent}, transparent)` }} />
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: `${m.accent}22`, boxShadow: `0 0 30px ${m.accent}33` }}>
                    <m.icon className="h-5 w-5" style={{ color: m.accent }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{m.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{m.desc}</p>
                <div className="mt-5 grid grid-cols-4 gap-2 text-center">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-md border border-white/10 bg-black/40">
                      <div className="px-2 py-2">
                        <div className="text-[10px] uppercase tracking-wider text-white/50">Seg {i + 1}</div>
                        <div className="mt-1 font-mono text-lg">
                          <span className="text-white">{Math.floor(70 + Math.random() * 30)}</span>
                          <span className="text-[10px] ml-1" style={{ color: m.accent }}>%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${m.accent}33, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
