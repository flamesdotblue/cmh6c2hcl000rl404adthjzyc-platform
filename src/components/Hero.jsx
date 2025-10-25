import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] sm:h-[86vh] overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/40 via-[#0a0b0f]/50 to-[#0a0b0f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,229,255,0.15),_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 mb-4 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_20px_#39FF14]" />
            <span className="text-xs text-white/70">Real-time ERP Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Operate at the speed of intelligence
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-white/70">
            Unify finance, supply chain, and operations with a cloud-native ERP engineered for real-time analytics, fault-tolerant reliability, and end-to-end efficiency.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a id="demo" href="#features" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[#00E5FF] to-[#39FF14] text-black shadow-[0_0_35px_rgba(0,229,255,0.35)] hover:brightness-110 transition">
              Schedule AI Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">99.99% uptime</span>
              <span className="inline-flex items-center gap-1">SOC 2 Type II</span>
              <span className="inline-flex items-center gap-1"><span className="text-[#00E5FF]">Live</span> dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
