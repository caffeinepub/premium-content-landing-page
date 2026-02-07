import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Lock, CreditCard, Shield } from 'lucide-react';

interface UnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnlockModal({ isOpen, onClose }: UnlockModalProps) {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment processing would happen here. This is a demo.');
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md luxury-card-premium">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black flex items-center gap-2">
            <Lock className="w-6 h-6 text-luxury-gold" />
            Unlock Premium Access
          </DialogTitle>
          <DialogDescription className="text-base">
            Complete your purchase to get instant access to all premium content
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Price Display */}
          <div className="bg-gradient-to-br from-luxury-red/10 to-luxury-gold/10 rounded-2xl p-6 text-center border border-luxury-gold/20">
            <div className="text-sm text-muted-foreground mb-2">One-time payment</div>
            <div className="text-5xl font-black bg-gradient-to-r from-luxury-red to-luxury-gold bg-clip-text text-transparent">
              $29
            </div>
            <div className="text-sm text-muted-foreground mt-2">Lifetime access included</div>
          </div>
          
          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50"
            />
          </div>
          
          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              I agree to the terms and conditions and privacy policy. I understand this is a one-time payment for lifetime access.
            </label>
          </div>
          
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isProcessing || !email || !agreedToTerms}
            className="luxury-cta w-full py-6 text-lg font-bold rounded-full"
          >
            {isProcessing ? (
              <>Processing...</>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Complete Purchase
              </>
            )}
          </Button>
          
          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-luxury-gold" />
            <span>Secure payment • 256-bit encryption</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
