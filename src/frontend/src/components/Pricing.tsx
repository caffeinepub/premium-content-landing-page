import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onUnlockClick: () => void;
}

const features = [
  'Instant access to all premium content',
  'Lifetime membership - no recurring fees',
  'Private and secure platform',
  'High-quality exclusive materials',
  'Mobile and desktop access',
  'Priority customer support',
  'Regular content updates',
  'Money-back guarantee',
];

export default function Pricing({ onUnlockClick }: PricingProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Simple, <span className="text-luxury-gold">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One payment. Lifetime access. No hidden fees.
          </p>
        </div>
        
        <Card className="luxury-card-premium relative overflow-hidden">
          {/* Premium Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-br from-luxury-red to-luxury-gold text-white px-6 py-2 rounded-bl-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>PREMIUM</span>
          </div>
          
          <CardHeader className="text-center pt-12 pb-8">
            <CardTitle className="text-3xl font-black mb-4">Premium Access</CardTitle>
            <div className="space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-black bg-gradient-to-r from-luxury-red to-luxury-gold bg-clip-text text-transparent">
                  $29
                </span>
              </div>
              <p className="text-muted-foreground text-lg">One-time payment</p>
            </div>
          </CardHeader>
          
          <CardContent className="px-8 pb-12">
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button
              onClick={onUnlockClick}
              size="lg"
              className="luxury-cta w-full text-lg py-7 rounded-full font-bold shadow-2xl shadow-luxury-red/50 hover:shadow-luxury-gold/50 transition-all duration-300 hover:scale-105"
            >
              Unlock Premium Access Now
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Secure payment • Instant access • 30-day money-back guarantee
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
