import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function generateData(points = 24) {
  const arr = [];
  let val = 50 + Math.random() * 20;
  for (let i = 0; i < points; i++) {
    val += (Math.random() - 0.4) * 10;
    arr.push(Math.max(10, Math.min(100, val)));
  }
  return arr;
}

function LineChart({ color = '#00E5FF' }) {
  const data = useMemo(() => generateData(36), []);
  const width = 600;
  const height = 160;
  const max = 100;
  const step = width / (data.length - 1);
  const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * step}, ${height - (d / max) * height}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      <defs>
        <linearGradient id={`glow-${color}`} x1="0" x2="0" y1="0" y2="1">
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
        fill={`url(#glow-${color})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
    </svg>
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

export default function DataShowcase() {
  return (
    <section id="analytics" className="relative py-14 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(0,229,255,0.08),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold">Live performance telemetry</h2>
            <p className="mt-2 text-white/60 max-w-2xl">A hyper-clean, segmented visualization of flow-through rates, fulfillment KPIs, and infrastructure health.</p>
          </div>
          <a href="#demo" className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-[#0a0b0f] border border-white/10 hover:border-[#00E5FF]/40 transition shadow-[0_0_20px_rgba(57,255,20,0.15)]">
            Schedule AI Demo
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Throughput</div>
                <LineChart color="#00E5FF" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Orders Processed</div>
                <LineChart color="#39FF14" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Metric label="Fulfillment SLA" color="#00E5FF" />
              <Metric label="Inventory Sync" color="#39FF14" />
              <Metric label="AP/AR Cycle" color="#00E5FF" />
              <Metric label="System Health" color="#39FF14" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Operational Feed</div>
            <div className="space-y-3">
              {['Auto-reconciled 1,284 invoices', 'Predictive restock triggered (SKU-4921)', 'New anomaly rule deployed', 'Latency normalized across US-EAST-1'].map((t, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-3">
                  <div className="text-sm">{t}</div>
                  <div className="text-[10px] font-mono px-2 py-1 rounded bg-[#0a0b0f] border border-white/10" style={{ color: i % 2 === 0 ? '#00E5FF' : '#39FF14' }}>
                    LIVE
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-black/50">
              <div className="text-xs uppercase tracking-widest text-white/50">Cloud Reliability</div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_16px_#39FF14]" />
                <div className="text-sm text-white/70">Multi-region active-active, 99.99% uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
