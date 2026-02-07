import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Executive Professional',
    image: '/assets/generated/testimonial-person-1.dim_200x200.jpg',
    content: 'The quality exceeded all my expectations. This is exactly what I was looking for - premium content that delivers real value.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    image: '/assets/generated/testimonial-person-2.dim_200x200.jpg',
    content: 'Worth every penny. The one-time payment model is refreshing, and the content is absolutely top-tier. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Jessica Rodriguez',
    role: 'Creative Director',
    image: '/assets/generated/testimonial-person-3.dim_200x200.jpg',
    content: 'I appreciate the discretion and professionalism. The platform is secure, and the content is exactly as advertised.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Trusted by <span className="text-luxury-gold">Discerning Members</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have already unlocked premium access
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="luxury-card hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-luxury-gold/30"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
