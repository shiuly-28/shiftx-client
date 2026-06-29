import Navbar from "../components/Navbar";
import { Rocket, ShieldCheck, GitBranch, Layers } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Blazing Fast Performance",
    description:
      "Built on Next.js with optimized rendering and caching for instant page loads and smooth navigation.",
  },
  {
    icon: GitBranch,
    title: "Automated CI/CD",
    description:
      "Every push triggers automated build, test, and deployment pipelines through GitHub Actions and Docker.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Containerized deployments with isolated environments, secrets management, and best-practice security defaults.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Modular components and clean structure that scale easily as your application and team grow.",
  },
];

export default function Features() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-4 my-auto pt-32 pb-16 px-4 md:px-8">

        <div className="text-center mb-14">

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight  mb-4">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
              Built In.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ShiftX combines modern frontend tooling with robust deployment
            automation to help you ship faster, safer, and with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:border-amber-500/30 hover:bg-white/[0.07]"
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600/20 to-amber-600/20 border border-white/10">
                <Icon className="w-6 h-6 text-amber-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}