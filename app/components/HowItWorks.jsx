"use client";

import { GitBranch, Hammer, Rocket, Users, Server, Clock } from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    step: "01",
    title: "Push Your Code",
    description: "Commit and push changes to your repository on GitHub.",
    glowColor: "group-hover:border-amber-500/40"
  },
  {
    icon: Hammer,
    step: "02",
    title: "Automated Build",
    description: "CI/CD pipeline automatically builds, tests, and packages your app into a Docker image.",
    glowColor: "group-hover:border-purple-500/40"
  },
  {
    icon: Rocket,
    step: "03",
    title: "Instant Deploy",
    description: "The new image is deployed to your server automatically, with zero manual steps.",
    glowColor: "group-hover:border-blue-500/40"
  },
];

const stats = [
  { icon: Users, value: "10K+", label: "Active Users", fromColor: "from-amber-400", toColor: "to-orange-500" },
  { icon: Server, value: "99.9%", label: "Uptime", fromColor: "from-purple-400", toColor: "to-pink-500" },
  { icon: Clock, value: "<2min", label: "Avg Deploy Time", fromColor: "from-blue-400", toColor: "to-cyan-500" },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto py-20 md:py-28 px-4">
      
      {/* Background Decorative Neon Core (Unique Addition) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 via-purple-500/5 to-blue-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-600 mb-4">
          From Commit to{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
            Production.
          </span>
        </h2>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A fully automated pipeline that takes your code from a single push
          to a live deployment, every time.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
        {steps.map(({ icon: Icon, step, title, description, glowColor }) => (
          <div
            key={step}
            className={`group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] ${glowColor}`}
          >
            {/* Unique Dynamic Subtle Background Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <span className="absolute top-4 right-5 text-5xl font-black bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-transparent select-none">
              {step}
            </span>

            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 group-hover:scale-110">
              <Icon className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
            </div>

            <h3 className="text-xl font-bold  mb-2 group-hover:text-amber-300 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed transition-colors group-hover:text-slate-300">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section with Multi-Gradient Borders */}
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 md:p-10 rounded-2xl bg-[#0f141c]/90 backdrop-blur-2xl">
          {stats.map(({ icon: Icon, value, label, fromColor, toColor }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-inner">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <span className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${fromColor} ${toColor} bg-clip-text text-transparent tracking-tight`}>
                {value}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 group-hover:text-slate-400 transition-colors mt-1.5 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}