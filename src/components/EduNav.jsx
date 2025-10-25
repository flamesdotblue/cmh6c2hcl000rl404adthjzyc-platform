import React from 'react';
import { LayoutDashboard, Menu } from 'lucide-react';

export default function EduNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c10]/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.35)]">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-tight">CampusNexus ERP + AI</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#modules" className="hover:text-white transition">Modules</a>
          <a href="#insights" className="hover:text-white transition">Insights</a>
          <a href="#trust" className="hover:text-white transition">Trust</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#demo" className="inline-flex items-center justify-center rounded-md text-sm font-semibold px-4 py-2 bg-white text-black hover:brightness-110 transition shadow-[0_0_24px_rgba(255,255,255,0.2)]">
            Book Live Demo
          </a>
          <button className="sm:hidden p-2 rounded-md border border-white/10 text-white/80" aria-label="Open Menu"><Menu className="h-5 w-5"/></button>
        </div>
      </div>
    </header>
  );
}
