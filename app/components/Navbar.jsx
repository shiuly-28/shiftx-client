import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto mt-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
      {/* Logo */}
     <Link
  href="/"
  className="text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent cursor-pointer"
>
  NexisFlow
</Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
        <Link href="/" className="hover:text-amber-400 transition-colors">
  Home
</Link>
       <Link href="/features" className="hover:text-amber-400 transition-colors">
  Features
</Link>
<Link href="/dashboard" className="hover:text-amber-400 transition-colors">
  Dashboard
</Link>
<Link href="/about" className="hover:text-amber-400 transition-colors">
  About
</Link>
      </div>

     {/* Right CTA Buttons */}
<div className="flex items-center gap-3">
  <Link href="/signin" className="px-5 py-2 text-sm bg-amber-600/20 hover:bg-amber-600/40 text-amber-500 border border-amber-500/30 rounded-lg transition-all duration-200 active:scale-95">
    Sign In
  </Link>
  <Link href="/signup" className="px-5 py-2 text-sm bg-amber-600/20 hover:bg-amber-600/40 text-amber-500 border border-amber-500/30 rounded-lg transition-all duration-200 active:scale-95">
    Sign Up
  </Link>
</div>
    </nav>
  );
}