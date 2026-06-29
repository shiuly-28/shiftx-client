"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full max-w-6xl mx-auto mb-10 px-4">
      {/* Top Gradient Border Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-amber-600 to-cyan-600 opacity-80 mb-12 rounded-full" />

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start mb-12">
        
        {/* Left Section: Logo & Desc (Spans 5 columns) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-amber-500"
          >
            ShiftX
          </Link>
          <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
            Premium task management for teams that want a polished, secure, and efficient workflow.
          </p>
        </div>

        {/* Middle Section: Quick Links (Spans 4 columns) */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-1">
            Quick Links
          </span>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-500 transition-colors w-fit">Home</Link>
            <Link href="/dashboard" className="hover:text-amber-500 transition-colors w-fit">Dashboard</Link>
            <Link href="/features" className="hover:text-amber-500 transition-colors w-fit">Features</Link>
            <Link href="/support" className="hover:text-amber-500 transition-colors w-fit">Support</Link>
          </div>
        </div>

        {/* Right Section: Social Icons (Spans 3 columns) */}
        <div className="md:col-span-3 flex flex-col gap-4 md:items-start">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Social
          </span>
          <div className="flex items-center gap-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-3 rounded-full bg-amber-500/[0.03] border border-amber-500/10 text-slate-500 hover:text-amber-500 hover:border-amber-500/20 hover:bg-amber-500/[0.06] transition-all duration-200">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-amber-500/[0.03] border border-amber-500/10 text-slate-500 hover:text-amber-500 hover:border-amber-500/20 hover:bg-amber-500/[0.06] transition-all duration-200">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-amber-500/[0.03] border border-amber-500/10 text-slate-500 hover:text-amber-500 hover:border-amber-500/20 hover:bg-amber-500/[0.06] transition-all duration-200">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="pt-6 border-t border-amber-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} ShiftX. Designed for modern product teams.
        </div>
        <div className="text-slate-600">
          Crafted with Tailwind, Framer Motion, and premium glass styling.
        </div>
      </div>
    </footer>
  );
}