import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Features from '@/components/Features';
import Tours from '@/components/Tours';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import TourDetailModal from '@/components/TourDetailModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Tour } from '@/data/content';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleBook = () => {
    setSelectedTour(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div ref={ref} className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <Tours onSelectTour={setSelectedTour} />
        <Stats />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <TourDetailModal tour={selectedTour} onClose={() => setSelectedTour(null)} onBook={handleBook} />
    </div>
  );
}

export default App;
