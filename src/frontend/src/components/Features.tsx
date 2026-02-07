import { Card, CardContent } from '@/components/ui/card';
import { Crown, Lock, Zap, Shield, Star, Gem } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Exclusive Content',
    description: 'Access premium materials unavailable anywhere else, curated specifically for our members.',
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get immediate access to all content the moment your payment is confirmed.',
  },
  {
    icon: Lock,
    title: 'Private & Discreet',
    description: 'Your privacy is paramount. All transactions and access are completely confidential.',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-level encryption ensures your data and payment information stay protected.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Every piece of content meets our rigorous standards for excellence and value.',
  },
  {
    icon: Gem,
    title: 'Lifetime Access',
    description: 'One payment, forever access. No subscriptions, no recurring charges.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Choose <span className="text-luxury-gold">Premium Access</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that true quality and exclusivity make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="luxury-card group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-luxury-gold/20"
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br from-luxury-red/20 to-luxury-gold/20 group-hover:from-luxury-red/30 group-hover:to-luxury-gold/30 transition-colors">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
