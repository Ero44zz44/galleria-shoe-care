import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Location />
      <Footer />
    </main>
  );
}
