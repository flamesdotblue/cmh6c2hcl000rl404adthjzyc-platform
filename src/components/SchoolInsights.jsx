import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function generateData(points = 36) {
  const arr = [];
  let val = 50 + Math.random() * 20;
  for (let i = 0; i < points; i++) {
    val += (Math.random() - 0.4) * 10;
    arr.push(Math.max(10, Math.min(100, val)));
  }
  return arr;
}

function LineChart({ color = '#00E5FF', label }) {
  const data = useMemo(() => generateData(40), []);
  const width = 600;
  const height = 160;
  const max = 100;
  const step = width / (data.length - 1);
  const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * step}, ${height - (d / max) * height}`).join(' ');

  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-white/50 mb-2">{label}</div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
        <defs>
          <linearGradient id={`glow-${label}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
        />
        <motion.path
          d={`${path} L ${width} ${height} L 0 ${height} Z`}
          fill={`url(#glow-${label})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}

function Metric({ label, color }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        let next = v + Math.random() * 8;
        if (next > 100) next = Math.random() * 30;
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-4">
      <div className="text-xs uppercase tracking-widest text-white/50">{label}</div>
      <div className="mt-1 flex items-end gap-2">
        <div className="font-mono text-3xl" style={{ color }}>{value.toFixed(1)}</div>
        <div className="text-[10px] text-white/50 mb-1">/ 100</div>
      </div>
      <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${Math.min(100, value)}%`, background: `linear-gradient(90deg, ${color}, #39FF14)` }} />
      </div>
    </div>
  );
}

export default function SchoolInsights() {
  return (
    <section id="insights" className="relative py-14 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(57,255,20,0.08),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold">Live insights for smarter decisions</h2>
            <p className="mt-2 text-white/60 max-w-2xl">Forecast admissions, track engagement, and uphold SLAs—keep every stakeholder aligned in real time.</p>
          </div>
          <a href="#demo" className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-[#0a0b0f] border border-white/10 hover:border-[#00E5FF]/40 transition shadow-[0_0_20px_rgba(57,255,20,0.15)]">
            Request Demo
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <LineChart color="#00E5FF" label="Engagement Index" />
              <LineChart color="#39FF14" label="Attendance Consistency" />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Metric label="On-time Submissions" color="#00E5FF" />
              <Metric label="Intervention Coverage" color="#39FF14" />
              <Metric label="Resource Utilization" color="#00E5FF" />
              <Metric label="System Health" color="#39FF14" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Highlights</div>
            <ul className="space-y-3 text-sm">
              {[ 'Unified SIS, finance, and academics', 'AI-assisted timetables and planning', 'Segmented dashboards for clarity', 'Multi-campus, multi-region ready' ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5" style={{ color: i % 2 === 0 ? '#00E5FF' : '#39FF14' }} />
                  <span className="text-white/80">{t}</span>
                </li>
              ))}
            </ul>
            <div id="security" className="mt-6 p-4 rounded-xl border border-white/10 bg-black/50">
              <div className="text-xs uppercase tracking-widest text-white/50">Privacy & Compliance</div>
              <div className="mt-2 text-sm text-white/70">Role-based access, encryption in transit and at rest, audit trails, FERPA alignment.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
