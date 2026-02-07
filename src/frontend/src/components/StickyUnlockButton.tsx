import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

interface StickyUnlockButtonProps {
  onClick: () => void;
}

export default function StickyUnlockButton({ onClick }: StickyUnlockButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
      <Button
        onClick={onClick}
        size="lg"
        className="luxury-cta rounded-full px-8 py-6 shadow-2xl shadow-luxury-red/50 hover:shadow-luxury-gold/50 transition-all duration-300 hover:scale-110 font-bold"
      >
        <Lock className="w-5 h-5 mr-2" />
        Unlock Now
      </Button>
    </div>
  );
}
