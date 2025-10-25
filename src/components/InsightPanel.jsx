import React, { useEffect, useState } from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';

function Ring({ value = 72, color = '#7c3aed' }) {
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (value / 100) * circ;
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
      <circle cx="50" cy="50" r={radius} fill="none" stroke={color} strokeWidth="8" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{filter:`drop-shadow(0 0 8px ${color}66)`}} />
      <text x="50" y="54" textAnchor="middle" className="fill-white font-mono text-sm">{value}%</text>
    </svg>
  );
}

function MiniBar({ label, val, tint }) {
  return (
    <div className="">
      <div className="text-[11px] uppercase tracking-widest text-white/50">{label}</div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${val}%`, background: `linear-gradient(90deg, ${tint}, #3b82f6)` }} />
      </div>
    </div>
  );
}

export default function InsightPanel() {
  const [vals, setVals] = useState({eng: 78, att: 84, fin: 66, ops: 91});

  useEffect(() => {
    const id = setInterval(() => {
      setVals(v => ({
        eng: Math.max(40, Math.min(100, v.eng + (Math.random() - 0.5) * 6)),
        att: Math.max(40, Math.min(100, v.att + (Math.random() - 0.5) * 5)),
        fin: Math.max(40, Math.min(100, v.fin + (Math.random() - 0.5) * 7)),
        ops: Math.max(40, Math.min(100, v.ops + (Math.random() - 0.5) * 4)),
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="insights" className="relative py-14 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold">Live insights, calm decisions</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A compact, aurora-glass dashboard of what matters now—engagement, attendance, finance, and ops health.</p>
          </div>
          <a href="#demo" className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-white text-black hover:brightness-110 transition shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            Book Live Demo
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center gap-3">
                <Ring value={Math.round(vals.eng)} color="#7c3aed" />
                <div className="text-xs text-white/70">Engagement Index</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Ring value={Math.round(vals.att)} color="#3b82f6" />
                <div className="text-xs text-white/70">Attendance</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Ring value={Math.round(vals.fin)} color="#22d3ee" />
                <div className="text-xs text-white/70">Finance Health</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Ring value={Math.round(vals.ops)} color="#a78bfa" />
                <div className="text-xs text-white/70">Ops Reliability</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MiniBar label="On-time submissions" val={Math.round((vals.eng + 10) % 100)} tint="#7c3aed" />
              <MiniBar label="Intervention coverage" val={Math.round((vals.att + 6) % 100)} tint="#3b82f6" />
              <MiniBar label="Budget adherence" val={Math.round((vals.fin + 12) % 100)} tint="#22d3ee" />
              <MiniBar label="Incident resolution" val={Math.round((vals.ops + 8) % 100)} tint="#a78bfa" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5">
            <div className="text-xs uppercase tracking-widest text-white/60 mb-2">Trust Center</div>
            <div className="space-y-3">
              {[
                {t:"Zero-downtime releases", ok:true},
                {t:"Row-level security & RBAC", ok:true},
                {t:"End-to-end encryption", ok:true},
                {t:"Real-time audit trails", ok:true},
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  <div className="text-sm">{item.t}</div>
                  {item.ok ? <CheckCircle2 className="h-5 w-5 text-[#22c55e]"/> : <Lock className="h-5 w-5 text-white/60"/>}
                </div>
              ))}
            </div>

            <div id="trust" className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="text-xs uppercase tracking-widest text-white/60">Compliance</div>
              <div className="mt-2 text-sm text-white/80">Built for privacy-first institutions. FERPA alignment, SOC 2 Type II, SSO/SAML, data residency options.</div>
            </div>

            <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white hover:brightness-110 transition">
              Talk to an Education Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
