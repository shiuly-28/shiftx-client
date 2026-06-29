"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full max-w-6xl mx-auto  mb-10">

      {/* CTA Section */}
      <div className="relative overflow-hidden p-8 md:p-12 mb-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">

        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"
        />

        <h2 className="relative text-2xl md:text-4xl font-extrabold tracking-tight text-slate-600 mb-4">
          Ready to{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            Ship Faster?
          </span>
        </h2>

        <p className="relative text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Join ShiftX today and experience automated, reliable deployments
          for your next project.
        </p>

        <Link
          href="/dashboard"
          className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-500 hover:to-amber-500 font-medium rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
        >
          ShiftX
        </Link>

        {/* Nav links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/features" className="hover:text-amber-400 transition-colors">Features</Link>
          <Link href="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
         <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
  <FaGithub className="w-5 h-5" />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors">
  <FaTwitter className="w-5 h-5" />
</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
  <FaLinkedin className="w-5 h-5" />
</a>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-8">
        &copy; {new Date().getFullYear()} ShiftX. All rights reserved.
      </p>
    </footer>
  );
}