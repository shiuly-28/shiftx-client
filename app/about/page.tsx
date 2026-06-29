import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans  text-white">

      <Navbar />

      <main className="relative z-10 max-w-4xl mx-4 my-auto pt-32 pb-12 p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">

        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">
          About ShiftX
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
          Built for Modern Teams
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          ShiftX is a next-generation web application platform designed with
          performance, scalability, and developer experience in mind. We
          combine Next.js, Tailwind CSS, and automated CI/CD workflows to
          deliver fast, reliable, and modern digital products.
        </p>

      </main>
    </div>
  );
}