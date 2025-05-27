import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { MinusCircle, PlusCircle, Trash2, ShoppingCart, XCircle } from 'lucide-react';
import Link from 'next/link';

// Mock cart data
const cartItems = [
  { id: 'p1', name: 'Handcarved Coasters (Set of 4)', price: 45.00, quantity: 1, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'wood coasters' },
  { id: 'p2', name: 'Artisan Cutting Board', price: 89.99, quantity: 1, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'cutting board wood' },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shippingEstimate = 15.00; // Example shipping
const taxEstimate = subtotal * 0.08; // Example 8% tax
const total = subtotal + shippingEstimate + taxEstimate;

export default function CartPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <ShoppingCart className="w-10 h-10 mr-3 text-accent" />
          Your Shopping Cart
        </h1>
      </section>

      {cartItems.length === 0 ? (
        <Card className="text-center p-12 shadow-lg">
          <XCircle className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <CardTitle className="text-2xl text-primary mb-4">Your Cart is Empty</CardTitle>
          <CardDescription className="text-lg text-foreground/80 mb-8">
            Looks like you haven't added any items to your cart yet.
          </CardDescription>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Items in Cart</h2>
            {cartItems.map(item => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 shadow-md">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden flex-shrink-0 border">
                  <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint}/>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-medium text-primary">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive">
                      <MinusCircle className="h-5 w-5" />
                    </Button>
                    <Input type="number" value={item.quantity} readOnly className="w-12 h-8 text-center bg-background" />
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
                      <PlusCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-end space-y-2 sm:space-y-0">
                   <p className="text-lg font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                   <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </Card>
            ))}
          </section>

          <section className="lg:col-span-1">
            <Card className="p-6 shadow-xl sticky top-24">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-primary">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-0">
                <div className="flex justify-between text-foreground/90">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/90">
                  <span>Shipping (Estimate)</span>
                  <span>${shippingEstimate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/90">
                  <span>Tax (Estimate)</span>
                  <span>${taxEstimate.toFixed(2)}</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between text-xl font-bold text-primary">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="mt-8 p-0">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      )}
    </div>
  );
}
