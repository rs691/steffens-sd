import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  dataAiHint?: string;
  category?: string;
  detailsUrl?: string; 
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col h-full rounded-lg group">
      <CardHeader className="p-0 relative">
        <div className="aspect-square w-full overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        {product.category && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
            {product.category}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {product.detailsUrl ? <Link href={product.detailsUrl}>{product.name}</Link> : product.name}
        </CardTitle>
        <CardDescription className="text-foreground/80 text-sm line-clamp-3 mb-3">{product.description}</CardDescription>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground sm:flex-1" asChild>
           {product.detailsUrl ? <Link href={product.detailsUrl}><Eye className="mr-2 h-4 w-4" />View</Link> : <span><Eye className="mr-2 h-4 w-4" />View</span>}
        </Button>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground sm:flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
