import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-luxury-red to-luxury-gold bg-clip-text text-transparent">
              Premium Access
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Exclusive content for discerning individuals. Experience the difference that quality makes.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-card hover:bg-luxury-gold/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-card hover:bg-luxury-gold/20 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-card hover:bg-luxury-gold/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2025. Built with <Heart className="w-4 h-4 text-luxury-red fill-luxury-red" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-luxury-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
