import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">

      {/* নেভবার কম্পোনেন্ট */}
      <Navbar />
        
      <Hero />

    </div>
  );
}