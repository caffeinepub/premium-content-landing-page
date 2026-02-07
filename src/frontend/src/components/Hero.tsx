import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onUnlockClick: () => void;
}

export default function Hero({ onUnlockClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-background-blurred.dim_1920x1080.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.4)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm font-medium text-luxury-gold">Exclusive Premium Content</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="block text-white">Unlock Your</span>
            <span className="block bg-gradient-to-r from-luxury-red via-luxury-gold to-luxury-red bg-clip-text text-transparent">
              Premium Access
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience exclusive content curated for discerning individuals. 
            One-time access, lifetime value.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={onUnlockClick}
              size="lg"
              className="luxury-cta text-lg px-12 py-7 rounded-full font-bold shadow-2xl shadow-luxury-red/50 hover:shadow-luxury-gold/50 transition-all duration-300 hover:scale-105"
            >
              Unlock Now - $29
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>One-Time Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Private & Secure</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
