import React from 'react';
import { Brain, Users, Calendar, Workflow, Cloud, Shield, BarChart2, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Student Information System',
    accent: '#00E5FF',
    desc: 'Centralized student profiles, enrollment, attendance, and guardianship data synchronized in real time.'
  },
  {
    icon: Calendar,
    title: 'Timetabling & Attendance',
    accent: '#39FF14',
    desc: 'AI-assisted scheduling, room optimization, and precise attendance capture across devices.'
  },
  {
    icon: DollarSign,
    title: 'Finance & Fees',
    accent: '#00E5FF',
    desc: 'Transparent ledgers, invoicing, grants, and fee collections with automated reconciliation.'
  },
  {
    icon: Brain,
    title: 'AI Copilot for Educators',
    accent: '#39FF14',
    desc: 'Generate lesson plans, surface at-risk students, and receive proactive interventions.'
  },
  {
    icon: BarChart2,
    title: 'Learning Analytics',
    accent: '#00E5FF',
    desc: 'Cohort insights, mastery tracking, and predictive outcomes powered by streaming telemetry.'
  },
  {
    icon: Workflow,
    title: 'Unified Workflows',
    accent: '#39FF14',
    desc: 'From admissions to alumni—one data model accelerating every academic and admin process.'
  },
  {
    icon: Cloud,
    title: 'Cloud Reliability',
    accent: '#00E5FF',
    desc: 'Multi-region active-active with zero-downtime releases and continuous validation.'
  },
  {
    icon: Shield,
    title: 'Security & Governance',
    accent: '#39FF14',
    desc: 'Granular roles, audit trails, encryption, and privacy controls aligned to FERPA & SOC 2.'
  },
];

export default function EdFeatureGrid() {
  return (
    <section id="features" className="relative py-14 sm:py-20 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.06),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold">One campus. One system of record.</h2>
          <p className="mt-2 text-white/60 max-w-2xl">Segmented digital displays keep every stakeholder aligned—students, faculty, finance, and IT—on live truth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-950/60 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }} />

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: `${f.accent}22`, boxShadow: `0 0 30px ${f.accent}33` }}>
                    <f.icon className="h-5 w-5" style={{ color: f.accent }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{f.desc}</p>

                <div className="mt-5 grid grid-cols-4 gap-2 text-center">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-md border border-white/10 bg-black/40">
                      <div className="px-2 py-2">
                        <div className="text-[10px] uppercase tracking-wider text-white/50">Seg {i + 1}</div>
                        <div className="mt-1 font-mono text-lg">
                          <span className="text-white">{Math.floor(70 + Math.random() * 30)}</span>
                          <span className="text-[10px] ml-1" style={{ color: f.accent }}>%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${f.accent}33, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
