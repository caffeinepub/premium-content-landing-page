import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyUnlockButton from './components/StickyUnlockButton';
import UnlockModal from './components/UnlockModal';

export default function App() {
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const handleUnlockClick = () => {
    setIsUnlockModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onUnlockClick={handleUnlockClick} />
      <Features />
      <Testimonials />
      <Pricing onUnlockClick={handleUnlockClick} />
      <FAQ />
      <Footer />
      <StickyUnlockButton onClick={handleUnlockClick} />
      <UnlockModal 
        isOpen={isUnlockModalOpen} 
        onClose={() => setIsUnlockModalOpen(false)} 
      />
    </div>
  );
}
