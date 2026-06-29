export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto mt-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent cursor-pointer">
        ShiftX
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
        <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
        <a href="/features" className="hover:text-amber-400 transition-colors">Features</a>
        <a href="#dashboard" className="hover:text-amber-400 transition-colors">Dashboard</a>
        <a href="/about" className="hover:text-amber-400 transition-colors">About</a>
      </div>

      {/* Right CTA Button */}
      <div>
        <button className="px-5 py-2 text-sm bg-amber-600/20 hover:bg-amber-600/40 text-amber-500 border border-amber-500/30 rounded-lg transition-all duration-200 active:scale-95">
          Sign In
        </button>
      </div>
    </nav>
  );
}