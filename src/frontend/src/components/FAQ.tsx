import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What exactly do I get with premium access?',
    answer: 'You receive instant, lifetime access to our entire collection of exclusive premium content. This includes all current materials and any future updates we add to the platform.',
  },
  {
    question: 'Is this a one-time payment or a subscription?',
    answer: 'This is a one-time payment of $29. There are no recurring charges, no hidden fees, and no subscriptions. Pay once, access forever.',
  },
  {
    question: 'How quickly will I get access?',
    answer: 'Access is instant. The moment your payment is confirmed, you will receive immediate access to all premium content. No waiting, no delays.',
  },
  {
    question: 'Is my privacy protected?',
    answer: 'Absolutely. We use bank-level encryption for all transactions and data. Your information is completely confidential and secure. We never share your data with third parties.',
  },
  {
    question: 'What if I\'m not satisfied?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your premium access, contact our support team for a full refund, no questions asked.',
  },
  {
    question: 'Can I access the content on multiple devices?',
    answer: 'Yes! Your premium access works on all your devices - desktop, tablet, and mobile. Access your content anywhere, anytime.',
  },
  {
    question: 'Are there any additional costs?',
    answer: 'No. The $29 one-time payment includes everything. There are no additional costs, no upsells, and no hidden fees.',
  },
  {
    question: 'How do I get support if I need help?',
    answer: 'Premium members receive priority customer support. You can reach our team via email, and we typically respond within 24 hours.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Frequently Asked <span className="text-luxury-gold">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about premium access
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="luxury-card px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:text-luxury-gold transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
