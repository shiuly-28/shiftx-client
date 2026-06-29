import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">

      {/* নেভবার কম্পোনেন্ট */}
      <Navbar />
        
      <Hero />
      <HowItWorks/>
      <Footer/>
    </div>
  );
}