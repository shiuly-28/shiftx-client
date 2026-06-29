"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">

      {/* Background pattern - tiled */}
      <div
        className="absolute inset-0 bg-repeat opacity-50"
        style={{ backgroundImage: "url('/pipeline-bg.svg')", backgroundSize: "700px 400px" }}
        aria-hidden="true"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 pointer-events-none" />

      <main className="relative z-10 max-w-4xl mx-4 my-auto pt-32 pb-12 p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-md text-center transition-all duration-300 hover:border-white/20">

        {/* Subtle glow background */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Hero Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
          Next-Gen Web Applications <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            Built with Precision.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience a seamless, fast, and modern user interface powered by{" "}
          <span className="text-slate-300 font-medium">Next.js</span>,{" "}
          <span className="text-slate-300 font-medium">Tailwind CSS</span>, and
          robust CI/CD automated workflows.
        </p>

        {/* Action Buttons */}
       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link
    href="/signin"
    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-500 hover:to-amber-500 font-medium rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    Get Started
    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>

  <Link
    href="/signup"
    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00684D]-600 to-amber-600 hover:from-[#00684D]-500 hover:to-amber-500 font-medium rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    Learn More
  </Link>
</div>
      </main>
    </div>
  );
}