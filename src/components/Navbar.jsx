import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0b0f]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00E5FF] to-[#39FF14] flex items-center justify-center shadow-[0_0_25px_rgba(0,229,255,0.35)]">
            <Rocket className="h-4 w-4 text-black" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-tight text-white">HyperClean ERP</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Capabilities</a>
          <a href="#analytics" className="hover:text-white transition">Analytics</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#demo" className="inline-flex items-center justify-center rounded-md text-sm font-semibold px-4 py-2 bg-[#00E5FF] text-black hover:brightness-110 transition shadow-[0_0_30px_rgba(0,229,255,0.35)]">
            Schedule AI Demo
          </a>
          <button className="sm:hidden p-2 rounded-md border border-white/10 text-white/80" aria-label="Open Menu"><Menu className="h-5 w-5"/></button>
        </div>
      </div>
    </header>
  );
}
