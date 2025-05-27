import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <CreditCard className="w-10 h-10 mr-3 text-accent" />
          Checkout
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Complete your purchase. This is a placeholder page for a full checkout experience.
        </p>
      </section>

      <Card className="max-w-2xl mx-auto p-8 shadow-xl">
        <CardHeader className="text-center p-0 mb-6">
          <CardTitle className="text-2xl text-primary">Secure Payment</CardTitle>
          <CardDescription className="flex items-center justify-center text-muted-foreground mt-2">
            <Lock className="h-4 w-4 mr-1" /> Your information is secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-foreground/90">
            In a real application, this page would include forms for shipping address, billing address, and payment information (e.g., Stripe or PayPal integration).
          </p>
          <div className="h-48 bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground text-lg">Payment Gateway Integration Area</p>
          </div>
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled>
            Place Order (Disabled)
          </Button>
           <Button asChild variant="outline" className="w-full mt-4">
            <Link href="/shop">Return to Shop</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
